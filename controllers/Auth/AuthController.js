/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { signToken } from "../../utils/jwt";
import { verify } from "argon2";

import { User } from "../../models";
import { loginSchema } from "../../validations/Auth";
import catchHandler from "../../utils/CatchHandler";

export const AuthController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	login: async (req, res) => {
		try {
			const { email, password } = await loginSchema.validateAsync(req.body);

			const user = await User.scope().findOne({
				where: {
					email: email,
				},
			});
			if (!user) return res.status(401).json({ message: "Authentication failed" });
			const { password: hash, ...returnedUser } = user.get({ plain: true });
			const isSame = await verify(hash, password);
			if (!isSame) return res.status(401).json({ message: "Authentication failed" });
			const token = await signToken({ id: user.id, email: user.email, role: user.userableType , userableId:user.userableId });
			return res.status(201).json({
				token,
				user: returnedUser,
			});
		} catch (error) {
			return catchHandler(error, res);
		}
	},
};
