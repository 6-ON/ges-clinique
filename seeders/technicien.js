import { faker } from "@faker-js/faker";
import { Technicien, User } from "../models";
Technicien.bulkCreate(
	[...Array(10)].map(() => ({
		specialite: faker.lorem.word(5),

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
		console.log("technicien seeded");
	})
	.catch((error) => {
		console.error("Error seeding techniciens:", error);
	});
