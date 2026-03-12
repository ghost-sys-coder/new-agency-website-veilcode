// components/contact/types.ts
export interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export type SubmitState = "idle" | "loading" | "success" | "error";

export const SERVICES = [
  "Web Solutions (Design & Development)",
  "Mobile Application Development",
  "Data Analytics",
  "Social Media Marketing",
  "AI Automation",
  "Multiple Services",
  "Not Sure Yet",
] as const;

export const BUDGETS = [
  "Under $2,500",
  "$2,500 – $8,000",
  "$8,000 – $25,000",
  "$25,000 – $60,000",
  "$60,000+",
  "Let's Discuss",
] as const;

export const TIMELINES = [
  "ASAP — urgent project",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring for now",
] as const;