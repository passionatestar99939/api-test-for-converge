import { Joi } from "express-validation";

export default {
  // POST /api/users
  createrecording: {
    body: Joi.object({
      sensorId: Joi.string().required(),
      time: Joi.number().integer().required(),
      value: Joi.number(),
    }),
  },
};
