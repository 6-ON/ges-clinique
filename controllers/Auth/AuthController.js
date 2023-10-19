/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { signToken } from "../../utils/jwt";
import { verify } from "argon2";

import { User } from "../../models";
import { loginSchema } from "../../validations/Auth";

export const AuthController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	login: async (req, res) => {
		try {
			const { email, password } = await loginSchema.validateAsync(req.body);

			const user = await User.findOne({
				where: {
					email: email,
				},
			});
			const { password: hash, ...returnedUser } = user.get({ plain: true });

			if (!user) return res.status(401).send({message:"Authentication failed"});

			const isSame = await verify(hash, password);

			if (!isSame) return res.status(401).send("Authentication failed");

			let token = await signToken({ id: user.id, email: user.email, role: user.userableType });
			return res.status(201).send({
				token,
				user: returnedUser,
			});
		} catch (error) {
			if (err instanceof ValidationError) {
				return res.status(400).json(err.details[0].message);
			} else if (err?.name.includes("Sequelize")) {
				return res.status(500).json(
					err.errors.map((error) => {
						const { message, path } = error;
						return { message, path };
					}),
				);
			} else {
				return res.status(500).json(err);
			}
		}
	},

};
