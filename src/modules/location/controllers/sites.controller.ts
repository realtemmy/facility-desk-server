import { Request, Response } from "express";
import { SitesService } from "../services/sites.service";
import { createSiteSchema, updateSiteSchema } from "../dto/site.dto";

const service = new SitesService();

export class SitesController {
  async create(req: Request, res: Response) {
    try {
      const data = createSiteSchema.parse(req.body);
      const site = await service.create(data);
      res.status(201).json(site);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const sites = await service.findAll();
      res.json(sites);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch sites" });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const site = await service.findOne(id);
      if (!site) return res.status(404).json({ error: "Site not found" });
      res.json(site);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch site" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = updateSiteSchema.parse(req.body);
      const site = await service.update(id, data);
      res.json(site);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await service.remove(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete site" });
    }
  }
}
