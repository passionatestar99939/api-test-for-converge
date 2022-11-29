import httpStatus from "http-status";
import db from "../../config/sequelize";
import Sequelize from "sequelize";

const { Recording, Sensor } = db;

/**
 * Create new recording
 * @property {string} req.body.sensorId - The Id of sensor.
 * @property {int} req.body.time - Representation of the time of the datum. For example, you could consider it to be a unix time stamp.
 * @property {float} req.body.value - The measurement value of sensor
 * @returns {status}
 */
async function create(req, res, next) {
  const sensor = await Sensor.findOne({ where: { id: req.body.sensorId } });

  if (!sensor) {
    const message = "Unregistered sensor!";
    console.log(`Warning: ${message}`);
    return res.json({ message });
  } 
  // checking duplicate data
  const duplicationResult = await Recording.findOne({
    where: { sensor_id: req.body.sensorId, time: req.body.time },
  });
  if (duplicationResult) {
    console.log("error 409");
    return res.json({ status: "error 409" });
  }
  const recording = Recording.build({
    sensor_id: req.body.sensorId,
    time: req.body.time,
    value: req.body.value,
  });

  recording
    .save()
    // .then((savedRecording) => res.json(savedRecording))
    .then(() => res.json({ status: 204 }))
    .catch((e) => next(e));
}

/**
 * Get recording list.
 * @property {string} req.body.sensorId - the sensor id for which to query data
 * @property {int} req.body.since - a lower bound on the time of the data
 * @property {int} req.body.until - an upper bound on the time of the data
 * @returns {Recording[]}
 */
function list(req, res, next) {
}

export default {
  create,
  list,
};
