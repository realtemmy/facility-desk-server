import { Request, Response, NextFunction } from "express";
import { RoomsService } from "../services/rooms.service";

const roomsService = new RoomsService();

export class RoomsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const rooms = await roomsService.findAll(req.query);
      res.status(200).json({
        success: true,
        data: rooms,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const room = await roomsService.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const room = await roomsService.create(req.body);
      res.status(201).json({
        success: true,
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const room = await roomsService.update(req.params.id, {
        name: req.body.name,
        use: req.body.use,
        floorId: req.body.floorId,
        unitId: req.body.unitId,
      });
      res.status(200).json({
        success: true,
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await roomsService.delete(req.params.id);
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
