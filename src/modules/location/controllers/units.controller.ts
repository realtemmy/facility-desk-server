import { Request, Response, NextFunction } from "express";
import { UnitsService } from "../services/units.service";
import { Decimal } from "../../../generated/prisma/runtime/client";

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
      const unit = await unitsService.update(req.params.id, {
        name: req.body.name,
        availability: req.body.availability,
        status: req.body.status,
        calenderEntityId: req.body.calenderEntityId,
        complexId: req.body.complexId,
        buildingId: req.body.buildingId,
        floorId: req.body.floorId,
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipCode,
        totalRooms: req.body.totalRooms,
        glazedArea: req.body.glazedArea,
        cleanableArea: req.body.cleanableArea,
        coveredArea: req.body.coveredArea,
        totalNetArea: req.body.totalNetArea,
        totalGrossArea: req.body.totalGrossArea,
        totalHeatedVolume: req.body.totalHeatedVolume,
        totalVolume: req.body.totalVolume,
        cadastralArea: req.body.cadastralArea,
        urbanSection: req.body.urbanSection,
        sheet: req.body.sheet,
        plot: req.body.plot,
        subordinate: req.body.subordinate,
        class: req.body.class,
        size: req.body.size,
        propertyRightsAndDuties: req.body.propertyRightsAndDuties,
        cadastralIncome: Decimal(req.body.cadastralIncome),
        censusArea: req.body.censusArea,
        subArea: req.body.subArea,
        photoIds: req.body.photoIds,
      });
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
