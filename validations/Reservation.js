import Joi from "joi";
export const creatReservationSchema = Joi.object({
	data: Joi.string().required(),
	date: Joi.date().required(),
});

export const updateReservationSchema = Joi.object({
	status: Joi.string().required(),
	technicienId: Joi.number().required(),
});
