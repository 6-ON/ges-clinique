import { DataTypes } from "sequelize";
import Sequelize from "../config";
const Chef = Sequelize.define(
    "Chef",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        }, 
        grade: {
                type: DataTypes.STRING,
            },
            
    },
);
