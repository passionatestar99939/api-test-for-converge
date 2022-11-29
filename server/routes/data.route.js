import express from "express";
import { validate } from "express-validation";
import recordingValidator from "../validators/recording.validator";
import recordingCtrl from "../controllers/recording.controller";

const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")

  /** GET /api/recordings - Get list of recordings */
  .get(recordingCtrl.list)

  /** POST /api/recordings - Create new recording */
  .post(validate(recordingValidator.createrecording), recordingCtrl.create);
// router.post("/", recordingCtrl.create);

export default router;
