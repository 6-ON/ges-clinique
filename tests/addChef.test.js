import app from "../app";
import logger from "../utils/logger";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { hash } from "argon2";

describe("GET /", () => {
	it("should add chef and user", async () => {
		const chefData = {
			grade: faker.string.alpha({ casing: "lower" }),
			user: {
				name: faker.person.firstName(),
				email: faker.internet.email(),
				password: await hash(faker.internet.password()),
				phone: faker.phone.number(),
				image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),
			},
		};
		const response = await request(app).post("/chefs").accept("application/json").send(chefData);

		logger.info(response.body);
		logger.info(response.status);
	}, 1000000);
});
