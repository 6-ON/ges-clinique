import { DataType, DataTypes } from "sequelize";
import sequelize from "../config";


export const Employee=sequelize.define('Employe',{
id:{
    type:DataTypes.INTEGER,
    PrimaryKey:true,
    autoIncrement:true
}


})