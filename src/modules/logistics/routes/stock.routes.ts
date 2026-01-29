import { Router } from "express";
import { StockController } from "../controllers/stock.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { requirePermission } from "../../../middleware/permission.middleware";
import { validate } from "../../../middleware/validate.middleware";
import {
  createStockMovementValidation,
  stockFilterValidation,
  stockMovementFilterValidation,
} from "../validations/stock.validation";

const router = Router();
const stockController = new StockController();

router.use(authenticate);

router.get(
  "/stocks",
  requirePermission("Stock", "READ"),
  validate(stockFilterValidation),
  stockController.getStocks,
);

router.get(
  "/movements",
  requirePermission("Stock", "READ"),
  validate(stockMovementFilterValidation),
  stockController.getMovements,
);

router.post(
  "/movements",
  requirePermission("Stock", "WRITE"),
  validate(createStockMovementValidation),
  stockController.createMovement,
);

export default router;
