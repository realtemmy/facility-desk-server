import { Router } from "express";
import { ZonesController } from "../controllers/zones.controller";

const router = Router();
const controller = new ZonesController();

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
