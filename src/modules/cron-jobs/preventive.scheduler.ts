import cron from "node-cron";
import prisma from "../../lib/prisma";
import {
  MaintenanceType,
  Status,
  Frequency,
  Priority,
} from "../../generated/prisma";

export const initPreventiveScheduler = () => {
  console.log("Initializing Preventive Maintenance Scheduler...");

  // Run every minute to check for due preventive maintenances, maybe change to daily
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();

      // Find preventive templates that are due
      const duePreventives = await prisma.preventive.findMany({
        where: {
          nextRun: { lte: now },
        },
      });

      for (const preventive of duePreventives) {
        console.log(
          `Generating maintenance for Preventive: ${preventive.code}`
        );

        // Create Maintenance Task
        const code = `PREV-${Date.now()}-${preventive.code}`;

        await prisma.maintenance.create({
          data: {
            type: MaintenanceType.PREVENTIVE,
            code,
            description: preventive.description, // Or `Preventive: ${preventive.name}`
            priority: preventive.priority || Priority.MEDIUM,
            processStatus: Status.PENDING,

            // Relations
            siteId: preventive.siteId,
            ...(preventive.assetId && { assetId: preventive.assetId }),
            ...(preventive.buildingId && { buildingId: preventive.buildingId }),
            ...(preventive.floorId && { floorId: preventive.floorId }),
            ...(preventive.roomId && { roomId: preventive.roomId }),

            startDate: now,
            endDate: new Date(
              now.getTime() + (preventive.duration || 60) * 60000
            ),
            // requesterId: Maybe use system default ID or the role of the requester eg SYSTEM, ADMIN, TECHNICIAN etc?
            // "The fields `performer`, `requester` and `assignee` in model `Maintenance` both refer to `Employee`."
            // Requester is Employee.
            // Add a default admin employee to the database, ie a default Max MiGold admin account.
          },
        });
      }
    } catch (error) {
      console.error("Error in preventive scheduler:", error);
    }
  });
};
