/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createServiceSchema, updateServiceSchema } from "../validations";

import { Service } from "../models"
export const ServiceController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 **/
	index: async (req, res) => {
		try {
			const Services = await Service.findAll();
			return res.send(Services)
		} catch (error) {
			return res.status(500).send("Erreur");
		}

	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	show: async (req, res) => {
		const id = req.params;
		try {
			const service = await Service.findByPk(id);
			return res.send(service);
		} catch (error) {
			return res.status(500).send("erreur");
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	create: async (req, res) => {
		try {
			const service = await createServiceSchema.validateAsync(req.body);
			const createdService = await Service.create(service);
			const returnedService = createdService.get({ plain: true });
			res.status(201).json(returnedService);
		} catch (error) {
			if (error instanceof ValidationError) {
				res.status(400).json(error.details[0].message);
			} else {
				res.status(500).json(error);
			}
		}
	},

	update: async (req, res) => {
		const id = req.params.id; // Assurez-vous d'obtenir l'ID à partir des paramètres de la requête
		try {
			const service = await updateServiceSchema.validateAsync(req.body);
			const updatedService = await Service.findByPk(id);
			if (!updatedService) {
				return res.status(500).send("Service non trouvé");
			}
			await updatedService.update(service);
			const returnedService = updatedService.get({ plain: true });
			res.status(201).json(returnedService);
		} catch (error) {
			if (error instanceof ValidationError) {
				res.status(400).json(error.details[0].message);
			} else {
				res.status(500).json(error);
			}
		}
	},

	delete: async (req, res) => {
		const id = req.params.id; // Assurez-vous d'obtenir l'ID à partir des paramètres de la requête
		try {
			const service = await Service.findByPk(id);
			if (!service) {
				return res.status(500).send("Service non trouvé");
			}
			await service.destroy();
			return res.status(200).send("Service supprimé");
		} catch (error) {
			res.status(500).send("Erreur");
		}
	}
}