import { DataTypes } from "sequelize";
import Sequelize from "../config";
export const exigenceService = Sequelize.define(
    "exigenceService",
    {
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
            
    },
);
