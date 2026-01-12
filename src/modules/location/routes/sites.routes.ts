import { Router } from "express";
import { SitesController } from "../controllers/sites.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { requirePermission } from "../../../middleware/permission.middleware";

const router = Router();
const controller = new SitesController();

router.use(authenticate);

router.post("/bulk", requirePermission("Site", "WRITE"), controller.bulkSite);

router
  .route("/")
  .get(controller.findAll)
  .post(requirePermission("Site", "WRITE"), controller.create)

router
  .route("/:id")
  .get(requirePermission("Site", "READ"), controller.findOne)
  .patch(requirePermission("Site", "WRITE"), controller.update)
  .delete(requirePermission("Site", "WRITE"), controller.remove);

export default router;
