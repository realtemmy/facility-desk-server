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
router.get(
  "/",
  requirePermission("Warehouse", "READ"),
  warehouseController.getAll
);

/**
 * @swagger
 * /api/v1/logistics/warehouses/{id}:
 *   get:
 *     summary: Get warehouse by ID
 *     tags: [Warehouses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Warehouse details
 *       404:
 *         description: Warehouse not found
 */
router.get(
  "/:id",
  requirePermission("Warehouse", "READ"),
  warehouseController.getById
);

/**
 * @swagger
 * /api/v1/logistics/warehouses:
 *   post:
 *     summary: Create new warehouse
 *     tags: [Warehouses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: object
 *                 required:
 *                   - street
 *                   - city
 *                   - state
 *                 properties:
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   zipCode:
 *                     type: string
 *     responses:
 *       201:
 *         description: Warehouse created
 */
router.post(
  "/",
  requirePermission("Warehouse", "WRITE"),
  validate(createWarehouseValidation),
  warehouseController.create
);

/**
 * @swagger
 * /api/v1/logistics/warehouses/{id}:
 *   patch:
 *     summary: Update warehouse
 *     tags: [Warehouses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   zipCode:
 *                     type: string
 *     responses:
 *       200:
 *         description: Warehouse updated
 */
router.patch(
  "/:id",
  requirePermission("Warehouse", "WRITE"),
  validate(updateWarehouseValidation),
  warehouseController.update
);

/**
 * @swagger
 * /api/v1/logistics/warehouses/{id}:
 *   delete:
 *     summary: Delete warehouse
 *     tags: [Warehouses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Warehouse deleted
 */
router.delete(
  "/:id",
  requirePermission("Warehouse", "WRITE"),
  warehouseController.delete
);

export default router;
