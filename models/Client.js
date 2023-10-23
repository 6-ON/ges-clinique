import { DataTypes } from "sequelize";
import sequelize from "../config/";
import { EntrepriseDetail } from "./EntrepriseDetail";
import { User } from "./User";

export const Client = sequelize.define(
	"Client",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
	},
	{
		defaultScope: {
			include: [{ model: User, as: "user" }],
		},
		scopes: {
			entreprises: {
				include: [
					{
						model: EntrepriseDetail,
						as: "entrepriseDetail",
						required: true, // To get only clients with a related "EntrepriseDetail"
					},
				],
			},
			individual: {
				where: {
					"$entrepriseDetail.id$": null,
				},
				include: [
					{
						model: EntrepriseDetail,
						as: "entrepriseDetail",
						required: false,
					},
				],
			},
		},
	},
);
