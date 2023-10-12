import { DataTypes } from "sequelize";
import sequelize from "../config/";

const Client = sequelize.define("Succursale", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  
});
export default Client
