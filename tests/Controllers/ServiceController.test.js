import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";

describe("ServiceController", () => {
	it("should add Service ", async () => {
		const ServiceData = {

			name: faker.commerce.productName(),
			description: faker.lorem.paragraph(),
			tarifs: faker.finance.amount(),
			image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),

		};
		const {body, statusCode } = await request(app).post("/services").accept("*").send(ServiceData);
			
			

		
		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");


	}, 1000000);
});
