import { BadRequestError } from "../../../errors";
import prisma from "../../../lib/prisma";
import { CreatePurchaseOrderDto } from "../dto/purchase-order";
import { CreatePurchaseRequestDto } from "../dto/purchase-request";
import { CostCenterService } from "./cost-center.service";

const costCenterService = new CostCenterService();

export class PurchaseRequestService {
  async create(data: CreatePurchaseRequestDto) {
    const { items, ...rest } = data;
    const pr = await prisma.purchaseRequest.create({
      data: { ...rest, items: { create: items } },
    });

    return pr;
  }

  async approve(prId: string, data: CreatePurchaseOrderDto) {
    // Confirm amount can be covered in budget
    await costCenterService.reserveBudget(
      data.costCenterId,
      data.totalAmount,
    );

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
          status: "ISSUED",
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
