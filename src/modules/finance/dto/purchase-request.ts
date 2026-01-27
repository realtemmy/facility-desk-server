import { PurchaseStatus } from "../../../generated/prisma";

export interface PurchaseRequestDto {
  id: String;
  description: string;
  status: PurchaseStatus;
  costCenterId: string;
  requesterId: string;
  items: {
    itemId: string;
    quantity: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePurchaseRequestDto extends Omit<PurchaseRequestDto, "id" | "createdAt" | "updatedAt"> {}
