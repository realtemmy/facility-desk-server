import { Request, Response } from "express";
import { ZonesService } from "../services/zones.service";

const service = new ZonesService();

export class ZonesController {
  async findAll(req: Request, res: Response) {
    try {
      // Cast query params to correct types if needed (e.g. numbers)
      const page = req.query.page ? Number(req.query.page) : undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;

      const result = await service.findAll({ ...req.query, page, limit });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch zones" });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const zone = await service.findById(req.params.id);
      res.json(zone);
    } catch (error: any) {
      if (error.name === "NotFoundError") {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: "Failed to fetch zone" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      // Add validation logic here (e.g. Zod) if not handled middleware
      const zone = await service.create(req.body);
      res.status(201).json(zone);
    } catch (error) {
      res.status(400).json({ error: "Failed to create zone" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const zone = await service.update(req.params.id, req.body);
      res.json(zone);
    } catch (error: any) {
      if (error.name === "NotFoundError") {
        return res.status(404).json({ error: error.message });
      }
      res.status(400).json({ error: "Failed to update zone" });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      await service.delete(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      if (error.name === "NotFoundError") {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: "Failed to delete zone" });
    }
  }
}
