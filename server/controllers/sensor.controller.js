import httpStatus from "http-status";
import db from "../../config/sequelize";

const { Sensor } = db;

/**
 * Create new sensor
 * @property {string} req.body.id - The id of sensor.
 * @property {string} req.body.threshold - The threshold of sensor.
 * @returns {status}
 */
async function create(req, res, next) {
}

/**
 * Update existing sensor
 * @property {string} req.body.id - The id of sensor.
 * @property {string} req.body.threshold - The threshold of sensor.
 * @returns {Sensor}
 */
function update(req, res, next) {
}

/**
 * Get sensor list.
 * @property {number} req.query.limit - Limit number of sensors to be returned.
 * @returns {Sensor[]}
 */
function list(req, res, next) {
}

/**
 * Delete sensor.
 * @returns {Sensor}
 */
function remove(req, res, next) {
}

export default {
  create,
  update,
  list,
  remove,
};
