/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import {creatClientSchema, updateClientSchema} from "../validations";
import {Client} from "../models";
import catchHandler from "../utils/CatchHandler";

export const ClientController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const clients = await Client.scope("individual").findAll({ include: [Client.User] });
			return res.status(200).json(clients);
		} catch (error) {
			return catchHandler(error, res);
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	create: async (req, res) => {
		try {
			const client = await creatClientSchema.validateAsync(req.body);
			const createdClient = await Client.create(client, {
				include: [Client.User],
			});
			const returnedClient = createdClient.get({plain: true});
			delete returnedClient.user.password;
			return res.status(201).json(returnedClient);
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
			const {id} = req.params;
			const client = await Client.findByPk(id, {include: [Client.User]});
			if (!client) return res.status(404).json({error: "Client not found"});
			return res.status(200).json(client);
		} catch (error) {
			return catchHandler(err, res);
		}
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		try {
			const {user: validateUser} = await updateClientSchema.validateAsync(req.body)
			const {id} = req.params
			const client = await Client.findByPk(id, { include: [Client.User]})
			if (!client) return res.status(404).json("Client not found")
			if (validateUser) {
				const {user} = client
				await user.update(validateUser)
				client.user = user
			}
			return res.status(200).json(client.toJSON())
		} catch (err) {
			return catchHandler(err, res)
		}
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */

	delete: async (req, res) => {
		try {
			const {id} = req.params;
			const client = await Client.destroy({
				where: {
					id: id,
				},
			});
			if (!client) return res.status(404).json({error: "Client not found"});
			return res.status(200).json({message: "Client deleted successfully"});
		} catch (error) {
			return catchHandler(err, res);
		}
	},
};
