import express from "express";
import { validate } from "express-validation";
import sensorValidator from "../validators/sensor.validator";
import sensorCtrl from "../controllers/sensor.controller";

const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")

  /** GET /api/sensors - Get list of sensors */
  .get(sensorCtrl.list)

  /** POST /api/sensors - Create new sensor */
  .post(validate(sensorValidator.createSensor), sensorCtrl.create);
// router.post("/", sensorCtrl.create);

router
  .route("/:sensorId")

  /** PUT /api/sensors/:sensorId - Update sensor */
  .put(validate(sensorValidator.updateSensor), sensorCtrl.update)

  /** DELETE /api/sensors/:sensorId - Delete sensor */
  .delete(sensorCtrl.remove);

export default router;
