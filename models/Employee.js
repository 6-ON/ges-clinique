import { DataTypes } from "sequelize";
import sequelize from "../config";

export const Employee = sequelize.define("Employee", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	FirstName: {
		type: DataTypes.STRING,
	},
	LastName: {
		type: DataTypes.STRING,
	},
	Email: {
		type: DataTypes.STRING,
	},
});
