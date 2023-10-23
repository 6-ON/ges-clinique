import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";

describe("FactureController", () => {
	it("should add Facture ", async () => {
		const FactureData = {

			montant: faker.number.binary(),
			datePaiement: faker.date.recent(),
			reservationId: "1"
		};
		const {body, statusCode } = await request(app).post("/factures").accept("*").send(FactureData);
			
			

		
		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");


	}, 1000000);
});
