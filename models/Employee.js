import { DataTypes } from "sequelize";
import sequelize from "../config";


export const Employee=sequelize.define('Employee',{
id:{
    type:DataTypes.INTEGER,
    PrimaryKey:true,
    autoIncrement:true
}


})