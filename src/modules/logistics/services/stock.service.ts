import prisma from "../../../lib/prisma";
import { Prisma, StockMovementType } from "../../../generated/prisma";
import {
  CreateStockMovementDto,
  StockFilterDto,
  StockMovementFilterDto,
} from "../dtos/stock.dto";
import { BadRequestError, NotFoundError } from "../../../errors";

export class StockService {
  /**
   * Get current stocks with optional filters
   */
  async getStocks(filters: StockFilterDto & { page?: number; limit?: number }) {
    const { warehouseId, assetId, page = 1, limit = 10 } = filters;
    const skip = (page - 1) * limit;

    const where: Prisma.StockWhereInput = {};
    if (warehouseId) where.warehouseId = warehouseId;
    if (assetId) where.assetId = assetId;

    const [stocks, total] = await Promise.all([
      prisma.stock.findMany({
        where,
        include: {
          asset: { select: { id: true, name: true, category: true } },
          warehouse: { select: { id: true, name: true } },
        },
        skip,
        take: limit,
        orderBy: { quantity: "desc" },
      }),
      prisma.stock.count({ where }),
    ]);

    return {
      stocks,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Get stock movements history
   */
  async getStockMovements(
    filters: StockMovementFilterDto & { page?: number; limit?: number }
  ) {
    const {
      warehouseId,
      assetId,
      type,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = filters;
    const skip = (page - 1) * limit;

    const where: Prisma.StockMovementWhereInput = {};
    if (warehouseId) {
      // For movements, check both source and target warehouses
      where.OR = [
        { warehouseId: warehouseId },
        { targetWarehouseId: warehouseId },
      ];
    }
    // If strict filtering is needed (only source or only target), adjust logic.
    // Usually "movements for a warehouse" implies both incoming and outgoing.
    // However, the `warehouseId` filter above in OR block might conflict if `assetId` is also present combined with AND.
    // Let's refine:

    const andConditions: Prisma.StockMovementWhereInput[] = [];

    if (assetId) andConditions.push({ assetId });
    if (type) andConditions.push({ type });
    if (startDate) andConditions.push({ createdAt: { gte: startDate } });
    if (endDate) andConditions.push({ createdAt: { lte: endDate } });

    if (warehouseId) {
      andConditions.push({
        OR: [{ warehouseId }, { targetWarehouseId: warehouseId }],
      });
    }

    if (andConditions.length > 0) {
      where.AND = andConditions;
    }

    const [movements, total] = await Promise.all([
      prisma.stockMovement.findMany({
        where,
        include: {
          asset: { select: { id: true, name: true } },
          warehouse: { select: { id: true, name: true } },
          targetWarehouse: { select: { id: true, name: true } },
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.stockMovement.count({ where }),
    ]);

    return {
      movements,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Create a new stock movement (Load, Unload, Transfer)
   */
  async createMovement(data: CreateStockMovementDto) {
    const { type, quantity, assetId, warehouseId, targetWarehouseId } = data;

    // Verify Asset and Warehouse exist
    const [asset, warehouse] = await Promise.all([
      prisma.asset.findUnique({ where: { id: assetId } }),
      prisma.warehouse.findUnique({ where: { id: warehouseId } }),
    ]);

    if (!asset) throw new NotFoundError("Asset");
    if (!warehouse) throw new NotFoundError("Warehouse");

    return await prisma.$transaction(async (tx) => {
      // 1. Create the movement record
      const movement = await tx.stockMovement.create({
        data: {
          type,
          quantity,
          assetId,
          warehouseId,
          targetWarehouseId,
        },
      });

      // 2. Update stock based on type
      if (type === StockMovementType.LOAD) {
        // Increase stock in warehouse
        await tx.stock.upsert({
          where: {
            assetId_warehouseId: {
              assetId,
              warehouseId,
            },
          },
          update: { quantity: { increment: quantity } },
          create: {
            assetId,
            warehouseId,
            quantity,
          },
        });
      } else if (type === StockMovementType.UNLOAD) {
        // Decrease stock in warehouse
        const currentStock = await tx.stock.findUnique({
          where: {
            assetId_warehouseId: { assetId, warehouseId },
          },
        });

        if (!currentStock || currentStock.quantity < quantity) {
          throw new BadRequestError("Insufficient stock for unload");
        }

        await tx.stock.update({
          where: {
            assetId_warehouseId: { assetId, warehouseId },
          },
          data: { quantity: { decrement: quantity } },
        });
      } else if (type === StockMovementType.TRANSFER) {
        if (!targetWarehouseId) {
          throw new BadRequestError("Target warehouse required for transfer");
        }

        // Verify target warehouse exists
        const targetWarehouse = await tx.warehouse.findUnique({
          where: { id: targetWarehouseId },
        });
        if (!targetWarehouse) throw new NotFoundError("Target Warehouse");

        // Decrease source
        const sourceStock = await tx.stock.findUnique({
          where: {
            assetId_warehouseId: { assetId, warehouseId },
          },
        });

        if (!sourceStock || sourceStock.quantity < quantity) {
          throw new BadRequestError("Insufficient source stock for transfer");
        }

        await tx.stock.update({
          where: {
            assetId_warehouseId: { assetId, warehouseId },
          },
          data: { quantity: { decrement: quantity } },
        });

        // Increase target
        await tx.stock.upsert({
          where: {
            assetId_warehouseId: {
              assetId,
              warehouseId: targetWarehouseId,
            },
          },
          update: { quantity: { increment: quantity } },
          create: {
            assetId,
            warehouseId: targetWarehouseId,
            quantity,
          },
        });
      }

      return movement;
    });
  }
}
