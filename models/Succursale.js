import { DataTypes } from "sequelize";
import sequelize from "../config/";

export const Succursale = sequelize.define("Succursale", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: { type: DataTypes.STRING, allowNull: false },
	image: { type: DataTypes.STRING },
});
