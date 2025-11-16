import "dotenv/config";

export default {
	schema: "./src/infrastructure/db",
	out: "./drizzle",
	dialect: "sqlite",
};
