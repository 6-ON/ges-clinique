import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
function logErrors(err, req, res, next) {
	return res.status(500).json(err);
}
describe("ChefController", () => {
	it("chef controller test", async () => {
		const chefData = {
			grade: faker.string.alpha({ casing: "upper" }),
			user: {
				name: faker.person.firstName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				phone: faker.phone.number(),
				image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),
			},
		};
		const { body, statusCode } = await request(app).post("/chefs").accept("*").send(chefData);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");
		expect(body.user).toHaveProperty("id");
	}, 1000000);
	it("should get chef by id", async () => {
		const { body, statusCode } = await request(app).get("/chefs/1").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");
		expect(body.user).toHaveProperty("id");
	});
	it("should get all chefs", async () => {
		const { body, statusCode } = await request(app.use(logErrors)).get("/chefs").accept("*");
		expect(statusCode).toBe(200);
		expect(body).toBeInstanceOf(Array);
	});
	it("should update chef", async () => {
		const chefData = {
			grade: faker.string.alpha({ casing: "upper" }),
			succursaleId: null,
			user: {
				name: faker.person.firstName(),
			},
		};
		const { body, statusCode } = await request(app).put("/chefs/1").accept("*").send(chefData);
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");
		expect(body.user).toHaveProperty("id");
	});
});
