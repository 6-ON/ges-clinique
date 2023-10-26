/** 
*  @typedef {import("express").Request} Request
* @typedef {import("express").Response} Response
**/

import { ValidationError } from "joi";
import { createServiceSchema, updateServiceSchema } from "../validations";
import { hash } from "argon2";
import catchHandler from "../utils/CatchHandler";
import { Service } from "../models"
export const ServiceController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 **/
	index: async (req, res) => {
		try {
			const services = await Service.findAll();
			return res.status(200).json(services.map((Service) =>Service.toJSON()));
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
			const service = await Service.findByPk(id);
			if (!service) return res.status(404).json("Service not found");
			return res.status(200).json(service.toJSON());
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
		try {
			const validatedService = await updateServiceSchema.validateAsync(req.body);
			const { id } = req.params;
			const service = await Service.findByPk(id);
			if (!service) return res.status(404).json("Service not found");
			const updatedService = await service.update(validatedService);
		
			return res.status(200).json(updatedService.toJSON());
		} catch (err) {
			return catchHandler(err, res);
		}
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const service = await  Service.findByPk(id);
			if (!service) return res.status(404).json("Service not found");
			await service.destroy();
			return res.status(204).end();
		} catch (err) {
			return catchHandler(err, res);
		}
	}
}