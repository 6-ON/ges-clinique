import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";
function logErrors(err, req, res, next) {
	return res.status(500).json(err);
}
describe("FactureController", () => {
	it("should add Facture ", async () => {
		const FactureData = {

			montant: faker.number.binary(),
			datePaiement: faker.date.recent(),
			reservationId: "1"
		};
		const { body, statusCode } = await request(app).post("/factures").accept("*").send(FactureData);
		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");


	}, 1000000);

	it("should get facture by id", async () => {
		const { body, statusCode } = await request(app).get("/factures/2").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");

	});
	it("should get all factures", async () => {
		const { body, statusCode } = await request(app.use(logErrors)).get("/factures").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toBeInstanceOf(Array);
	});
	it("should update facture", async () => {
		const factureData = {
			montant: faker.number.binary(),
			datePaiement: faker.date.recent(),
			reservationId: "1"
		};
		const { body, statusCode } = await request(app).put("/factures/2").accept("*").send(factureData);
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");

	});
	
	it("should delete facture", async () => {
		const {statusCode } = await request(app).delete("/factures/2").accept("*");
		expect(statusCode).toBe(204);
		
	});
});
