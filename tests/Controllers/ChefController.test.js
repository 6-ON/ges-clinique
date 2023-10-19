import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import _ from "lodash";

describe("ChefController", () => {
	it("should add chef and user", async () => {
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
		const {body, statusCode } = await request(app).post("/chefs").accept("*").send(chefData);
		logger.info(body);
		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");
		expect(body.user).toHaveProperty("id");
	}, 1000000);
});
