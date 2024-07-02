import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://root:XkYgSzHmMAf9chdgp2OXOtlb@bromo.liara.cloud:32308/postgres",
  },
});
