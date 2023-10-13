import { DataTypes } from "sequelize";
import sequelize from "../config/";

export const EntrepriseDetail = sequelize.define("EntrepriseDetail", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  adress: { type: DataTypes.STRING, allowNull: false },

});
