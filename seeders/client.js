import { faker } from "@faker-js/faker";
import { Client, User } from "../models";
Client.bulkCreate(
	[...Array(10)].map(() => ({
		user: {
			email: faker.internet.email(),
			password: "password",
			name: faker.person.fullName(),
			phone: faker.phone.number(),
			image: faker.image.avatar(),
		},
	})),
	{
		include: [{ model: User.unscoped(), as: "user" }],
	},
)
	.then(() => {
		console.log("client seeded");
	})
	.catch((error) => {
		console.error("Error seeding clients:", error);
	});
