import { User } from "../models";

User.create({
	email: "super@admin.com",
	password: "password",
	image: "https://www.gravatar.com/a",
	name: "Super Admin",
	userableType: "SuperAdmin",
}).then(() => {
	console.log("Super Admin created");
});
