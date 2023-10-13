import { DataTypes } from "sequelize";
import sequelize from "../config";

export const Facture = sequelize.define("Facture", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	DatePaiement: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	montant: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});
