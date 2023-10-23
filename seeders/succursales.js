import { faker } from "@faker-js/faker";
import { Succursale } from "../models";
Succursale.bulkCreate(
	[...Array(10)].map(() => ({
		name: faker.word.noun(),
		startHour: faker.number.int({ min: 9, max: 18 }),
		endHour: faker.number.int({ min: 9, max: 18 }),
		image: faker.image.urlLoremFlickr({ width: 640, height: 480, category: "human" }),
	}))
).then(() => {
	console.log("Succursales seeded");
});
