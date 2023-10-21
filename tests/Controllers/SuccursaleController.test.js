import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";
function logErrors(err, req, res, next) {
	return res.status(500).json(err);
}
describe("succursaleController", () => {
	it("should add succursale ", async () => {
		const succursaleData = {
			name: faker.commerce.productName(),
			startHour: faker.number.int({ min: 9, max: 18 }),
			endHour: faker.number.int({ min: 9, max: 18 }),
			image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),

		};
		const { body, statusCode } = await request(app).post("/succursales").accept("*").send(succursaleData);
		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");


	}, 1000000);

	it("should get succursale by id", async () => {
		const { body, statusCode } = await request(app).get("/succursales/1").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");

	});
	it("should get all succursales", async () => {
		const { body, statusCode } = await request(app.use(logErrors)).get("/succursales").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toBeInstanceOf(Array);
	});
	it("should update succursale", async () => {
		const succursaleData = {
			name: faker.commerce.productName(),
			startHour: faker.number.int({ min: 9, max: 18 }),
			endHour: faker.number.int({ min: 9, max: 18 }),
			image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),

		};
		const { body, statusCode } = await request(app).put("/succursales/1").accept("*").send(succursaleData);
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");

	});
	
	it("should delete succursale", async () => {
		const {statusCode } = await request(app).delete("/succursales/1").accept("*");
		expect(statusCode).toBe(204);
		
	});
});
