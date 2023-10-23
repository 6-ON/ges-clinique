/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createFactureSchema, updateFactureSchema } from "../validations";

import { Facture } from "../models"
import catchHandler from "../utils/CatchHandler";
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
			return catchHandler(error,res)
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
			return catchHandler(error,res)
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
			return res.status(201).json(returnedFacture);
		} catch (error) {
			return catchHandler(error,res)
		}
	},

	update: async (req, res) => {
		const id = req.params.id; 
		try {
			const facture = await updateFactureSchema.validateAsync(req.body);
			const updatedFacture = await Facture.findByPk(id);
			if (!updatedFacture) {
				return res.status(500).send("Facture non trouvé");
			}
			await updatedFacture.update(facture);
			const returnedFacture = updatedFacture.get({ plain: true });
			return res.status(201).json(returnedFacture);
		} catch (error) {
			return catchHandler(error,res)

		}
	},

	delete: async (req, res) => {
		const id = req.params.id; 
		try {
			const facture = await Facture.findByPk(id);
			if (!facture) {
				return res.status(500).send("Facture non trouvé");
			}
			await facture.destroy();
			return res.status(200).send("Facture supprimé");
		} catch (error) {
			return catchHandler(error,res)
		}
	}
}