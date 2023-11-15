import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./schema";

const insertUserSchema = createInsertSchema(users);
const selectUserSchema = createSelectSchema(users);
