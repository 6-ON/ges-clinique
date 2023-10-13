import { DataTypes } from "sequelize";
import Sequelize from "../config";
export const ExigenceService = Sequelize.define("ExigenceService", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	type: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.STRING,
	},
});
