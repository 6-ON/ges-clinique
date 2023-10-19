/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { ValidationError } from "joi";
import { creatClientSchema } from "../validations";
import { Client } from "../models";
import { hash } from "argon2";

export const ClientController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const clients = await Client.findAll();
			res.status(200).json(clients);
		} catch (error) {
			// Handle the error and send an error response
			console.error("An error occurred while fetching clients:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	create: async (req, res) => {
		try {
			const client = await creatClientSchema.validateAsync(req.body);
			const hashedPassword = await hash(client.user.password);
			client.user.password = hashedPassword;
			const createdClient = await Client.create(client, {
				include: [Client.User],
			});
			const returnedClient = createdClient.get({ plain: true });
			delete returnedClient.user.password;
			return res.status(201).json(returnedClient);
		} catch (err) {
			if (err instanceof ValidationError) {
				return res.status(400).send(err.details[0].message);
			}
			return res.status(500).send(typeof err);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	show: async (req, res) => {
		try {
			const { id } = req.params;
			const client = await Client.findByPk(id, { include: [Client.User] });
			if (!client) return res.status(404).json({ error: "Client not found" });
			res.status(200).json(client);
		} catch (error) {
			console.error("An error occurred while fetching client:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: (req, res) => {},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const client = await Client.destroy({
				where: {
					id: id,
				},
			});
			if (!client) return res.status(404).json({ error: "Client not found" });
			res.status(200).json({ message: "Client deleted successfully" });
		} catch (error) {
			console.error("An error occurred while fetching client:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},
};
