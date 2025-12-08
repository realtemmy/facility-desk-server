import { Request, Response, NextFunction } from "express";
import { FloorsService } from "../services/floors.service";

const floorsService = new FloorsService();

export class FloorsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const floors = await floorsService.findAll(req.query);
      res.status(200).json({
        success: true,
        data: floors,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const floor = await floorsService.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: floor,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const floor = await floorsService.create(req.body);
      res.status(201).json({
        success: true,
        data: floor,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const floor = await floorsService.update(req.params.id, {
        name: req.body.name,
        level: req.body.level,
        grossArea: req.body.grossArea,
        status: req.body.status,
        condition: req.body.condition,
        criticality: req.body.criticality,
        buildingId: req.body.buildingId,
      });
      res.status(200).json({
        success: true,
        data: floor,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await floorsService.delete(req.params.id);
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
