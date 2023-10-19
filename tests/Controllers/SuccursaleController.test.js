import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";

describe("SuccursaleController", () => {
	it("should add Succursale ", async () => {
		const SuccursaleData = {

			name: faker.commerce.productName(),
			startHour: faker.lorem.paragraph(),
			endHour: faker.finance.amount(),
			image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),

		};
		const {body, statusCode } = await request(app).post("/succursales").accept("*").send(SuccursaleData);
			

		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");


	}, 1000000);
});
