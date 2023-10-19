import { DataTypes } from "sequelize";
import sequelize from "../config";

export const User = sequelize.define(
	"User",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isUrl: true,
			},
		},
		userableType: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		userableId: {
			type: DataTypes.INTEGER,
		},
	},
	{
		defaultScope: {
			attributes: { exclude: ["password"] },
		},
	},
);
