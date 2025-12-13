import { Request, Response, NextFunction } from "express";
import { CompaniesService } from "./companies.service";
import { CompanyType } from "../../generated/prisma";

const companiesService = new CompaniesService();

export class CompaniesController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search, type } = req.query;

      const result = await companiesService.findAll({
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        search: search as string,
        type: type as CompanyType,
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
      const company = await companiesService.findById(req.params.id);

      res.status(200).json({
        success: true,
        data: { company },
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const company = await companiesService.create(req.body);

      res.status(201).json({
        success: true,
        data: { company },
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const company = await companiesService.update(req.params.id, req.body);

      res.status(200).json({
        success: true,
        data: { company },
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await companiesService.delete(req.params.id);

      res.status(200).json({
        success: true,
        message: "Company deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
