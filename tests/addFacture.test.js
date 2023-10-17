import app from "../app";
import { Facture } from "../models";
import logger from "../utils/logger";
import request from "supertest";
describe("GET /", () => {
	it("should add Facture", async () => {
		const currentDate = new Date();
		const response = await request(app)
			.post("/factures")
			.accept("application/json")
			.send({
				montant: "67",
				datePaiement: currentDate.toISOString(),
				reservationId: "1",
			});
		
		logger.info(response.body);
		logger.info(response.status);
	}, 1000000);
});