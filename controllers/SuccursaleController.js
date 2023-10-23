/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createSuccursaleSchema, updateSuccursaleSchema } from "../validations";
import { hash } from "argon2";
import catchHandler from "../utils/CatchHandler";
import { Succursale } from "../models"
export const SuccursaleController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 **/
	index: async (req, res) => {
		try {
			const succursales = await Succursale.findAll();
			return res.status(200).json(succursales.map((Succursale) =>Succursale.toJSON()));
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
			const succursale = await Succursale.findByPk(id);
			if (!succursale) return res.status(404).json("Succursale not found");
			return res.status(200).json(succursale.toJSON());
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
		try {
			const validatedSuccursale = await updateSuccursaleSchema.validateAsync(req.body);
			const { id } = req.params;
			const succursale = await Succursale.findByPk(id);
			if (!succursale) return res.status(404).json("Succursale not found");
			const updatedSuccursale = await succursale.update(validatedSuccursale);
		
			return res.status(200).json(updatedSuccursale.toJSON());
		} catch (err) {
			return catchHandler(err, res);
		}
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const succursale = await  Succursale.findByPk(id);
			if (!succursale) return res.status(404).json("Succursale not found");
			await succursale.destroy();
			return res.status(204).end();
		} catch (err) {
			return catchHandler(err, res);
		}
	}
}