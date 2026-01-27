import { Router } from "express";
import { CostCenterController } from "../controllers/cost-center.controller";
import { validate } from "../../../middleware/validate.middleware";
import { createCostCenterValidation } from "../finance.validation";

const router = Router();
const costCenterController = new CostCenterController();

router
  .route("/")
  .post(validate(createCostCenterValidation), costCenterController.create)
  .get(costCenterController.getAll);

router.route("/:id").get(costCenterController.getById);

export default router;
