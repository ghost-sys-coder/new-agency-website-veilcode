import { text, boolean, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const newsletterSubscriptionTable = pgTable("newsletter_subscription", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  subscribed: boolean("subscribed").default(false).notNull(),
  confirmToken: text("confirm_token").unique(),
  confirmTokenExpiresAt: timestamp("confirm_token_expires_at"),
  createdAt: timestamp("created_at").defaultNow()
});
