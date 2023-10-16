/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { ValidationError } from "joi";
import { creatChefSchema } from "../validations";
import { Chef } from "../models";

export const ChefController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: (req, res) => {},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	create: async (req, res) => {
		try {
			const chef = await creatChefSchema.validateAsync(req.body);
			// save to db
			/**
			 * @todo hash password with argon2
			 */
			const createdChef = await Chef.create(chef, {
				include: [Chef.User],
			});
			const returnedChef = createdChef.get({ plain: true });
			delete returnedChef.user.password;
			res.status(201).json(returnedChef);
		} catch (err) {
			if (err instanceof ValidationError) {
				res.status(400).json(err.details[0].message);
			}
			res.status(500).json(err);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	show: (req, res) => {},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: (req, res) => {},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: (req, res) => {},
};
