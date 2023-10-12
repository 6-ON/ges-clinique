import { DataTypes } from "sequelize";
import sequelize from "../config/";

const Technicien = sequelize.define("Technicien", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  specialite: { type: DataTypes.STRING, allowNull: false },
  disponibilite: { type: DataTypes.BOOLEAN, allowNull: false },
});
export default Technicien