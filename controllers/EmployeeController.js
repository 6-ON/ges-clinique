/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { ValidationError } from "joi";
import { hash } from "argon2";
import { creatEmployeeSchema, updateEmployeeSchema } from "../validations";
import { Employee } from "../models";

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
			const employee = await creatEmployeeSchema.validateAsync(req.body);
			// save to db
			employee.user.password = await hash(employee.user.password);
			const createdEmployee = await Employee.create(employee, {
				include: [Employee.Client],
			});
			const returnedEmployee = createdEmployee.get({ plain: true });
			delete returnedEmployee.user.password;
			res.status(201).json(returnedEmployee);
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
	show: async (req, res) => {
		try {
			const returnedEmployee = await Employee.findOne({
				where: {
					id: req.params.id,
				},
			});

			if (returnedEmployee) {
				res.status(201).json(returnedEmployee);
			} else {
				res.status(404).json({ message: "Employee not found" });
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
		// const updatedEmployee = await updateEmployeeSchema.validateAsync(req.body);
		// await Employee.update(updatedEmployee, {
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
			const sup = await Employee.destroy({
				where: {
					id: req.params.id,
				},
			});
			if (sup == 1) {
				res.status(201).json({ message: "Employee deleted" });
			} else {
				res.status(404).json({ message: "Employee not found" });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
