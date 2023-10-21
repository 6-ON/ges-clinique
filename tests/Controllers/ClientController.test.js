import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
describe("GET /", () => {
	it("should add client", async () => {
		const { body, statusCode } = await request(app) 
			.post("/clients")
			.accept("application/json")
			.send({
				user: {
					name: "shgs",
					email: "sdjbdfhhjnfkm.tedsghudjhg@example.com",
					password: "password123",
					phone: "1234567890",
					image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2FHD%2520wallpaper%2F&psig=AOvVaw0Q4X6Z2Z3Q4Q4Z2Z3Q4Q4Z2Z3Q4Q4Z2Z3Q4Q4&ust=1629787226268000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4Z2Z3_QCFQAAAAAdAAAAABAD",
				},
			});

		expect(statusCode).toBe(201);
		expect(body).toHaveProperty("id");
		expect(body.user).toHaveProperty("id");
	}, 1000000);


	it("find client by id", async () => {
		const { body, statusCode } = await request(app).get("/clients/15").accept("*");
		logger.info(body);
		expect(statusCode).toBe(200);
		expect(body).toHaveProperty("id");
		expect(body.user).toHaveProperty("id");
	}, 1000000);

	it("delete client by id", async () => {
		const {statusCode } = await request(app).delete("/clients/15").accept("*");
		expect(statusCode).toBe(200);
		
	}, 1000000);
});



