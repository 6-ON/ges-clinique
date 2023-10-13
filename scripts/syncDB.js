import sequelize from "../config";
//define models
import "../models";
sequelize.sync({ force: "true" }).then(() => {
	console.log("Database is up to date!");
	process.exit();
});
