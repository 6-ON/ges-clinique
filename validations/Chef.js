import Joi from "joi";
import { creatUserSchema, updateUserSchema } from "./User";

export const creatChefSchema = Joi.object({
	grade: Joi.string().trim().min(1).required(),
	succursaleId: Joi.number().integer().allow(null),
	user: creatUserSchema.required(),
});
export const updateChefSchema = Joi.object({
	grade: Joi.string().trim().min(1),
	succursaleId: Joi.number().integer().allow(null),
	user: updateUserSchema,
});
