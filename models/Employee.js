import { DataTypes } from "sequelize";
import sequelize from "../config";

export const Employee = sequelize.define("Employee", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
	},
});
