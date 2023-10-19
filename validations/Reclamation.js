import Joi from "joi"
export const creatReclamationSchema= Joi.object({
	description : Joi.string().required(),
	etat : Joi.string().required(),
	userId: Joi.string().regex(/^[0-9]+$/).required(),
	technicienId: Joi.string().regex(/^[0-9]+$/).required()
});