import app from "../../app";
import request from "supertest";
import logger from "../../utils/logger";

describe("POST /login", () => {
	it("should login", async () => {
		const response = await request(app).post("/auth/login").accept("*").send({
			email: "super@admin.com",
			password: "password",
		})
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty("token");
		expect(response.body).toHaveProperty("user");
	}, 1000000);
});
