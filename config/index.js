import { Sequelize } from "sequelize";
import logger from "../utils/logger";
import "dotenv/config";
const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT, SEQUELIZE_LOG } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	dialect: "mysql",
	host: DB_HOST,
	port: DB_PORT,
	logging: +SEQUELIZE_LOG ? (msg) => logger.info(msg) : false,
});
export default sequelize;
