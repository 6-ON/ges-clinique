/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { ValidationError } from "joi";
import { creatReclamationSchema, updateReclamationSchema } from "../validations";
import { Reclamation } from "../models";
import { log } from "winston";

export const ReclamationController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const returnedReclamations = await Reclamation.findAll();
			res.status(201).json(returnedReclamations);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	create: async (req, res) => {
		try {
			const reclamation = await creatReclamationSchema.validateAsync(req.body);
			// save to db
			const createdReclamation = await Reclamation.create(reclamation, {
				include: [Reclamation.User,Reclamation.Technicien]
			});
			const returnedReclamation = createdReclamation.get({ plain: true });
			res.status(201).json(returnedReclamation);
		} catch (err) {
			if (err instanceof ValidationError) {
				res.status(400).json(err.details[0].message);
			} else if (err?.name.includes("Sequelize")) {
				res.status(500).json(
					err.errors.map((error) => {
						const { message, path } = error;
						return { message, path };
					}),
				);
			} else {
				res.status(500).json(err);
			}
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	show: async (req, res) => {
		try {
			const returnedReclamation = await Reclamation.findOne({
				where: {
					id: req.params.id,
				},
			});
			if(returnedReclamation){

				res.status(201).json(returnedReclamation);
			}else{
				res.status(404).json({ message: "Reclamation not found" });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		// const updatedReclamation = await updateReclamationSchema.validateAsync(req.body);
		// await Reclamation.update(updatedReclamation, {
		// 	where: {
		// 		id: req.params.id,
		// 	},
		// });
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		try {
			const sup = await Reclamation.destroy({
				where: {
					id: req.params.id,
				},
			});
			if (sup == 1) {
				res.status(201).json({ message: "Reclamation deleted" });
			} else {
				res.status(404).json({ message: "Reclamation not found" });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
