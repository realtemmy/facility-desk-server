import { Request, Response } from "express";
import { SitesService } from "../services/sites.service";
import { createSiteSchema, updateSiteSchema } from "../dto/site.dto";

const service = new SitesService();

export class SitesController {
  async create(req: Request, res: Response) {
    const data = createSiteSchema.parse(req.body);
    const site = await service.create(data);
    res.status(201).json(site);
  }

  async findAll(req: Request, res: Response) {
    const sites = await service.findAll();
    res.status(200).json({
      status: true,
      data: { length: sites.length, sites },
    });
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const site = await service.findOne(id);
    if (!site) return res.status(404).json({ error: "Site not found" });
    res.status(200).json({
      status: true,
      data: { site },
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = updateSiteSchema.parse(req.body);
    const site = await service.update(id, data);
    res.status(200).json({
      status: true,
      data: { site },
    });
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    await service.remove(id);
    res.status(204).json({
      status: true,
      data: null,
      message: "Site deleted successfully",
    });
  }
}
