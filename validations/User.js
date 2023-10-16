import Joi from "joi";

export const creatUserSchema = Joi.object({
	name: Joi.string().trim().min(1).required(),
	email: Joi.string().trim().email().required(),
	password: Joi.string().trim().min(8).required(),
	phone: Joi.string().trim().min(10).required(),
	image: Joi.string().trim().uri().required(),
});
export const updateUserSchema = Joi.object({
	name: Joi.string().trim().min(1),
	email: Joi.string().trim().email(),
	password: Joi.string().trim().min(8),
	phone: Joi.string().trim().min(10),
	image: Joi.string().trim().uri(),
});
