import { Request, Response, NextFunction } from "express";
import prisma from "../../../lib/prisma";
import { CreatePurchaseRequestDto } from "../dto/purchase-request";
import { PurchaseRequestService } from "../services/purchaseRequest.service";

const purchaseRequestService = new PurchaseRequestService();

export class PurchaseRequestController {
  async getAll() {
    return prisma.purchaseRequest.findMany();
  }
  async getById(id: string) {
    return prisma.purchaseRequest.findUnique({ where: { id } });
  }

  async create(data: CreatePurchaseRequestDto) {
    const { items, ...rest } = data;
    const pr = await prisma.purchaseRequest.create({
      data: {
        ...rest,
        items: {
          create: items,
        },
      },
    });
    return pr;
  }

  async approvePR(req: Request, res: Response) {
    const response = await purchaseRequestService.approve(
      req.params.id,
      req.body,
    );
    return response;
  }
}
