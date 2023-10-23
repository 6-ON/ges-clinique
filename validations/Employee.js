import Joi from "joi";
import { creatUserSchema } from "./User";


export const createEmployeeSchema = Joi.object({
	email : Joi.string().email().required(),
	name :  Joi.string().trim().min(1).required(),
});

