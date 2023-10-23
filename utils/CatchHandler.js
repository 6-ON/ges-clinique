/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

import { ValidationError } from "joi";
import logger from "./logger";

/**
 * @param {Response} res
 * @param {Error} err
 */
const catchHandler = (err, res) => {
	logger.error(err);
	if (err instanceof ValidationError) {
		return res.status(422).json(err.details[0].message);
	}
	if (err?.name.includes("Sequelize")) {
		const { name, fields, value }=err;
		return res.status(500).json({name,fields,value});
	}
	return res.status(500).json({ message: "Internal server error"});
};
export default catchHandler;
