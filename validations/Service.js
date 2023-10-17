import Joi from "joi";
export const createServiceSchema = Joi.object({

	name: Joi.string().trim().min(1).required(),
	description: Joi.string().trim().min(8).required(),
	tarifs: Joi.string().trim().required(),
	image: Joi.string().trim().uri().required(),
});
export const updateServiceSchema = Joi.object({

	name: Joi.string().trim().min(1),
	description: Joi.string().trim().min(8),
	tarifs: Joi.string().trim(),
	image: Joi.string().trim().uri(),
});