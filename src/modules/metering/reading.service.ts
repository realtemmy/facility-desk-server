import prisma from "../../lib/prisma";
import {
  MeterMaintenanceTrigger,
  MeterReading,
  Prisma,
} from "../../generated/prisma";
import { MaintenanceService } from "../maintenance/maintenance.service";

const maintenanceService = new MaintenanceService();

export class ReadingService {
  /**
   * Record a new reading and check for triggers
   */
  async recordReading(data: Prisma.MeterReadingCreateInput) {
    // 1. Create the reading
    const reading = await prisma.meterReading.create({
      data,
      include: { meter: true },
    });

    // 2. Check and process triggers (Async, don't block response?)
    // For now, let's await it to ensure consistency during dev
    await this.processTriggers(reading);

    return reading;
  }

  // Process Maintenance Triggers for a given reading
  private async processTriggers(reading: any) {
    // Fetch active triggers for this meter
    const triggers = await prisma.meterMaintenanceTrigger.findMany({
      where: { meterId: reading.meterId },
      include: { preventive: true },
    });

    for (const trigger of triggers) {
      if (reading.meter.type === "CUMULATIVE") {
        await this.handleCumulativeTrigger(trigger, reading); // e.g units consumed
      } else if (reading.meter.type === "GAUGE") {
        await this.handleGaugeTrigger(trigger, reading); // e.g fuel level/temperature
      }
    }
  }

  private async handleCumulativeTrigger(trigger: any, reading: any) {
    if (trigger.condition !== "EVERY_X_UNITS") return;

    const last = Number(trigger.lastTriggerReading || 0);
    const current = Number(reading.value);
    const threshold = Number(trigger.triggerValue);

    // e.g. Last: 1000, Current: 2050, Threshold: 1000. Diff = 1050. Trigger!
    if (current - last >= threshold) {
      console.log(
        `[Trigger] Meter ${trigger.meterId} hit cumulative threshold. Spawning Maintenance.`,
      );

      await this.spawnMaintenance(trigger);

      // Update last trigger reading to current
      await prisma.meterMaintenanceTrigger.update({
        where: { id: trigger.id },
        data: { lastTriggerReading: current },
      });
    }
  }

  private async handleGaugeTrigger(
    trigger: MeterMaintenanceTrigger,
    reading: MeterReading,
  ) {
    const current = Number(reading.value);
    const threshold = Number(trigger.triggerValue);
    let shouldTrigger = false;

    if (trigger.condition === "ABOVE_THRESHOLD" && current > threshold) {
      shouldTrigger = true;
    } else if (trigger.condition === "BELOW_THRESHOLD" && current < threshold) {
      shouldTrigger = true;
    }

    if (shouldTrigger) {
      const existingMaintenance = await prisma.maintenance.findFirst({
        where: {
          prevMaintenanceConfigId: trigger.preventiveId,
          processStatus: {
            in: ["PENDING", "IN_PROGRESS"],
          },
        },
      });

      if (!existingMaintenance) {
        await this.spawnMaintenance(trigger);
      }
    }
  }

  private async spawnMaintenance(trigger: MeterMaintenanceTrigger) {
    // Use the Preventive template to create a Maintenance
    await maintenanceService.createFromPreventive(trigger.preventiveId);
  }
}
