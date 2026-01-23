import { Router } from "express";
import { CostCenterController } from "./cost-center.controller";
import { validate } from "../../middleware/validate.middleware";
import { createCostCenterValidation } from "./finance.validation";

const router = Router();
const costCenterController = new CostCenterController();

router.post(
  "/cost-centers",
  validate(createCostCenterValidation),
  costCenterController.create.bind(costCenterController),
);
router.get(
  "/cost-centers",
  costCenterController.index.bind(costCenterController),
);
router.get(
  "/cost-centers/:id",
  costCenterController.show.bind(costCenterController),
);

export default router;
