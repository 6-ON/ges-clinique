import Joi from "joi";
export const createFactureSchema = Joi.object({

	montant: Joi.string().trim().min(1).required(),
	datePaiement: Joi.date().iso().required(),
	reservationId :Joi.string().trim().min(1).required()

});
export const updateFactureSchema = Joi.object({
	montant: Joi.string().trim().min(1).required(),
	datePaiement: Joi.date().iso().required(),
	reservationId :Joi.string().trim().min(1)
});