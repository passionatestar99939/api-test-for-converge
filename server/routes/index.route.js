import express from "express";
import sensorRoutes from "./sensor.route";
import recordingRoutes from "./data.route";

const router = express.Router(); // eslint-disable-line new-cap

// mount sensor routes at /users
router.use("/data", recordingRoutes);

// mount sensor routes at /users
router.use("/sensors", sensorRoutes);

export default router;
