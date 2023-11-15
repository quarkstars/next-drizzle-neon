import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { users } from "./schema";

export type SelectedUser = InferSelectModel<typeof users>;
export type InsertedUser = InferInsertModel<typeof users>;
