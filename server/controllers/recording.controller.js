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
