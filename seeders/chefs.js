import { faker } from "@faker-js/faker";
import { Chef, User } from "../models";
Chef.bulkCreate(
	[...Array(10)].map(() => ({
		grade: faker.string.alpha({ casing: "upper" }),
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
		console.log("chefs seeded");
	})
	.catch((error) => {
		console.error("Error seeding chefs:", error);
	});
