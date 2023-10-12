import { DataTypes } from "sequelize";
import sequelize from "../config/";

const Reclamation = sequelize.define("Succursale", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: { type: DataTypes.STRING, allowNull: false },
  etat: { type: DataTypes.STRING, allowNull: false }
});
export default Reclamation
