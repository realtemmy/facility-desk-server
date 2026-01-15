import { body } from "express-validator";
import { State } from "../../../generated/prisma";

export const createWarehouseValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  body("description").optional().trim().isString(),
  body("address.street").trim().notEmpty().withMessage("Street is required"),
  body("address.city").trim().notEmpty().withMessage("City is required"),
  body("address.state")
    .trim()
    .notEmpty()
    .withMessage("State is required")
    .isIn(Object.values(State))
    .withMessage("Invalid state"),
  body("address.zipCode").optional().trim().isString(),
];

export const updateWarehouseValidation = [
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  body("description").optional().trim().isString(),
  body("address.street")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Street cannot be empty"),
  body("address.city")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("City cannot be empty"),
  body("address.state")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("State cannot be empty")
    .isIn(Object.values(State))
    .withMessage("Invalid state"),
  body("address.zipCode").optional().trim().isString(),
];
