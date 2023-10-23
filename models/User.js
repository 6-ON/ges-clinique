import { DataTypes } from "sequelize";
import sequelize from "../config";
import { hash } from "argon2";

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
		hooks: {
			beforeCreate: async (user) => {
				user.password = await hash(user.password);
			},
			beforeBulkCreate: async (users) => {
				for (const user of users) {
					user.password = await hash(user.password);
				}
			},
			beforeUpdate: async (user) => {
				if (user.changed("password")) {
					user.password = await hash(user.password);
				}
			},
		},
		scopes: {
			admins: {
				where: {
					userableType: "Admin",
				},
			},
			
		},
	},
);
