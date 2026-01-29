import { Request, Response, NextFunction } from "express";
import prisma from "../../../lib/prisma";
import { PurchaseRequestService } from "../services/purchaseRequest.service";

const purchaseRequestService = new PurchaseRequestService();

export class PurchaseRequestController {
  async getAll() {
    return prisma.purchaseRequest.findMany();
  }
  async getById(id: string) {
    return prisma.purchaseRequest.findUnique({ where: { id } });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const pr = await purchaseRequestService.create(req.body);
      res.status(201).json({
        status: true,
        data: pr,
      });
    } catch (error) {
      next(error);
    }
  }

  async approvePR(req: Request, res: Response) {
    const response = await purchaseRequestService.approve(
      req.params.id,
      req.body,
    );
    return response;
  }
}
