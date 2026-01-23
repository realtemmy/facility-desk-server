import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import * as MeterController from "./meter.controller";
import * as ReadingController from "./reading.controller";
import { createMeterDto, updateMeterDto } from "./meter.dto";
import { validate } from "../../middleware/validate.middleware";


const router = Router();

router.use(authenticate);

router
  .route("/")
  .get(MeterController.getMeters)
  .post(validate(createMeterDto), MeterController.createMeter);

router
  .route("/:id")
  .get(MeterController.getMeterById)
  .patch(validate(updateMeterDto), MeterController.updateMeter)
  .delete(MeterController.deleteMeter);

// Readings
router.post("/readings", ReadingController.recordReading);

export default router;
