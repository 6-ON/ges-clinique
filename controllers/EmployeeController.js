/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { ValidationError } from "joi";
import { createEmployeeSchema } from "../validations";
import { Employee } from "../models";
import catchHandler from "../utils/CatchHandler";

export const EmployeeController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const returnedEmployees = await Employee.findAll();
			res.status(201).json(returnedEmployees);
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
			const employee = await createEmployeeSchema.validateAsync(req.body);
			await Employee.create({ ...employee, clientId: req.user.userableId });
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
			const employee = await Employee.findByPk(req.params.id);
			if (!employee) res.status(404).json({ message: "Employee not found" });
			if (employee.clientId !== req.user.userableId) return res.status(403).json({ message: "Forbidden" });
			await employee.destroy();
			return res.status(201).json({ message: "Employee deleted" });
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
