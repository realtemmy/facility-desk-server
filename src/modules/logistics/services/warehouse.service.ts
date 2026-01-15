import prisma from "../../../lib/prisma";
import { Prisma } from "../../../generated/prisma";
import { CreateWarehouseDto, UpdateWarehouseDto } from "../dtos/warehouse.dto";
import { NotFoundError } from "../../../errors";

export class WarehouseService {
  async findAll(options: { page?: number; limit?: number; search?: string }) {
    const page = Math.max(1, options.page || 1);
    const limit = Math.min(100, Math.max(1, options.limit || 10));
    const skip = (page - 1) * limit;

    const where: Prisma.WarehouseWhereInput = {};
    if (options.search) {
      where.OR = [
        { name: { contains: options.search, mode: "insensitive" } },
        { description: { contains: options.search, mode: "insensitive" } },
      ];
    }

    const [warehouses, total] = await Promise.all([
      prisma.warehouse.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.warehouse.count({ where }),
    ]);

    return {
      warehouses,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string) {
    const warehouse = await prisma.warehouse.findUnique({
      where: { id },
      include: { address: true, stocks: true },
    });

    if (!warehouse) {
      throw new NotFoundError("Warehouse");
    }

    return warehouse;
  }

  async create(data: CreateWarehouseDto) {
    const { address, ...warehouseData } = data;

    return await prisma.warehouse.create({
      data: {
        ...warehouseData,
        address: {
          create: address,
        },
      },
      include: { address: true },
    });
  }

  async update(id: string, data: UpdateWarehouseDto) {
    const { address, ...warehouseData } = data;

    const warehouse = await prisma.warehouse.findUnique({ where: { id } });
    if (!warehouse) throw new NotFoundError("Warehouse");

    const updateData: Prisma.WarehouseUpdateInput = { ...warehouseData };

    if (address) {
      updateData.address = {
        update: address,
      };
    }

    return await prisma.warehouse.update({
      where: { id },
      data: updateData,
      include: { address: true },
    });
  }

  async delete(id: string) {
    const warehouse = await prisma.warehouse.findUnique({ where: { id } });
    if (!warehouse) throw new NotFoundError("Warehouse");

    // Address is cascade deleted by schema definition:
    // address Address @relation(fields: [addressId], references: [id], onDelete: Cascade)

    return await prisma.warehouse.delete({ where: { id } });
  }
}
