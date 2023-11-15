import type { Config } from "drizzle-kit";
import { config } from "dotenv";
config({ path: ".env.local" });

export default {
	schema: "./drizzle/schema.ts",
	driver: "pg",
	out: "./drizzle/migrations",
	dbCredentials: {
		connectionString: process.env.DATABASE_CONNECTION!,
	},
} satisfies Config;
