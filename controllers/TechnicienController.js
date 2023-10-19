/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { ValidationError } from "joi";
import { hash } from "argon2";
import { creatTechnicienSchema, updateTechnicienSchema } from "../validations";
import { Technicien } from "../models";

export const TechnicienController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const returnedTechniciens = await Technicien.findAll();
			res.status(201).json(returnedTechniciens);
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
			const technicien = await creatTechnicienSchema.validateAsync(req.body);
			// save to db
			technicien.user.password = await hash(technicien.user.password);
			const createdTechnicien = await Technicien.create(technicien, {
				include: [Technicien.User],
			});

			const returnedTechnicien = createdTechnicien.get({ plain: true });
			delete returnedTechnicien.user.password;
			res.status(201).json(returnedTechnicien);
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
			const returnedTechnicien = await Technicien.findOne({
				where: {
					id: req.params.id,
				},
			});
			if(returnedTechnicien){

				res.status(201).json(returnedTechnicien);
			}else{
				res.status(404).json({ message: "Technicien not found" });
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
		// const updatedTechnicien = await updateTechnicienSchema.validateAsync(req.body);
		// await Technicien.update(updatedTechnicien, {
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
			const sup = await Technicien.destroy({
				where: {
					id: req.params.id,
				},
			});
			if (sup == 1) {
				res.status(201).json({ message: "Technicien deleted" });
			} else {
				res.status(404).json({ message: "Technicien not found" });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
