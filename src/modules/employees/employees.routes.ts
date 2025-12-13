import { Router } from "express";
import { EmployeesController } from "./employees.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { requirePermission } from "../../middleware/permission.middleware";

const router = Router();
const employeesController = new EmployeesController();

router.use(authenticate);

/**
 * @swagger
 * /api/v1/employees:
 *   get:
 *     summary: Get all employees
 *     description: Retrieve a list of all employees
 *     tags: [Employees]
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
 *           enum: [CUSTOMER_EMPLOYEE, PROVIDER_EMPLOYEE]
 *         description: Filter by employee type
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [ACTIVE, INACTIVE, SUSPENDED, DELETED]
 *         description: Filter by status
 *       - in: query
 *         name: companyId
 *         schema:
 *           type: string
 *         description: Filter by company
 *     responses:
 *       200:
 *         description: List of employees
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
 *                     employees:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Employee'
 *                     pagination:
 *                       $ref: '#/components/schemas/Pagination'
 */
router.get(
  "/",
  requirePermission("Employee", "READ"),
  employeesController.getAll
);

/**
 * @swagger
 * /api/v1/employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     description: Retrieve a specific employee by its ID
 *     tags: [Employees]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee details
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
 *                      employee:
 *                        $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found
 */
router.get(
  "/:id",
  requirePermission("Employee", "READ"),
  employeesController.getById
);

/**
 * @swagger
 * /api/v1/employees:
 *   post:
 *     summary: Create new employee
 *     description: Create a new employee
 *     tags: [Employees]
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
 *               - userId
 *               - companyId
 *             properties:
 *               code:
 *                 type: string
 *               userId:
 *                 type: string
 *               companyId:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [CUSTOMER_EMPLOYEE, PROVIDER_EMPLOYEE]
 *               status:
 *                 type: string
 *                 enum: [ACTIVE, INACTIVE]
 *     responses:
 *       201:
 *         description: Employee created successfully
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
 *                     employee:
 *                       $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Validation error or duplicate code
 *       404:
 *         description: User or Company not found
 */
router.post(
  "/",
  requirePermission("Employee", "WRITE"),
  employeesController.create
);

/**
 * @swagger
 * /api/v1/employees/{id}:
 *   put:
 *     summary: Update employee
 *     description: Update an existing employee
 *     tags: [Employees]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [CUSTOMER_EMPLOYEE, PROVIDER_EMPLOYEE]
 *               status:
 *                 type: string
 *                 enum: [ACTIVE, INACTIVE, SUSPENDED, DELETED]
 *               companyId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Employee updated successfully
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
 *                     employee:
 *                       $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found
 */
router.patch(
  "/:id",
  requirePermission("Employee", "WRITE"),
  employeesController.update
);

/**
 * @swagger
 * /api/v1/employees/{id}:
 *   delete:
 *     summary: Delete employee
 *     description: Delete an employee
 *     tags: [Employees]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
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
 *         description: Employee not found
 */
router.delete(
  "/:id",
  requirePermission("Employee", "WRITE"),
  employeesController.delete
);

export default router;
