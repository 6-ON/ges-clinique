import Joi from "joi";
export const createSuccursaleSchema = Joi.object({

	name: Joi.string().trim().min(4).required(),
	startHour: Joi.number().integer().min(1).required(),
	endHour:  Joi.number().integer().min(1).required(),
	image: Joi.string().trim().uri().required(),

});
export const updateSuccursaleSchema = Joi.object({
	name: Joi.string().trim().min(4),
	startHour: Joi.number().integer().min(1),
	endHour: Joi.number().integer().min(1),
	image: Joi.string().trim().uri(),
});