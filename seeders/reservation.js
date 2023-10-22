import { faker } from "@faker-js/faker";
import { User, Reservation } from "../models";
Reservation.bulkCreate(
	[...Array(10)].map(() => ({
		service: {
			name: faker.word.noun(),
			description: faker.lorem.paragraph(),
			tarifs: faker.number.int({min:1,max:200}),
			image: faker.image.urlLoremFlickr(),
		},

		client: {
			user: {
				email: faker.internet.email(),
				password: "password",
				name: faker.person.fullName(),
				phone: faker.phone.number(),
				image: faker.image.avatar(),
			},
		},

		data: "hsklnfsdlknsfs",
		status: 1,
		date: faker.date.anytime().toISOString(),
	})),
	{
		include: [Reservation.Service, { association: Reservation.Client, include: [{ model: User.unscoped(), as: "user" }] }],
	},
)
	.then(() => {
		console.log("Reservations seeded");
	})
	.catch((error) => {
		console.error("Error seeding clients:", error);
	});
