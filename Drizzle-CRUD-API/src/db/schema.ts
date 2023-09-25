import { relations } from "drizzle-orm";
import { mysqlTable, serial, varchar, text, int } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
});

export const blogs = mysqlTable("blogs", {
  id: serial("id").primaryKey(),
  content: text("content"),
  userId: int("user_id"),
});

export const userRelations = relations(users, ({ many }) => ({
  articles: many(blogs),
}));

export const postRelations = relations(blogs, ({ one }) => ({
  author: one(users, {
    fields: [blogs.userId],
    references: [users.id],
  }),
}));
