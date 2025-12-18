import { Router } from "express";
import { UnitsController } from "../controllers/units.controller";

const router = Router();
const unitsController = new UnitsController();

/**
 * @swagger
 * /api/v1/units:
 *   get:
 *     summary: Get all units
 *     description: Retrieve a paginated list of all units with optional filtering
 *     tags: [Units]
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
 *         description: Search by name or code
 *       - in: query
 *         name: floorId
 *         schema:
 *           type: string
 *         description: Filter by floor ID
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, code, createdAt]
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
 *         description: Paginated list of units
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
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           code:
 *                             type: string
 *                           name:
 *                             type: string
 *                           floorId:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         page:
 *                           type: integer
 *                         limit:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                         totalPages:
 *                           type: integer
 *       401:
 *         description: Not authenticated
 *   post:
 *     summary: Create a new unit
 *     description: Create a new unit on a floor
 *     tags: [Units]
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
 *               - floorId
 *             properties:
 *               code:
 *                 type: string
 *                 example: UNIT-101
 *               name:
 *                 type: string
 *                 example: Unit 101
 *               floorId:
 *                 type: string
 *               photoIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Unit successfully created
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
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 */
router
  .route("/")
  .get(unitsController.getAll)
  .post(unitsController.create);

/**
 * @swagger
 * /api/v1/units/{id}:
 *   get:
 *     summary: Get unit by ID
 *     description: Retrieve a specific unit by its ID
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unit ID
 *     responses:
 *       200:
 *         description: Unit details
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
 *                     id:
 *                       type: string
 *                     code:
 *                       type: string
 *                     name:
 *                       type: string
 *                     floorId:
 *                       type: string
 *                     floor:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         code:
 *                           type: string
 *                         name:
 *                           type: string
 *                         level:
 *                           type: number
 *                     rooms:
 *                       type: array
 *                       items:
 *                         type: object
 *                     photos:
 *                       type: array
 *                       items:
 *                         type: object
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Unit not found
 *   patch:
 *     summary: Update unit
 *     description: Update an existing unit
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unit ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               floorId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Unit successfully updated
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
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Unit not found
 *   delete:
 *     summary: Delete unit
 *     description: Delete a unit from the system
 *     tags: [Units]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unit ID
 *     responses:
 *       200:
 *         description: Unit successfully deleted
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
 *                   example: Unit deleted successfully
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Unit not found
 */
router
  .route("/:id")
  .get(unitsController.getById)
  .patch(unitsController.update)
  .delete(unitsController.delete);

export default router;
