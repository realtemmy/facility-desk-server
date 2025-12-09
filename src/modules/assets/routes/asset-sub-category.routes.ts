import { Router } from "express";
import { AssetSubCategoryController } from "../controllers/asset-sub-category.controller";

const router = Router();
const assetSubCategoryController = new AssetSubCategoryController();

/**
 * @swagger
 * /api/v1/asset-sub-categories:
 *   get:
 *     summary: Get all asset subcategories
 *     description: Retrieve a paginated list of all asset subcategories with optional filtering
 *     tags: [AssetSubCategories]
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
 *         description: Paginated list of asset subcategories
 *       401:
 *         description: Not authenticated
 *   post:
 *     summary: Create a new asset subcategory
 *     description: Create a new asset subcategory
 *     tags: [AssetSubCategories]
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
 *               - categoryId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Burglar Devices
 *               categoryId:
 *                 type: string
 *                 example: uuid-here
 *               description:
 *                 type: string
 *                 example: Security and burglar alarm devices
 *     responses:
 *       201:
 *         description: Asset subcategory successfully created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 */
router
  .route("/")
  .get(assetSubCategoryController.getAll)
  .post(assetSubCategoryController.create);

/**
 * @swagger
 * /api/v1/asset-sub-categories/{id}:
 *   get:
 *     summary: Get asset subcategory by ID
 *     description: Retrieve a specific asset subcategory by its ID
 *     tags: [AssetSubCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset subcategory ID
 *     responses:
 *       200:
 *         description: Asset subcategory details
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Asset subcategory not found
 *   patch:
 *     summary: Update asset subcategory
 *     description: Update an existing asset subcategory
 *     tags: [AssetSubCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset subcategory ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Asset subcategory successfully updated
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Asset subcategory not found
 *   delete:
 *     summary: Delete asset subcategory
 *     description: Delete an asset subcategory from the system
 *     tags: [AssetSubCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Asset subcategory ID
 *     responses:
 *       200:
 *         description: Asset subcategory successfully deleted
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Asset subcategory not found
 */
router
  .route("/:id")
  .get(assetSubCategoryController.getById)
  .patch(assetSubCategoryController.update)
  .delete(assetSubCategoryController.delete);

export default router;

