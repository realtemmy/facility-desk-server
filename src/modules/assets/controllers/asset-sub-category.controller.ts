import { Request, Response, NextFunction } from "express";
import { AssetSubCategoryService } from "../services/asset-sub-category.service";

const assetSubCategoryService = new AssetSubCategoryService();

export class AssetSubCategoryController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const subCategories = await assetSubCategoryService.findAll(req.query);
      res.status(200).json({
        success: true,
        data: subCategories,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const subCategory = await assetSubCategoryService.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: subCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const subCategory = await assetSubCategoryService.create(req.body);
      res.status(201).json({
        success: true,
        data: subCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const subCategory = await assetSubCategoryService.update(req.params.id, req.body);
      res.status(200).json({
        success: true,
        data: subCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await assetSubCategoryService.delete(req.params.id);
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

