import { Request, Response, NextFunction } from "express";
import { EmployeesService } from "./employees.service";
import { EmployeeType, ServiceStatus } from "../../generated/prisma";

const employeesService = new EmployeesService();

export class EmployeesController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search, type, status, companyId } = req.query;

      const result = await employeesService.findAll({
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        search: search as string,
        type: type as EmployeeType,
        status: status as ServiceStatus,
        companyId: companyId as string,
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
      const employee = await employeesService.findById(req.params.id);

      res.status(200).json({
        success: true,
        data: { employee },
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const employee = await employeesService.create(req.body);

      res.status(201).json({
        success: true,
        data: { employee },
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const employee = await employeesService.update(req.params.id, req.body);

      res.status(200).json({
        success: true,
        data: { employee },
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await employeesService.delete(req.params.id);

      res.status(200).json({
        success: true,
        message: "Employee deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
