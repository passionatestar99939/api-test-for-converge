import { Joi } from "express-validation";

export default {
  // POST /api/users
  createSensor: {
    body: Joi.object({
      id: Joi.string().required(),
      threshold: Joi.number(),
    }),
  },

  // PUT /api/users/:sensorId
  updateSensor: {
    body: Joi.object({
      id: Joi.string().required(),
      threshold: Joi.number(),
    }),
  },
};
