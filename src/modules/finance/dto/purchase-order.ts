import { PurchaseOrderStatus } from "../../../generated/prisma";

export interface PurchaseOrder {
  id: string;
  status: PurchaseOrderStatus;
  purchaseRequestId: string;
  supplierId: string;
  costCenterId: string;
  totalAmount: number;
  items?: PurchaseOrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PurchaseOrderItem {
  id: string;
  purchaseOrderId: string;
  itemId: string;
  quantity: number;
  unitPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePurchaseOrderDto extends Omit<
  PurchaseOrder,
  "id" | "createdAt" | "updatedAt"
> {}
