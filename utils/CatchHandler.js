/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { ValidationError } from "joi";

/**
 * @param {Request} req
 * @param {Response} res
 * @param {Error} err
 */
const catchHandler = (err, res) => {
	if (err instanceof ValidationError) {
		return res.status(422).json(err.details[0].message);
	}
	if (err?.name.includes("Sequelize")) {
		const { name, fields, value }=err;
		return res.status(500).json({name,fields,value});
	}
	return res.status(500).json(err);
};
export default catchHandler;
