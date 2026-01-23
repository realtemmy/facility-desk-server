import prisma from "../../lib/prisma";
import { Prisma } from "../../generated/prisma";

export class MeterService {

  async create(data: Prisma.MeterCreateInput) {
    return await prisma.meter.create({
      data,
    });
  }

  async findAll() {
    return await prisma.meter.findMany({
      include: {
        asset: { select: { name: true } },
        building: { select: { name: true } },
        zone: { select: { name: true } },
        space: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findOne(id: string) {
    return await prisma.meter.findUnique({
      where: { id },
      include: {
        readings: {
          orderBy: { timestamp: "desc" },
          take: 5, // Last 5 readings
        },
        preventiveTriggers: true,
      },
    });
  }

  async update(id: string, data: Prisma.MeterUpdateInput) {
    return await prisma.meter.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    return await prisma.meter.delete({
      where: { id },
    });
  }
}
