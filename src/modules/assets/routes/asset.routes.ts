import { Router } from "express";
import { AssetController } from "../controllers/asset.controller";

const router = Router();
const assetController = new AssetController();

/**
 * @swagger
 * /api/v1/assets:
 *   get:
 *     summary: Get all assets
 *     description: Retrieve a paginated list of all assets with optional filtering
 *     tags: [Assets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by name or description
 *       - in: query
 *         name: subCategoryId
 *         schema:
 *           type: string
 *         description: Filter by subcategory ID
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: Filter by category ID
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, createdAt]
 *           default: createdAt
 *         description: Sort field
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Paginated list of assets
 *       401:
 *         description: Not authenticated
 *   post:
 *     summary: Create a new asset
 *     description: Create a new asset
 *     tags: [Assets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - subCategoryId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Door
 *               subCategoryId:
 *                 type: string
 *                 example: uuid-here
 *               description:
 *                 type: string
 *                 example: Main entrance door
 *     responses:
 *       201:
 *         description: Asset successfully created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 */
router
  .route("/")
  .get(assetController.getAll)
  .post(assetController.create);

/**
 * @swagger
 * /api/v1/assets/{id}:
 *   get:
 *     summary: Get asset by ID
 *     description: Retrieve a specific asset by its ID
 *     tags: [Assets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset ID
 *     responses:
 *       200:
 *         description: Asset details
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Asset not found
 *   patch:
 *     summary: Update asset
 *     description: Update an existing asset
 *     tags: [Assets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               subCategoryId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Asset successfully updated
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Asset not found
 *   delete:
 *     summary: Delete asset
 *     description: Delete an asset from the system
 *     tags: [Assets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset ID
 *     responses:
 *       200:
 *         description: Asset successfully deleted
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Asset not found
 */
router
  .route("/:id")
  .get(assetController.getById)
  .patch(assetController.update)
  .delete(assetController.delete);

export default router;

