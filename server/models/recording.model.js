import { DataTypes } from "sequelize";
// import db from "../../config/sequelize";

// const { Sensor } = db;

/**
 * Recording Schema
 */
export default {
  name: "Recording",
  attribute: {
    sensor_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    value: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
  },
};
