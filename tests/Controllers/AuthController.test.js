import app from "../../app";
import request from "supertest";
import logger from "../../utils/logger";

describe("POST /", () => {
	it("should login", async () => {
		const response = await request(app).post("/auth/login").accept("application/json").send({
			email: "john.doe@example.com",
			password: "passhword123",
		});
		logger.info(response.body);
		logger.info(response.statusCode);
	});
});
