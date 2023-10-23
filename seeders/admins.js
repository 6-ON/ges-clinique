import { User } from "../models";
import { faker } from "@faker-js/faker";

User.bulkCreate(
	[...Array(5)].map(() => ({
		email: faker.internet.email(),
		password: "password",
		name: faker.person.fullName(),
		phone: faker.phone.number(),
		image: faker.image.avatar(),
		userableType: "Admin",
	}))
).then(() => {
	console.log("Admins seeded");
});