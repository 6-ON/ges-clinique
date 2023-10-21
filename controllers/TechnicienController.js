/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { creatTechnicienSchema, updateTechnicienSchema } from "../validations";
import { Technicien } from "../models";
import catchHandler from "../utils/CatchHandler";
export const TechnicienController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const returnedTechniciens = await Technicien.findAll();
			return res.status(201).json(returnedTechniciens);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	create: async (req, res) => {
		try {
			const technicien = await creatTechnicienSchema.validateAsync(req.body);
			// save to db
			const createdTechnicien = await Technicien.create(technicien, {
				include: [Technicien.User],
			});

			const returnedTechnicien = createdTechnicien.get({ plain: true });
			delete returnedTechnicien.user.password;
			return res.status(201).json(returnedTechnicien);
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
			const returnedTechnicien = await Technicien.findOne({
				where: {
					id: req.params.id,
				},
			});
			if (returnedTechnicien) {
				return res.status(201).json(returnedTechnicien);
			} else {
				return res.status(404).json({ message: "Technicien not found" });
			}
		} catch (err) {
			return catchHandler(err, res);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 * @todo implement update
	 * @see ./ChefController.js
	 */
	update: async (req, res) => {},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		try {
			const sup = await Technicien.destroy({
				where: {
					id: req.params.id,
				},
			});
			if (sup == 1) {
				return res.status(201).json({ message: "Technicien deleted" });
			} else {
				return res.status(404).json({ message: "Technicien not found" });
			}
		} catch (err) {
			return catchHandler(err, res);
		}
	},
};
