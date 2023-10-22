import { User } from "../models";
import catchHandler from "../utils/CatchHandler";
import { creatUserSchema, updateUserSchema } from "../validations";

export const AdminController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const returnedUsers = await User.scope(["defaultScope","admins"]).findAll();
			return res.status(201).json(returnedUsers);
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
			const user = await creatUserSchema.validateAsync(req.body);
			// save to db
			const createdUser = await User.create(user);

			const returnedUser = createdUser.get({ plain: true });
			delete returnedUser.password;
			return res.status(201).json(returnedUser);
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
			const returnedUser = await User.findByPk(req.params.id);
			if (returnedUser) {
				return res.status(201).json(returnedUser);
			} else {
				return res.status(404).json({ message: "User not found" });
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
	update: async (req, res) => {
		try {
			const user = await updateUserSchema.validateAsync(req.body);
			// update to db
			const retreivedUser = await User.findByPk(req.params.id);
			if (!retreivedUser) return res.status(404).json({ message: "Admin not found" });
			const updatedUser = await retreivedUser.update(user);
			const returnedUser = updatedUser.get({ plain: true });
			return res.status(201).json(returnedUser);
		} catch (err) {
			return catchHandler(err, res);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		try {
			const sup = await User.destroy({
				where: {
					id: req.params.id,
				},
			});
			if (sup == 1) {
				return res.status(201).json({ message: "Admin deleted" });
			} else {
				return res.status(404).json({ message: "Admin not found" });
			}
		} catch (err) {
			return catchHandler(err, res);
		}
	},
};
