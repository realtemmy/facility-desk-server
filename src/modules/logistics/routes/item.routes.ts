import { Router } from "express";
import { ItemController } from "../controllers/item.controller";
import { authenticate } from "../../../middleware/auth.middleware";
import { requirePermission } from "../../../middleware/permission.middleware";

const router = Router();
const controller = new ItemController();

router.use(authenticate);
router.route("/")
  .post(requirePermission("Items", "WRITE"), controller.create)
  .get(controller.getAll);

router.route("/:id")
  .get(controller.getOne)
  .patch(requirePermission("Items", "WRITE"), controller.update)
  .delete(requirePermission("Items", "WRITE"), controller.delete);

export default router;
