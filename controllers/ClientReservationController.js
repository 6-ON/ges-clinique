/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */
import { creatReservationSchema } from "../validations";
import { Reservation } from "../models";
import catchHandler from "../utils/CatchHandler";

export const ClientReservationController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	index: async (req, res) => {
		try {
			const reservations = await Reservation.findAll({ include: [Reservation.Client] });
			return res.status(200).json(reservations.map((e)=>e.toJSON()));
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
			const reservation = await creatReservationSchema.validateAsync(req.body);
			const createdReservation = await Reservation.create({...reservation , clientId:req.user.userableId});
			return res.status(201).json(createdReservation.toJSON());
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
			const reservation = await Reservation.findByPk(id);
			if (!reservation) return res.status(404).json({error: "reservation not found"});
			return res.status(200).json(reservation);
		} catch (error) {
			return catchHandler(err, res);
		}
	},
};
