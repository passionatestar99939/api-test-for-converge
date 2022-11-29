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
  // checking duplicate data
  const duplicationResult = await Sensor.findOne({
    where: { id: req.body.id },
  });
  if (duplicationResult) {
    console.log("error 409");
    return res.json({ status: "error 409" });
  }
  const sensor = Sensor.build({
    // id: req.body.id,
    id: req.body.id,
    threshold: req.body.threshold,
  });

  sensor
    .save()
    // .then((savedSensor) => res.json(savedSensor))
    .then(() => res.json({ status: 204 }))
    .catch((e) => next(e));
}

/**
 * Update existing sensor
 * @property {string} req.body.id - The id of sensor.
 * @property {string} req.body.threshold - The threshold of sensor.
 * @returns {Sensor}
 */
function update(req, res, next) {
  // const { sensor } = req;
  // console.log("_______???=> sensor", sensor);
  // sensor.id = req.body.id;
  // sensor.threshold = req.body.threshold;
  // console.log("_______???=> sensor", sensor);

  // sensor
  //   .save()
  //   .then((savedSensor) => res.json(savedSensor))
  //   .catch((e) => next(e));

  Sensor.update(
    { id: req.body.id, threshold: req.body.threshold },
    { where: { id: req.body.id } }
  )
    .then((result) => res.json({ status: result[0] ? 204 : 409 }))
    .catch((e) => next(e));
}

/**
 * Get sensor list.
 * @property {number} req.query.limit - Limit number of sensors to be returned.
 * @returns {Sensor[]}
 */
function list(req, res, next) {
  const { limit = 50 } = req.query;
  Sensor.findAll({ limit })
    .then((sensors) => res.json(sensors))
    .catch((e) => next(e));
}

/**
 * Delete sensor.
 * @returns {Sensor}
 */
function remove(req, res, next) {
  const { sensor } = req;
  const { id } = req.sensor;
  sensor
    .destroy()
    .then(() => res.json(id))
    .catch((e) => next(e));
}

export default {
  create,
  update,
  list,
  remove,
};
