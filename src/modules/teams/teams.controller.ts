import { Request, Response, NextFunction } from "express";
import { TeamsService } from "./teams.service";
import { ServiceStatus } from "../../generated/prisma";

const teamsService = new TeamsService();

export class TeamsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search, status } = req.query;

      const result = await teamsService.findAll({
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        search: search as string,
        status: status as ServiceStatus,
      });

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const team = await teamsService.findById(req.params.id);

      res.status(200).json({
        success: true,
        data: { team },
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const team = await teamsService.create(req.body);

      res.status(201).json({
        success: true,
        data: { team },
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const team = await teamsService.update(req.params.id, req.body);

      res.status(200).json({
        success: true,
        data: { team },
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await teamsService.delete(req.params.id);

      res.status(200).json({
        success: true,
        message: "Team deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
