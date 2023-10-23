import Joi from "joi";
import {creatUserSchema, updateUserSchema} from "./User";


export const creatClientSchema = Joi.object({
	user: creatUserSchema.required()
});

export const updateClientSchema = Joi.object({
	user: updateUserSchema,
})

