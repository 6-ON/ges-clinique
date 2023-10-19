/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { creatChefSchema, updateChefSchema } from "../validations";
import { Chef } from "../models";
import { hash } from "argon2";
import catchHandler from "../utils/CatchHandler";

export const ChefController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const chefs = await Chef.findAll({ include: [{ association: Chef.User }] });
			return res.status(200).json(chefs.map((chef) => chef.toJSON()));
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
			const chef = await creatChefSchema.validateAsync(req.body);
			chef.user.password = await hash(chef.user.password);
			const createdChef = await Chef.create(chef, {
				include: [Chef.User],
			});
			delete createdChef.user.password;
			return res.status(201).json(createdChef.toJSON());
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
			const chef = await Chef.findByPk(id, { include: [Chef.User] });
			if (!chef) return res.status(404).json("Chef not found");
			return res.status(200).json(chef.toJSON());
		} catch (err) {
			return catchHandler(err, res);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		try {
			const { user: validatedUser, ...validatedChef } = await updateChefSchema.validateAsync(req.body);
			const { id } = req.params;
			const chef = await Chef.findByPk(id, { include: [Chef.User] });
			if (!chef) return res.status(404).json("Chef not found");
			const updatedChef = await chef.update(validatedChef);
			if (validatedUser) {
				const { user } = chef;
				await user.update(validatedUser);
				updatedChef.user = user;
			}
			return res.status(200).json(updatedChef.toJSON());
		} catch (err) {
			return catchHandler(err, res);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: (req, res) => {
		try {
			const { id } = req.params;
			const chef = Chef.findByPk(id);
			if (!chef) return res.status(404).json("Chef not found");
			chef.destroy();
			return res.status(204).end();
		} catch (err) {
			return catchHandler(err, res);
		}
	},
};
