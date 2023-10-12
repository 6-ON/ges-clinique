import { DataTypes } from "sequelize";
import sequelize from "../config/";

export const Client = sequelize.define("Succursale", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  
});
