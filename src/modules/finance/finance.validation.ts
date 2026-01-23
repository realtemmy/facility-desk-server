import { body } from "express-validator";

export const createCostCenterValidation = [
  body("code").notEmpty().withMessage("Code is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("description").optional().isString(),
  body("budgetLimit")
    .optional()
    .isNumeric()
    .withMessage("Budget Limit must be a number"),
  body("fiscalYear").isInt().withMessage("Fiscal Year must be an integer"),
  body("validFrom")
    .optional()
    .isISO8601()
    .withMessage("Valid From must be a valid date"),
  body("validTo")
    .optional()
    .isISO8601()
    .withMessage("Valid To must be a valid date"),
];
