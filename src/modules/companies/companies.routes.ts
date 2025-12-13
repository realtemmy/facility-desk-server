import { Router } from "express";
import { CompaniesController } from "./companies.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { requirePermission } from "../../middleware/permission.middleware";

const router = Router();
const companiesController = new CompaniesController();

// All routes require authentication
router.use(authenticate);

/**
 * @swagger
 * /api/v1/companies:
 *   get:
 *     summary: Get all companies
 *     description: Retrieve a list of all companies
 *     tags: [Companies]
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
 *         description: Search by name, code or email
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [CORPORATE_GROUP, SUBSIDIARY, EXTERNAL_PROVIDER, CUSTOMER]
 *         description: Filter by company type
 *     responses:
 *       200:
 *         description: List of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     companies:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Company'
 *                     pagination:
 *                       $ref: '#/components/schemas/Pagination'
 */
router.get(
  "/",
  requirePermission("Company", "READ"),
  companiesController.getAll
);

/**
 * @swagger
 * /api/v1/companies/{id}:
 *   get:
 *     summary: Get company by ID
 *     description: Retrieve a specific company by its ID
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Company details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                      company:
 *                        $ref: '#/components/schemas/Company'
 *       404:
 *         description: Company not found
 */
router.get(
  "/:id",
  requirePermission("Company", "READ"),
  companiesController.getById
);

/**
 * @swagger
 * /api/v1/companies:
 *   post:
 *     summary: Create new company
 *     description: Create a new company with address
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - name
 *               - description
 *               - address
 *             properties:
 *               code:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [CORPORATE_GROUP, SUBSIDIARY, EXTERNAL_PROVIDER, CUSTOMER]
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               phone:
 *                 type: string
 *               alternativePhone:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               website:
 *                 type: string
 *               address:
 *                 type: object
 *                 required:
 *                   - street
 *                   - city
 *                   - state
 *                   - zipCode
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
 *         description: Company created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     company:
 *                       $ref: '#/components/schemas/Company'
 *       400:
 *         description: Validation error
 */
router.post(
  "/",
  requirePermission("Company", "WRITE"),
  companiesController.create
);

/**
 * @swagger
 * /api/v1/companies/{id}:
 *   put:
 *     summary: Update company
 *     description: Update an existing company
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [CORPORATE_GROUP, SUBSIDIARY, EXTERNAL_PROVIDER, CUSTOMER]
 *               phone:
 *                 type: string
 *               alternativePhone:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               website:
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
 *         description: Company updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     company:
 *                       $ref: '#/components/schemas/Company'
 *       404:
 *         description: Company not found
 */
router.patch(
  "/:id",
  requirePermission("Company", "WRITE"),
  companiesController.update
);

/**
 * @swagger
 * /api/v1/companies/{id}:
 *   delete:
 *     summary: Delete company
 *     description: Delete a company
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Company deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *       404:
 *         description: Company not found
 */
router.delete(
  "/:id",
  requirePermission("Company", "WRITE"),
  companiesController.delete
);

export default router;
