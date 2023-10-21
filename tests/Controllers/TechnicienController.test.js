import app from "../../app";
import logger from "../../utils/logger";
import request from "supertest";
import { Technicien } from "../../models";
describe("GET /", () => {
	it("add tech", async () => {
		const response = await request(app)
			.post("/techniciens")
			.accept("application/json")
			.send(
				{
					specialite: "haaaa",
					user: {
						name: "John Doe",
						email: "techn.doe@example.com",
						password: "password123",
						phone: "1234567890",
						image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2FHD%2520wallpaper%2F&psig=AOvVaw0Q4X6Z2Z3Q4Q4Z2Z3Q4Q4Z2Z3Q4Q4Z2Z3Q4Q4&ust=1629787226268000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4Z2Z3_QCFQAAAAAdAAAAABAD",
					},
				}
			);
		// add 
		logger.info(response.body);
		logger.info(response.status);
	});
});
