/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createFactureSchema, updateFactureSchema } from "../validations";
import { hash } from "argon2";
import catchHandler from "../utils/CatchHandler";
import { Facture } from "../models"
export const FactureController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 **/
	index: async (req, res) => {
		try {
			const factures = await Facture.findAll();
			return res.status(200).json(factures.map((Facture) =>Facture.toJSON()));
		} catch (err) {
			return catchHandler(err, res);
		}

	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	show: async (req, res) => {
		try {
			const { id } = req.params;
			const facture = await Facture.findByPk(id);
			if (!facture) return res.status(404).json("facture not found");
			return res.status(200).json(facture.toJSON());
		} catch (err) {
			return catchHandler(err, res);
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
		try {
			const validatedfacture = await updateFactureSchema.validateAsync(req.body);
			const { id } = req.params;
			const facture = await Facture.findByPk(id);
			if (!facture) return res.status(404).json("facture not found");
			const updatedfacture = await facture .update(validatedfacture);
		
			return res.status(200).json(updatedfacture.toJSON());
		} catch (err) {
			return catchHandler(err, res);
		}
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const facture = await  Facture.findByPk(id);
			if (!facture) return res.status(404).json("facture not found");
			await facture.destroy();
			return res.status(204).end();
		} catch (err) {
			return catchHandler(err, res);
		}
	}
}