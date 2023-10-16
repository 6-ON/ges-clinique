import { DataTypes } from "sequelize";
import Sequelize from "../config";
export const ExigenceService = Sequelize.define("ExigenceService", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	requiered: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
});
