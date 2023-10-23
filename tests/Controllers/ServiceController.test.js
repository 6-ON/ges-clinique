import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";
function logErrors(err, req, res, next) {
	return res.status(500).json(err);
}
describe("serviceController", () => {
	it("should add service ", async () => {
		const serviceData = {
			name: faker.commerce.productName(),
			description: faker.lorem.paragraph(),
			tarifs: faker.finance.amount(),
			image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),

		};
		const { body, statusCode } = await request(app).post("/services").accept("*").send(serviceData);
		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");


	}, 1000000);

	it("should get service by id", async () => {
		const { body, statusCode } = await request(app).get("/services/1").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");

	});
	it("should get all services", async () => {
		const { body, statusCode } = await request(app.use(logErrors)).get("/services").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toBeInstanceOf(Array);
	});
	it("should update service", async () => {
		const serviceData = {
			name: faker.commerce.productName(),
			description: faker.lorem.paragraph(),
			tarifs: faker.finance.amount(),
			image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),

		};
		const { body, statusCode } = await request(app).put("/services/1").accept("*").send(serviceData);
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");

	});
	
	it("should delete service", async () => {
		const {statusCode } = await request(app).delete("/services/1").accept("*");
		expect(statusCode).toBe(204);
		
	});
});
