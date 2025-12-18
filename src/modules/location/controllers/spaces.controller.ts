import { Request, Response, NextFunction } from "express";
import { SpacesService } from "../services/spaces.service";

const spacesService = new SpacesService();

export class SpacesController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const spaces = await spacesService.findAll(req.query);
      res.status(200).json({
        success: true,
        data: spaces,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const space = await spacesService.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: space,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const space = await spacesService.create(req.body);
      res.status(201).json({
        success: true,
        data: space,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const space = await spacesService.update(req.params.id, {
        name: req.body.name,
        use: req.body.use,
        floorId: req.body.floorId,
        zoneId: req.body.zoneId,
        glazedArea: req.body.glazedArea,
        cleanableArea: req.body.cleanableArea,
        coveredArea: req.body.coveredArea,
        totalNetArea: req.body.totalNetArea,
        totalGrossArea: req.body.totalGrossArea,
        totalHeatedVolume: req.body.totalHeatedVolume,
        totalVolume: req.body.totalVolume,
        condition: req.body.condition,
        criticality: req.body.criticality,
        calenderEntityId: req.body.calenderEntityId,
        complexId: req.body.complexId,
        buildingId: req.body.buildingId,
        photoIds: req.body.photoIds,
        status: req.body.status,
      });
      res.status(200).json({
        success: true,
        data: space,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await spacesService.delete(req.params.id);
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
