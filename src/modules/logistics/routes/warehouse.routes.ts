import { Router } from "express";
import { WarehouseController } from "../controllers/warehouse.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { requirePermission } from "../../../middleware/permission.middleware";
import { validate } from "../../../middleware/validate.middleware";
import {
  createWarehouseValidation,
  updateWarehouseValidation,
} from "../validations/warehouse.validation";

const router = Router();
const warehouseController = new WarehouseController();

router.use(authenticate);

/**
 * @swagger
 * tags:
 *   name: Warehouses
 *   description: Warehouse management
 */

/**
 * @swagger
 * /api/v1/logistics/warehouses:
 *   get:
 *     summary: Get all warehouses
 *     tags: [Warehouses]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of warehouses
 */

router.route("/")
  .get(warehouseController.getAll)
  .post(validate(createWarehouseValidation), warehouseController.create);

router.route("/:id")
  .get(warehouseController.getById)
  .patch(validate(updateWarehouseValidation), warehouseController.update)
  .delete(warehouseController.delete);

export default router;
