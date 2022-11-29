import { DataTypes } from "sequelize";

/**
 * Sensor Schema
 */
export default {
  name: "Sensor",
  attribute: {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      // unique: true,
    },
    threshold: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
  },
};
