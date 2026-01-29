import { Router } from "express";
import { CostCenterController } from "../controllers/cost-center.controller";
import { validate } from "../../../middleware/validate.middleware";
import { PurchaseRequestController } from "../controllers/purchaseRequest.controller";
import { PurchaseOrderController } from "../controllers/purchaseOrder.controller";
import {
  createCostCenterValidation,
  createPurchaseRequestValidation,
  approvePurchaseRequestValidation,
  receivePurchaseOrderValidation,
} from "../finance.validation";

const router = Router();
const costCenterController = new CostCenterController();
const purchaseRequestController = new PurchaseRequestController();
const purchaseOrderController = new PurchaseOrderController();

// Cost Center Routes
router
  .route("/cost-centers")
  .post(validate(createCostCenterValidation), costCenterController.create)
  .get(costCenterController.getAll);

router
  .route("/cost-centers/:id")
  .get(costCenterController.getById)
  // .put(costCenterController.update) // TODO: Implement update
  .patch(costCenterController.budgetPaid); // Using patch for specific updates like budget

// Purchase Request Routes
router
  .route("/purchase-requests")
  .get(purchaseRequestController.getAll)
  .post(
    validate(createPurchaseRequestValidation),
    purchaseRequestController.create,
  );

router.route("/purchase-requests/:id").get(purchaseRequestController.getById);

router.post(
  "/purchase-requests/:id/approve",
  validate(approvePurchaseRequestValidation),
  purchaseRequestController.approvePR,
);

// Purchase Order Routes
router.route("/purchase-orders").get(purchaseOrderController.getAll);
router.route("/purchase-orders/:id").get(purchaseOrderController.getById);

router.post(
  "/purchase-orders/:id/receive",
  validate(receivePurchaseOrderValidation),
  purchaseOrderController.receive,
);

export default router;
