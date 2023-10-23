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
		entrepriseDetail:{
			name: faker.company.name(),
			adress: faker.location.streetAddress(),
		},
		employees: [...Array(10)].map(() => ({
			name: faker.person.fullName(),
			email: faker.internet.email(),
		})),
	})),
	{
		include: [{ model: User.unscoped(), as: "user" }, Client.EntrepriseDetail, Client.Employee],
	},
)
	.then(() => {
		console.log("entreprises seeded");
	})
	.catch((error) => {
		console.error("Error seeding entreprises:", error);
	});
