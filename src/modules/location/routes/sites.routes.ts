import { Router } from "express";
import { SitesController } from "../controllers/sites.controller";

const router = Router();
const controller = new SitesController();

router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
