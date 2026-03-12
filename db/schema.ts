import { text, boolean, pgTable, serial, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const newsletterSubscriptionTable = pgTable("newsletter_subscription", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  subscribed: boolean("subscribed").default(false).notNull(),
  confirmToken: text("confirm_token").unique(),
  confirmTokenExpiresAt: timestamp("confirm_token_expires_at"),
  createdAt: timestamp("created_at").defaultNow()
});

export const budgetEnum = pgEnum("budget", [
  "Under $1,500",
  "$1,500 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 - $60,000",
  "$60,000",
  "Let's Discuss",
]);

export const timelineEnum = pgEnum("timelines", [
  "ASAP — urgent project",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring for now",
]);

export const servicesEnum = pgEnum("services", [
  "Web Solutions (Design & Development)",
  "Mobile Application Development",
  "Data Analytics",
  "Social Media Marketing",
  "AI Automation",
  "Multiple Services",
  "Not Sure Yet",
]);

export const goalsEnum = pgEnum("goals", [
  "Increase revenue",
  "Reduce manual work",
  "Launch a new product",
  "Improve user experience",
  "Scale existing systems",
  "Enter a new market",
  "Build internal tools",
  "Data-driven decisions",
])


export const clientInquiries = pgTable("client_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(),
  company: text("company"),
  budget: budgetEnum("budget"),
  timeline: timelineEnum("timelines"),
  message: text("message").notNull(),
  goals: goalsEnum("goals").array(),
  createAt: timestamp("created_at").defaultNow()
})