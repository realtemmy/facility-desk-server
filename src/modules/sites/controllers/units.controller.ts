import { Request, Response, NextFunction } from "express";
import { UnitsService } from "../services/units.service";

const unitsService = new UnitsService();

export class UnitsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const units = await unitsService.findAll(req.query);
      res.status(200).json({
        success: true,
        data: units,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const unit = await unitsService.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: unit,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const unit = await unitsService.create(req.body);
      res.status(201).json({
        success: true,
        data: unit,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const unit = await unitsService.update(req.params.id, req.body);
      res.status(200).json({
        success: true,
        data: unit,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await unitsService.delete(req.params.id);
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
