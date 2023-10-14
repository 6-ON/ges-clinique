import { DataTypes } from "sequelize";
import sequelize from "../config/";

export const Reclamation = sequelize.define("Reclamation", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	description: { type: DataTypes.STRING, allowNull: false },
	etat: { type: DataTypes.STRING, allowNull: false },
	creatorType: { type: DataTypes.STRING, allowNull: false },
	creatorId: { type: DataTypes.INTEGER, allowNull: false },
});
