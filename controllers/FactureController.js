/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createFactureSchema, updateFactureSchema } from "../validations";

import { Facture } from "../models"
export const FactureController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 **/
	index: async (req, res) => {
		try {
			const factures = await Facture.findAll();
			return res.send(factures)
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
			const facture = await Facture.findByPk(id);
			return res.send(facture);
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
			const facture = await createFactureSchema.validateAsync(req.body);
			const createdFacture = await Facture.create(facture);
			const returnedFacture = createdFacture.get({ plain: true });
			res.status(201).json(returnedFacture);
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
			const facture = await updateFactureSchema.validateAsync(req.body);
			const updatedFacture = await Facture.findByPk(id);
			if (!updatedFacture) {
				return res.status(500).send("Facture non trouvé");
			}
			await updatedFacture.update(facture);
			const returnedFacture = updatedFacture.get({ plain: true });
			res.status(201).json(returnedFacture);
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
			const facture = await Facture.findByPk(id);
			if (!facture) {
				return res.status(500).send("Facture non trouvé");
			}
			await sacture.destroy();
			return res.status(200).send("Facture supprimé");
		} catch (error) {
			res.status(500).send("Erreur");
		}
	}
}