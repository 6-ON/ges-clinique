import { faker } from "@faker-js/faker";
import { Succursale, User } from "../models";
Succursale.bulkCreate(
	[...Array(10)].map(() => ({
		name: faker.word.noun(),
		startHour: faker.number.int({ min: 9, max: 18 }),
		endHour: faker.number.int({ min: 9, max: 18 }),
		image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),
		chef: {
			grade: faker.string.alpha({ casing: "upper" }),
			user: {
				email: faker.internet.email(),
				password: "password",
				name: faker.person.fullName(),
				phone: faker.phone.number(),
				image: faker.image.avatar(),
			},
		},
	})),
	{
		include: [{ association: Succursale.Chef, include: [{ model: User.unscoped(), as: "user" }] }],
	},
).then(() => {
	console.log("Succursales seeded");
});
