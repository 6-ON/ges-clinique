/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createSuccursaleSchema, updateSuccursaleSchema } from "../validations";

import { Succursale } from "../models"
export const SuccursaleController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 **/
	index: async (req, res) => {
		try {
			const succursales = await Succursale.findAll();
			return res.send(succursales)
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
			const succursale = await Succursale.findByPk(id);
			return res.send(succursale);
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
			const succursale = await createSuccursaleSchema.validateAsync(req.body);
			const createdSuccursale = await Succursale.create(succursale);
			const returnedSuccursale = createdSuccursale.get({ plain: true });
			res.status(201).json(returnedSuccursale);
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
			const succursale = await updateSuccursaleSchema.validateAsync(req.body);
			const updatedSuccursale = await Succursale.findByPk(id);
			if (!updatedSuccursale) {
				return res.status(500).send("Succursale non trouvé");
			}
			await updatedSuccursale.update(succursale);
			const returnedSuccursale = updatedSuccursale.get({ plain: true });
			res.status(201).json(returnedSuccursale);
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
			const succursale = await Succursale.findByPk(id);
			if (!succursale) {
				return res.status(500).send("Succursale non trouvé");
			}
			await Succursale.destroy();
			return res.status(200).send("Succursale supprimé");
		} catch (error) {
			res.status(500).send("Erreur");
		}
	}
}