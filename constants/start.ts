export const BUDGETS = [
  { label: "Under $2,500",       sub: "Small scope / MVP" },
  { label: "$2,500 – $8,000",    sub: "Starter projects"  },
  { label: "$8,000 – $25,000",   sub: "Growth range"      },
  { label: "$25,000 – $60,000",  sub: "Full builds"       },
  { label: "$60,000+",           sub: "Enterprise scale"  },
  { label: "Let's Discuss",      sub: "Flexible / TBD"    },
] as const;

export const TIMELINES = [
  { label: "ASAP",               sub: "Urgent — start immediately" },
  { label: "Within 1 month",     sub: "Getting close to ready"     },
  { label: "1–3 months",         sub: "Reasonable runway"          },
  { label: "3–6 months",         sub: "Planning ahead"             },
  { label: "Just exploring",     sub: "No deadline yet"            },
] as const;

export const GOALS = [
  "Increase revenue",
  "Reduce manual work",
  "Launch a new product",
  "Improve user experience",
  "Scale existing systems",
  "Enter a new market",
  "Build internal tools",
  "Data-driven decisions",
] as const;
