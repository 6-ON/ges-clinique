import { DataTypes } from "sequelize";
import Sequelize from "../config";
export const Reservation = Sequelize.define("Reservation", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	data: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.BOOLEAN,
	},
	date: {
		type: DataTypes.DATE,
	},
});
