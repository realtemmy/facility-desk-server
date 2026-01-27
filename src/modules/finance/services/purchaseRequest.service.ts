import prisma from "../../../lib/prisma";
import { CreatePurchaseOrderDto } from "../dto/purchase-order";
import { CostCenterService } from "./cost-center.service";

const costCenterService = new CostCenterService();

export class PurchaseRequestService {
  async approve(prId: string, data: CreatePurchaseOrderDto) {
    const costCenter = await costCenterService.checkBudgetAvailability(
      data.costCenterId,
      data.totalAmount,
    );
    if (!costCenter) throw new Error("Budget Limit Exceeded");

    const { purchaseRequestId, items, ...rest } = data;

    const [_, po] = await prisma.$transaction([
      prisma.purchaseRequest.update({
        where: { id: prId },
        data: {
          status: "APPROVED",
        },
      }),
      prisma.purchaseOrder.create({
        data: {
          ...rest,
          purchaseRequestId: prId,
          items: items
            ? {
                create: items.map((item) => ({
                  itemId: item.itemId,
                  quantity: item.quantity,
                  unitPrice: item.unitPrice,
                  totalPrice: item.quantity * item.unitPrice,
                })),
              }
            : undefined,
        },
      }),
    ]);

    return po;
  }
}
