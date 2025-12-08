import { Request, Response, NextFunction } from "express";
import { ComplexesService } from "../services/complexes.service";

const complexesService = new ComplexesService();

export class ComplexesController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const complexes = await complexesService.findAll(req.query);
      res.status(200).json({
        success: true,
        data: complexes,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const complex = await complexesService.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: complex,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const complex = await complexesService.create(req.body);
      res.status(201).json({
        success: true,
        data: complex,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const complex = await complexesService.update(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        status: req.body.status,
        condition: req.body.condition,
        criticality: req.body.criticality,
      });
      res.status(200).json({
        success: true,
        data: complex,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await complexesService.delete(req.params.id);
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
