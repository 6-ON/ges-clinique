import { User, Chef } from "../models";
describe("GET /", () => {
	it("should add user", async () => {
		const chef = await Chef.create(
			{
				grade: "plus",
				user: {
					name: "John Doe",
					email: "john.doe@example.com",
					password: "password123",
					phone: "1234567890",
					image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2FHD%2520wallpaper%2F&psig=AOvVaw0Q4X6Z2Z3Q4Q4Z2Z3Q4Q4Z2Z3Q4Q4Z2Z3Q4Q4&ust=1629787226268000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4Z2Z3_QCFQAAAAAdAAAAABAD",
				},
			},
			{
				include: [Chef.User],
			},
		);
		console.log(chef);
	});
});
