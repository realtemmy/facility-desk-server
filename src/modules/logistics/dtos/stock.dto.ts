import { StockMovementType } from "../../../generated/prisma";

export interface CreateStockMovementDto {
  type: StockMovementType;
  quantity: number;
  assetId: string;
  warehouseId: string;
  targetWarehouseId?: string; // Required if type is TRANSFER
  notes?: string;
}

export interface StockFilterDto {
  warehouseId?: string;
  assetId?: string;
}

export interface StockMovementFilterDto {
  warehouseId?: string;
  assetId?: string;
  type?: StockMovementType;
  startDate?: Date;
  endDate?: Date;
}
