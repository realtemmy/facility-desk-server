import { Request, Response } from "express";
import { CostCenterService } from "./cost-center.service";
import { CreateCostCenterDto } from "./dto/create-cost-center.dto";

const service = new CostCenterService();

export class CostCenterController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body as CreateCostCenterDto;
      const cc = await service.create(data);
      res.status(201).json(cc);
    } catch (e) {
      res
        .status(400)
        .json({ error: e instanceof Error ? e.message : String(e) });
    }
  }

  async index(req: Request, res: Response) {
    const list = await service.findAll();
    res.json(list);
  }

  async show(req: Request, res: Response) {
    try {
      const cc = await service.findById(req.params.id);
      res.json(cc);
    } catch (e) {
      res.status(404).json({ error: "Not Found" });
    }
  }
}
