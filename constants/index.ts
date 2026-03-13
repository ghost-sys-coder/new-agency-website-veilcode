export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work"     },
  { label: "About",    href: "/about"    },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
] as const;


export const SERVICES: Service[] = [
  {
    icon: "◈",
    title: "Web Solutions",
    desc: "End-to-end design and development of high-performance websites and web applications — engineered for scale, speed, and exceptional user experiences.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    classes: {
      icon:        "text-svc-web",
      tag:         "bg-svc-web-dim border-svc-web-border text-svc-web",
      glow:        "bg-[radial-gradient(circle_at_top_right,var(--color-svc-web-dim),transparent)]",
      hoverBorder: "hover:border-[var(--color-svc-web-border)]",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-web-dim)]",
      link:        "text-svc-web",
    },
  },
  {
    icon: "◉",
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps built for performance and delight. iOS and Android experiences that users love to return to.",
    tags: ["React Native", "Expo", "Swift", "Kotlin"],
    classes: {
      icon:        "text-svc-mobile",
      tag:         "bg-svc-mobile-dim border-svc-mobile-border text-svc-mobile",
      glow:        "bg-[radial-gradient(circle_at_top_right,var(--color-svc-mobile-dim),transparent)]",
      hoverBorder: "hover:border-[var(--color-svc-mobile-border)]",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-mobile-dim)]",
      link:        "text-svc-mobile",
    },
  },
  {
    icon: "◎",
    title: "Data Analytics",
    desc: "Transform raw data into strategic clarity. Custom dashboards, pipelines, and intelligence systems built for decision-makers who move fast.",
    tags: ["Python", "Power BI", "BigQuery", "dbt", "Tableau"],
    classes: {
      icon:        "text-svc-data",
      tag:         "bg-svc-data-dim border-svc-data-border text-svc-data",
      glow:        "bg-[radial-gradient(circle_at_top_right,var(--color-svc-data-dim),transparent)]",
      hoverBorder: "hover:border-[var(--color-svc-data-border)]",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-data-dim)]",
      link:        "text-svc-data",
    },
  },
  {
    icon: "⬡",
    title: "Social Media Marketing",
    desc: "Data-driven campaigns that convert. Strategy, content creation, paid social, and community management — all aligned to your growth targets.",
    tags: ["Meta Ads", "TikTok Ads", "Content", "Analytics", "SEO"],
    classes: {
      icon:        "text-svc-social",
      tag:         "bg-svc-social-dim border-svc-social-border text-svc-social",
      glow:        "bg-[radial-gradient(circle_at_top_right,var(--color-svc-social-dim),transparent)]",
      hoverBorder: "hover:border-[var(--color-svc-social-border)]",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-social-dim)]",
      link:        "text-svc-social",
    },
  },
  {
    icon: "⬢",
    title: "AI Automation",
    desc: "Streamline operations with intelligent workflows. LLM integrations, custom AI agents, and process automation that frees your team to think bigger.",
    tags: ["LangChain", "OpenAI", "Python", "n8n", "Zapier"],
    classes: {
      icon:        "text-svc-ai",
      tag:         "bg-svc-ai-dim border-svc-ai-border text-svc-ai",
      glow:        "bg-[radial-gradient(circle_at_top_right,var(--color-svc-ai-dim),transparent)]",
      hoverBorder: "hover:border-[var(--color-svc-ai-border)]",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-ai-dim)]",
      link:        "text-svc-ai",
    },
  },
];

export const TESTIMONIALS = [
  {
    initials: "SO",
    name:     "Sarah Okonkwo",
    role:     "CEO, Nexus Commerce",
    quote:    "VeilCode didn't just build us a website — they transformed our entire digital operation. The AI recommendation engine alone tripled our revenue within the first quarter.",
  },
  {
    initials: "JT",
    name:     "James Thornton",
    role:     "CTO, FlowMetrics",
    quote:    "The data pipeline they architected handles traffic spikes we never anticipated. Rock-solid engineering and exceptional communication throughout the entire engagement.",
  },
  {
    initials: "AH",
    name:     "Amina Hassan",
    role:     "Head of Growth, Vantage",
    quote:    "Our team saves 40 hours per week thanks to the automation workflows VeilCode built. The ROI was clearly visible within the very first month of going live.",
  },
] as const;

export const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive into your goals, users, and competitive landscape. We map the terrain before writing a single line of code.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Architecture, tech stack, and roadmap decisions made with data — not guesswork. You see the full plan before we build.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Agile sprints with transparent progress updates. Code that's clean, tested, and engineered to last.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Smooth deployment, performance monitoring, and ongoing optimisation so your product keeps improving post-launch.",
  },
] as const;

export const FOOTER_COLS = [
  {
    heading: "Services",
    links: [
      { label: "Web Solutions",          href: "/services/#web-solutions" },
      { label: "Mobile Applications",    href: "/services/#mobile-applications" },
      { label: "Data Analytics",         href: "/services/#data-analytics" },
      { label: "Social Media Marketing", href: "/services/#social-media-marketing" },
      { label: "AI Automation",          href: "/services/#ai-automation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Work",     href: "/work" },
      { label: "Blog",     href: "/blog" },
      { label: "Careers",  href: "/careers" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",  href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy",   href: "#" },
    ],
  },
] as const;


export const PROJECTS: SampleProjects[] = [
  {
    tag:         "Web + AI",
    title: "Nexus Commerce Platform",
    slug: "nexus-commerce",
    desc:        "End-to-end e-commerce rebuild with an AI-powered recommendations engine. 3× conversion uplift in 90 days.",
    metric:      "+300%",
    metricLabel: "Conversions",
    classes: {
      tag:         "bg-svc-web-dim border-svc-web-border text-svc-web",
      metric:      "text-svc-web",
      orb:         "border-svc-web-border",
      innerOrb:    "bg-svc-web-dim border-svc-web-border",
      hoverBorder: "hover:border-svc-web-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-web-dim)]",
      link:        "text-svc-web",
    },
    screenShot: "/assets/nexus-project/image-client-1.jpg"
  },
  {
    tag:         "Data Analytics",
    title: "FlowMetrics Dashboard",
    slug: "flowmetrics-dashboard",
    desc:        "Real-time analytics platform processing 50M+ events per day for a fast-growing SaaS company.",
    metric:      "50M+",
    metricLabel: "Daily Events",
    classes: {
      tag:         "bg-svc-data-dim border-svc-data-border text-svc-data",
      metric:      "text-svc-data",
      orb:         "border-svc-data-border",
      innerOrb:    "bg-svc-data-dim border-svc-data-border",
      hoverBorder: "hover:border-svc-data-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-data-dim)]",
      link:        "text-svc-data",
    },
    screenShot: "/assets/flow-metrics-project/image-1.jpg"
  },
  {
    tag:         "AI Automation",
    title: "Vantage AI Agent Suite",
    slug: "vantage-ai-agents",
    desc:        "Custom LLM agents automating 80% of a financial firm's data processing and reporting pipeline.",
    metric:      "80%",
    metricLabel: "Automated",
    classes: {
      tag:         "bg-svc-ai-dim border-svc-ai-border text-svc-ai",
      metric:      "text-svc-ai",
      orb:         "border-svc-ai-border",
      innerOrb:    "bg-svc-ai-dim border-svc-ai-border",
      hoverBorder: "hover:border-svc-ai-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-ai-dim)]",
      link:        "text-svc-ai",
    },
    screenShot: "/assets/vantage-ai-suite/image-1.jpg"
  },
];




export const SOCIALS = [
  { label: "Twitter / X", abbr: "TW", href: "#" },
  { label: "LinkedIn",    abbr: "LI", href: "#" },
  { label: "GitHub",      abbr: "GH", href: "#" },
] as const;

export const TYPEWRITER_WORDS = [
  "Web Solutions.",
  "Mobile Apps.",
  "Data Analytics.",
  "AI Automation.",
  "Digital Growth.",
] as const;

export const STATS = [
  { val: "120+", label: "Projects Delivered" },
  { val: "98%",  label: "Client Satisfaction" },
  { val: "4×",   label: "Avg. ROI Achieved"   },
  { val: "5 yrs", label: "Industry Experience" },
] as const;



// about page data
export const MILESTONES = [
  {
    year: "2020",
    title: "The Beginning",
    desc: "Started as a two-person freelance operation out of Kampala — a developer and a designer with a shared obsession for craft and a conviction that African businesses deserved world-class digital products.",
  },
  {
    year: "2021",
    title: "First Major Product",
    desc: "Launched our first enterprise web platform, processing over 1M transactions in its first year. The project proved that premium engineering wasn't just a luxury — it was a competitive advantage.",
  },
  {
    year: "2022",
    title: "Expanding the Team",
    desc: "Grew to a full-service team of 8, adding mobile development, data analytics, and marketing capabilities. Moved into our first dedicated studio space and formalised our agency structure.",
  },
  {
    year: "2023",
    title: "AI & Automation Practice",
    desc: "Launched our AI Automation practice ahead of the curve. Built Uganda's first LLM-powered business intelligence system for a regional financial institution.",
  },
  {
    year: "2024",
    title: "Going Regional",
    desc: "Expanded our client base across East Africa and secured our first international partnerships. Delivered 40+ projects across 6 countries while maintaining our 98% client satisfaction rate.",
  },
  {
    year: "2025",
    title: "What We Are Today",
    desc: "A trusted premium digital partner for ambitious brands — from early-stage startups to established enterprises. Still obsessed with craft. Still refusing to build ordinary things.",
  },
] as const;

export const PILLARS = [
  {
    label: "Mission",
    icon: "◈",
    headline: "Empower ambitious brands with digital products that perform.",
    body: "We exist to close the gap between great ideas and great execution. Every project we take on is a commitment to quality — not just functional quality, but the kind that makes users stop and notice something feels different.",
    accent: "text-brand",
    border: "border-brand/20",
    bg: "bg-brand-dim",
    glow: "shadow-[0_0_40px_var(--color-brand-dim)]",
  },
  {
    label: "Vision",
    icon: "◎",
    headline: "A world where exceptional digital experiences are the baseline.",
    body: "We believe the standard for digital products in Africa — and everywhere — should be set by the best in the world. VeilCode is building toward a future where our clients are those setting the standard.",
    accent: "text-svc-data",
    border: "border-svc-data/20",
    bg: "bg-svc-data-dim",
    glow: "shadow-[0_0_40px_var(--color-svc-data-dim)]",
  },
] as const;

export const COMMITMENTS = [
  { num: "01", title: "Client-First Thinking", desc: "Your goals drive every decision we make — architecture, design, and strategy all start from what moves the needle for you." },
  { num: "02", title: "Transparency Always", desc: "No black boxes. You see our thinking, our progress, and our concerns in real time — because great partnerships require honesty." },
  { num: "03", title: "Long-Term Perspective", desc: "We build things that scale. Short-term shortcuts are never worth the technical debt they leave behind." },
] as const;


export const VALUES = [
  {
    number: "01",
    icon: "⬡",
    title: "Craft Over Speed",
    short: "We choose quality every time.",
    desc: "We move deliberately and build with intention. Rushing to ship half-baked work is a disservice to our clients and to the people who will use what we build. Craft is non-negotiable.",
    accent: "text-brand",
    tagBg: "bg-brand-dim",
    tagBorder: "border-brand-border",
    hoverBorder: "hover:border-brand/30",
    hoverGlow: "hover:shadow-[0_0_32px_var(--color-brand-dim)]",
  },
  {
    number: "02",
    icon: "◈",
    title: "Radical Honesty",
    short: "We say what needs to be said.",
    desc: "We won't tell you what you want to hear at the expense of what you need to know. If a brief is misguided, if a deadline is unrealistic, or if a design isn't working — we say so, constructively and directly.",
    accent: "text-svc-mobile",
    tagBg: "bg-svc-mobile-dim",
    tagBorder: "border-svc-mobile-border",
    hoverBorder: "hover:border-svc-mobile/30",
    hoverGlow: "hover:shadow-[0_0_32px_var(--color-svc-mobile-dim)]",
  },
  {
    number: "03",
    icon: "◎",
    title: "Ownership Mentality",
    short: "We treat your business like ours.",
    desc: "Every engineer on your project thinks like a founder. We ask the uncomfortable questions, flag the downstream risks, and celebrate your wins as if they were our own — because in a real sense, they are.",
    accent: "text-svc-data",
    tagBg: "bg-svc-data-dim",
    tagBorder: "border-svc-data-border",
    hoverBorder: "hover:border-svc-data/30",
    hoverGlow: "hover:shadow-[0_0_32px_var(--color-svc-data-dim)]",
  },
  {
    number: "04",
    icon: "◉",
    title: "Curiosity First",
    short: "We stay permanently in learning mode.",
    desc: "The tools we use today are not the tools we'll use tomorrow. We invest in staying at the frontier — because recommending last year's solutions to this year's problems isn't something we're willing to do.",
    accent: "text-svc-social",
    tagBg: "bg-svc-social-dim",
    tagBorder: "border-svc-social-border",
    hoverBorder: "hover:border-svc-social/30",
    hoverGlow: "hover:shadow-[0_0_32px_var(--color-svc-social-dim)]",
  },
  {
    number: "05",
    icon: "⬢",
    title: "Simplicity Wins",
    short: "We make the complex feel effortless.",
    desc: "Great design and engineering reduces complexity — it doesn't add to it. Whether it's an API, a UI, or a strategy document, our output should make the recipient's life easier, never harder.",
    accent: "text-svc-ai",
    tagBg: "bg-svc-ai-dim",
    tagBorder: "border-svc-ai-border",
    hoverBorder: "hover:border-svc-ai/30",
    hoverGlow: "hover:shadow-[0_0_32px_var(--color-svc-ai-dim)]",
  },
  {
    number: "06",
    icon: "◇",
    title: "Community Accountability",
    short: "We build with the ecosystem in mind.",
    desc: "We are proud to be building from Kampala. That means we hold ourselves to a standard that elevates the broader tech ecosystem — mentoring, contributing, and proving that world-class can come from anywhere.",
    accent: "text-brand",
    tagBg: "bg-brand-dim",
    tagBorder: "border-brand-border",
    hoverBorder: "hover:border-brand/30",
    hoverGlow: "hover:shadow-[0_0_32px_var(--color-brand-dim)]",
  },
] as const;


export const CULTURE_CARDS = [
  {
    icon: "◈",
    title: "Async-First, Not Async-Only",
    desc: "We default to thoughtful written communication — documentation, decision logs, and async reviews. But we also know when a 20-minute call saves three days of back-and-forth.",
    accent: "text-brand",
    bg: "bg-brand-dim",
    border: "border-brand-border",
  },
  {
    icon: "◉",
    title: "Deep Work is Sacred",
    desc: "We protect focused time fiercely. No Slack pings during flow hours, no pointless standups. We give our team the space to do the kind of concentrated work that produces great results.",
    accent: "text-svc-mobile",
    bg: "bg-svc-mobile-dim",
    border: "border-svc-mobile-border",
  },
  {
    icon: "◎",
    title: "Junior-Friendly, Senior-Led",
    desc: "We invest in developing junior talent — but every client engagement is led by a senior. You won't find your critical project handed off to someone learning on the job.",
    accent: "text-svc-data",
    bg: "bg-svc-data-dim",
    border: "border-svc-data-border",
  },
  {
    icon: "⬡",
    title: "Shipping as a Discipline",
    desc: "We have a healthy bias toward shipping. A working product in front of real users beats a perfect product in a Figma file every time. We iterate in the open.",
    accent: "text-svc-social",
    bg: "bg-svc-social-dim",
    border: "border-svc-social-border",
  },
] as const;

export const PERKS = [
  { label: "Remote-first", icon: "🌍" },
  { label: "Flexible hours", icon: "⏰" },
  { label: "Learning budget", icon: "📚" },
  { label: "Conference access", icon: "🎙️" },
  { label: "Health coverage", icon: "🏥" },
  { label: "Equipment stipend", icon: "💻" },
  { label: "Mentorship program", icon: "🤝" },
  { label: "Profit sharing", icon: "📈" },
] as const;



// services page
export const OVERVIEW_CARDS = [
  {
    id:      "web-solutions",
    icon:    "◈",
    number:  "01",
    title:   "Web Solutions",
    tagline: "Design & Development",
    desc:    "Custom websites and web applications built for performance, scale, and conversion. Every project starts with strategy and ends with a product your users can't stop using.",
    bullets: ["Custom web design", "Web app development", "E-commerce platforms", "CMS & headless builds", "Performance optimisation"],
    accent:  "text-svc-web",
    dimBg:   "bg-svc-web-dim",
    border:  "border-svc-web-border",
    hoverBorder: "hover:border-[var(--color-svc-web-border)]",
    hoverShadow: "hover:shadow-[0_0_36px_var(--color-svc-web-dim)]",
  },
  {
    id:      "mobile-applications",
    icon:    "◉",
    number:  "02",
    title:   "Mobile Applications",
    tagline: "iOS & Android Development",
    desc:    "Native and cross-platform mobile apps that feel fast, polished, and purposeful. From consumer apps to enterprise tools — built for the device in your user's hand.",
    bullets: ["React Native & Expo", "iOS & Android", "App Store deployment", "Push notifications", "Offline-first architecture"],
    accent:  "text-svc-mobile",
    dimBg:   "bg-svc-mobile-dim",
    border:  "border-svc-mobile-border",
    hoverBorder: "hover:border-[var(--color-svc-mobile-border)]",
    hoverShadow: "hover:shadow-[0_0_36px_var(--color-svc-mobile-dim)]",
  },
  {
    id:      "data-analytics",
    icon:    "◎",
    number:  "03",
    title:   "Data Analytics",
    tagline: "Intelligence & Insights",
    desc:    "We turn your raw data into decisions. From pipeline architecture to executive dashboards — we build the infrastructure and interfaces that make data a competitive weapon.",
    bullets: ["Data pipeline design", "BI dashboards", "Predictive modelling", "Data warehouse setup", "Reporting automation"],
    accent:  "text-svc-data",
    dimBg:   "bg-svc-data-dim",
    border:  "border-svc-data-border",
    hoverBorder: "hover:border-[var(--color-svc-data-border)]",
    hoverShadow: "hover:shadow-[0_0_36px_var(--color-svc-data-dim)]",
  },
  {
    id:      "social-media-marketing",
    icon:    "⬡",
    number:  "04",
    title:   "Social Media Marketing",
    tagline: "Growth & Brand Presence",
    desc:    "Data-driven social strategy, content creation, and paid media that builds brand equity and drives measurable revenue. We grow audiences that actually convert.",
    bullets: ["Paid social campaigns", "Content strategy", "Community management", "Influencer partnerships", "Performance reporting"],
    accent:  "text-svc-social",
    dimBg:   "bg-svc-social-dim",
    border:  "border-svc-social-border",
    hoverBorder: "hover:border-[var(--color-svc-social-border)]",
    hoverShadow: "hover:shadow-[0_0_36px_var(--color-svc-social-dim)]",
  },
  {
    id:      "ai-automation",
    icon:    "⬢",
    number:  "05",
    title:   "AI Automation",
    tagline: "Intelligent Workflows",
    desc:    "We integrate AI into your operations to eliminate repetitive work, surface better decisions, and give your team capacity for the work that actually requires human judgment.",
    bullets: ["LLM integrations", "Custom AI agents", "Workflow automation", "Document processing", "AI-powered analytics"],
    accent:  "text-svc-ai",
    dimBg:   "bg-svc-ai-dim",
    border:  "border-svc-ai-border",
    hoverBorder: "hover:border-[var(--color-svc-ai-border)]",
    hoverShadow: "hover:shadow-[0_0_36px_var(--color-svc-ai-dim)]",
  },
] as const;


export const DEEP_DIVES: ServiceDeepDiveData[] = [
  {
    id:      "web-solutions",
    number:  "01",
    icon:    "◈",
    title:   "Web Solutions",
    tagline: "Design & Development",
    intro:   "Your website is your highest-leverage sales asset. We design and engineer web experiences that don't just look premium — they perform. Every VeilCode web project is built mobile-first, obsessively fast, and designed to convert.",
    challenge: "Most businesses are losing revenue to slow, generic websites built on templates that look like everyone else. Users make trust decisions in milliseconds, and a mediocre digital presence costs you credibility before you've even had a conversation.",
    approach:  "We start with a deep discovery sprint to understand your users, competitors, and conversion goals. Then we design and build from scratch — no templates, no shortcuts. Every interaction is considered, every page measured against a clear objective.",
    deliverables: [
      { title: "Brand-aligned web design",       desc: "Custom visual identity applied across every page, component, and interaction — cohesive and distinctive." },
      { title: "Next.js / React development",    desc: "Production-grade frontend code: performant, accessible, and maintainable by your team after handoff." },
      { title: "CMS integration",                desc: "Headless CMS setup (Sanity, Contentful, or similar) so your team can update content without a developer." },
      { title: "Performance & SEO foundation",   desc: "Core Web Vitals optimisation, structured data, and technical SEO baked in from day one." },
      { title: "Analytics & conversion tracking", desc: "GA4, heatmaps, and event tracking configured so you can make data-informed decisions from launch day." },
    ],
    stack:       ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel", "PostgreSQL"],
    metric:      "3.2×",
    metricLabel: "Average conversion lift",
    metricSub:   "across web projects vs. client's prior site",
    classes: {
      accent:      "text-svc-web",
      dimBg:       "bg-svc-web-dim",
      border:      "border-svc-web-border",
      glow:        "shadow-[0_0_60px_var(--color-svc-web-dim)]",
      stackBg:     "bg-svc-web-dim",
      stackBorder: "border-svc-web-border",
      metricText:  "text-svc-web",
      divider:     "bg-svc-web",
    },
  },
  {
    id:      "mobile-applications",
    number:  "02",
    icon:    "◉",
    title:   "Mobile Applications",
    tagline: "iOS & Android Development",
    intro:   "Mobile isn't a checkbox anymore — it's often the primary interface your users have with your business. We build apps that are fast, intuitive, and reliable across both major platforms from a single, maintainable codebase.",
    challenge: "Building mobile well is genuinely hard. Performance on low-end devices, offline resilience, platform-specific UX conventions, App Store review processes, push notification strategies — the surface area is enormous, and getting any one thing wrong costs you ratings and retention.",
    approach:  "We use React Native and Expo as our primary stack, giving you a single codebase that delivers near-native performance on both iOS and Android. For projects that genuinely require native-only capabilities, we build them. We don't impose a stack on your requirements.",
    deliverables: [
      { title: "Product & UX strategy",         desc: "User flows, information architecture, and interaction design before a single line of code is written." },
      { title: "React Native development",       desc: "Cross-platform app built with Expo — shared codebase, platform-appropriate UI, genuine native feel." },
      { title: "API & backend integration",      desc: "Connection to your existing APIs or a purpose-built backend with authentication, storage, and push notifications." },
      { title: "App Store deployment",           desc: "Full submission support for both Apple App Store and Google Play — metadata, screenshots, review management." },
      { title: "Post-launch support & updates",  desc: "Ongoing maintenance plan to handle OS updates, dependency upgrades, and feature iterations." },
    ],
    stack:       ["React Native", "Expo", "TypeScript", "Zustand", "React Query", "Supabase", "Firebase FCM"],
    metric:      "4.8★",
    metricLabel: "Average App Store rating",
    metricSub:   "across all VeilCode-built mobile apps",
    classes: {
      accent:      "text-svc-mobile",
      dimBg:       "bg-svc-mobile-dim",
      border:      "border-svc-mobile-border",
      glow:        "shadow-[0_0_60px_var(--color-svc-mobile-dim)]",
      stackBg:     "bg-svc-mobile-dim",
      stackBorder: "border-svc-mobile-border",
      metricText:  "text-svc-mobile",
      divider:     "bg-svc-mobile",
    },
  },
  {
    id:      "data-analytics",
    number:  "03",
    icon:    "◎",
    title:   "Data Analytics",
    tagline: "Intelligence & Insights",
    intro:   "Data is only valuable when someone can act on it. We design and build the full data stack — from ingestion pipelines to executive dashboards — so your team stops drowning in spreadsheets and starts making decisions faster.",
    challenge: "Most businesses are data-rich and insight-poor. Raw data sits in silos, reporting is manual and delayed, and the people who need answers most are waiting days for someone to run a query. The problem is rarely more data — it's better infrastructure and better interfaces.",
    approach:  "We audit your existing data sources, design a clean warehouse architecture, and build automated pipelines that keep everything current. Then we design dashboards that answer the specific questions your team asks every day — not generic templates that answer nobody's questions.",
    deliverables: [
      { title: "Data architecture design",       desc: "Warehouse schema, data model, and pipeline architecture documented before any implementation begins." },
      { title: "ETL / ELT pipelines",            desc: "Automated data ingestion from all your sources — CRM, marketing tools, databases, APIs — on a reliable schedule." },
      { title: "BI dashboard development",       desc: "Interactive dashboards in Power BI, Looker, or a custom-built interface tailored to your team's workflow." },
      { title: "Predictive & descriptive models", desc: "Statistical models and ML pipelines for forecasting, segmentation, and anomaly detection where appropriate." },
      { title: "Data governance & documentation", desc: "Data dictionary, lineage documentation, and access controls so your data estate stays trustworthy over time." },
    ],
    stack:       ["Python", "dbt", "BigQuery", "Snowflake", "Power BI", "Looker", "Apache Airflow", "Pandas"],
    metric:      "50M+",
    metricLabel: "Events processed daily",
    metricSub:   "by our largest active data pipeline",
    classes: {
      accent:      "text-svc-data",
      dimBg:       "bg-svc-data-dim",
      border:      "border-svc-data-border",
      glow:        "shadow-[0_0_60px_var(--color-svc-data-dim)]",
      stackBg:     "bg-svc-data-dim",
      stackBorder: "border-svc-data-border",
      metricText:  "text-svc-data",
      divider:     "bg-svc-data",
    },
  },
  {
    id:      "social-media-marketing",
    number:  "04",
    icon:    "⬡",
    title:   "Social Media Marketing",
    tagline: "Growth & Brand Presence",
    intro:   "Social media is where your brand is either building trust or losing it — there's no neutral. We develop and execute strategies that grow audiences who actually buy, not just followers who scroll past.",
    challenge: "Most brands post consistently and see nothing happen. The problem is that consistency without strategy is just noise. The platforms reward content that drives engagement, and engagement comes from understanding what your specific audience cares about deeply enough to interact with.",
    approach:  "We start with audience and competitor analysis to identify content gaps and positioning opportunities. Then we build a content strategy grounded in what your audience actually wants — and paid media plans that amplify the content that's already working organically.",
    deliverables: [
      { title: "Social media strategy",          desc: "Platform selection, content pillars, posting cadence, and tone-of-voice guidelines built around your audience." },
      { title: "Content creation & calendars",   desc: "Monthly content production — copy, graphics, short-form video — planned and scheduled in advance." },
      { title: "Paid social campaigns",          desc: "Meta, TikTok, and LinkedIn ad campaigns with audience targeting, creative testing, and budget optimisation." },
      { title: "Community management",           desc: "Active engagement with your audience — comments, DMs, and community building handled consistently." },
      { title: "Monthly performance reporting",  desc: "Clear, honest reports on reach, engagement, follower growth, and — most importantly — attributed revenue." },
    ],
    stack:       ["Meta Ads Manager", "TikTok Ads", "LinkedIn Ads", "Canva Pro", "CapCut", "Hootsuite", "GA4"],
    metric:      "6.4×",
    metricLabel: "Average ROAS on paid social",
    metricSub:   "across active campaigns managed by VeilCode",
    classes: {
      accent:      "text-svc-social",
      dimBg:       "bg-svc-social-dim",
      border:      "border-svc-social-border",
      glow:        "shadow-[0_0_60px_var(--color-svc-social-dim)]",
      stackBg:     "bg-svc-social-dim",
      stackBorder: "border-svc-social-border",
      metricText:  "text-svc-social",
      divider:     "bg-svc-social",
    },
  },
  {
    id:      "ai-automation",
    number:  "05",
    icon:    "⬢",
    title:   "AI Automation",
    tagline: "Intelligent Workflows",
    intro:   "AI is not a feature — it's an operating model shift. We identify the processes in your business where intelligent automation creates the highest leverage, then we build and integrate the systems that run them.",
    challenge: "Most businesses are sitting on massive automation opportunities — manual data entry, repetitive reporting, document processing, customer triage — that eat hours of skilled time every week. The tools to automate these now exist, but most teams don't have the engineering depth to implement them safely and reliably.",
    approach:  "We run a structured automation audit to find your highest-ROI opportunities, then we build sequentially — starting with the changes that deliver the fastest payback. Every system we build is explainable, auditable, and handed over with full documentation.",
    deliverables: [
      { title: "Automation opportunity audit",   desc: "A structured review of your workflows to identify and rank automation opportunities by ROI and implementation effort." },
      { title: "LLM integration & custom agents", desc: "Custom AI agents built with OpenAI, Anthropic, or open-source models — integrated into your existing tools and workflows." },
      { title: "Document & data processing",     desc: "Intelligent pipelines that read, classify, extract, and route information from documents, emails, and forms automatically." },
      { title: "Workflow automation",             desc: "n8n, Zapier, or custom-built orchestration connecting your tools into automated sequences that run without human intervention." },
      { title: "Monitoring & observability",     desc: "Dashboards and alerting so you can see what your automations are doing — and catch issues before they become problems." },
    ],
    stack:       ["OpenAI API", "Anthropic Claude", "LangChain", "LangGraph", "Python", "FastAPI", "n8n", "Supabase"],
    metric:      "80%",
    metricLabel: "Average task automation rate",
    metricSub:   "achieved for clients in our AI Automation practice",
    classes: {
      accent:      "text-svc-ai",
      dimBg:       "bg-svc-ai-dim",
      border:      "border-svc-ai-border",
      glow:        "shadow-[0_0_60px_var(--color-svc-ai-dim)]",
      stackBg:     "bg-svc-ai-dim",
      stackBorder: "border-svc-ai-border",
      metricText:  "text-svc-ai",
      divider:     "bg-svc-ai",
    },
  },
];

export const PHASES = [
  {
    num:   "01",
    title: "Discovery Call",
    dur:   "Day 1",
    desc:  "A focused 45-minute session to understand your goals, constraints, timeline, and budget. No sales pitch — just honest conversation about whether and how we can help.",
    icon:  "◇",
  },
  {
    num:   "02",
    title: "Proposal & Scoping",
    dur:   "Days 2–5",
    desc:  "We produce a detailed project proposal: scope, phasing, tech approach, timeline, and fixed-price investment. You know exactly what you're getting before signing anything.",
    icon:  "◈",
  },
  {
    num:   "03",
    title: "Design & Architecture",
    dur:   "Week 1–2",
    desc:  "We design and prototype before building. UI designs, system architecture diagrams, and data models are all reviewed and approved by you before development begins.",
    icon:  "◎",
  },
  {
    num:   "04",
    title: "Build & Review",
    dur:   "Weeks 2–N",
    desc:  "Iterative development in two-week sprints. You have access to a live staging environment throughout and a dedicated Slack channel for real-time communication.",
    icon:  "◉",
  },
  {
    num:   "05",
    title: "QA & Handover",
    dur:   "Final week",
    desc:  "Thorough testing across devices, browsers, and edge cases. Full handover documentation, team training, and a structured knowledge transfer so your team is self-sufficient.",
    icon:  "⬡",
  },
  {
    num:   "06",
    title: "Launch & Support",
    dur:   "Ongoing",
    desc:  "Deployment support, 30-day post-launch monitoring, and a clear escalation path if anything needs attention. Optional retainer for ongoing development and optimisation.",
    icon:  "⬢",
  },
] as const;

// services 
export const TIERS: PricingTier[] = [
  {
    name:     "Starter",
    badge:    null,
    price:    "From $2,500",
    priceSub: "one-time project",
    desc:     "For early-stage startups and small businesses that need a professional digital presence without the enterprise price tag.",
    features: [
      "Up to 8-page website or landing page",
      "Mobile-responsive design",
      "Basic CMS integration",
      "On-page SEO setup",
      "GA4 analytics install",
      "30-day post-launch support",
    ],
    cta:      "Start a Starter Project",
    featured: false,
  },
  {
    name:     "Growth",
    badge:    "Most Popular",
    price:    "From $8,000",
    priceSub: "one-time project",
    desc:     "For growing businesses ready to invest in a full-scale digital product — web, mobile, or data — built to perform.",
    features: [
      "Everything in Starter",
      "Custom web app or mobile app",
      "Advanced integrations & APIs",
      "Data analytics dashboard",
      "Performance & security audit",
      "Team training & documentation",
      "60-day post-launch support",
      "Dedicated project manager",
    ],
    cta:      "Start a Growth Project",
    featured: true,
  },
  {
    name:     "Enterprise",
    badge:    null,
    price:    "Custom",
    priceSub: "tailored engagement",
    desc:     "For established businesses with complex requirements — multi-system integrations, AI pipelines, ongoing retainers, or multi-phase digital transformation.",
    features: [
      "Everything in Growth",
      "Multi-service engagement",
      "AI automation implementation",
      "Dedicated engineering team",
      "Monthly retainer options",
      "SLA-backed response times",
      "Quarterly strategy reviews",
      "Priority support & escalation",
    ],
    cta:      "Talk to Us",
    featured: false,
  },
] as const;

export const FAQS = [
  {
    q: "Do you work with clients outside Uganda / East Africa?",
    a: "Absolutely. We work with clients globally — our team is remote-first and we have active clients across Africa, Europe, and North America. Time zone overlap is usually manageable and we're experienced in async-first collaboration.",
  },
  {
    q: "How does fixed-price project billing work?",
    a: "We scope every project in detail before issuing a proposal. Once agreed, the price is fixed — we absorb any overruns on our side. You pay in milestone-based instalments (typically 40% / 40% / 20%) so you're never funding work you haven't seen.",
  },
  {
    q: "How long does a typical project take?",
    a: "A standard website takes 4–8 weeks. A mobile app is typically 8–14 weeks. A data analytics engagement runs 6–12 weeks. AI automation projects vary widely — from 2-week MVPs to 6-month enterprise rollouts. We always give you a timeline in the proposal before you commit.",
  },
  {
    q: "Can you work with our existing in-house team?",
    a: "Yes — and we often prefer it. Embedded collaboration with your internal engineers, designers, or marketers usually produces better outcomes and smoother handoffs. We're flexible about how tightly we integrate with your team.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Every project includes a post-launch support window (30–60 days depending on tier). After that, we offer structured retainer packages for ongoing development, maintenance, and optimisation. We also do thorough knowledge transfer so your team is self-sufficient if you prefer not to retain us.",
  },
  {
    q: "Do you build on top of existing platforms (Shopify, WordPress, etc.)?",
    a: "We can, but our default recommendation is always custom-built on modern frameworks unless a platform solution is clearly the right fit. We'll tell you honestly if Shopify or a similar platform serves your needs better than a custom build — it's not in our interest to over-engineer.",
  },
  {
    q: "How do you handle intellectual property and code ownership?",
    a: "You own everything we build for you — 100%. All source code, design files, and documentation are transferred to you on final payment. We retain no licence or ongoing rights to your product.",
  },
  {
    q: "Can you take on just one service, or do we have to buy a bundle?",
    a: "Each service practice operates independently. You can engage us for just a website, just social media management, or just an automation project — there's no obligation to use multiple services. That said, clients who do use multiple services tend to see better results because of how the practices reinforce each other.",
  },
] as const;


export const MEETING_TYPES = [
  {
    icon:   "◈",
    title:  "Discovery Call",
    dur:    "45 min",
    desc:   "We talk through your project goals, constraints, and budget. No commitment required — just an honest conversation.",
    accent: "text-brand",
    bg:     "bg-brand-dim",
    border: "border-brand-border",
    hoverBorder: "hover:border-brand-border",
    hoverShadow: "hover:shadow-[0_0_28px_var(--color-brand-dim)]",
  },
  {
    icon:   "◎",
    title:  "Technical Deep Dive",
    dur:    "60 min",
    desc:   "For projects with complex technical requirements. We map architecture, integrations, and feasibility together.",
    accent: "text-svc-data",
    bg:     "bg-svc-data-dim",
    border: "border-svc-data-border",
    hoverBorder: "hover:border-svc-data-border",
    hoverShadow: "hover:shadow-[0_0_28px_var(--color-svc-data-dim)]",
  },
  {
    icon:   "⬢",
    title:  "AI Strategy Session",
    dur:    "60 min",
    desc:   "A focused session to map your automation opportunities and identify where AI creates the highest leverage in your business.",
    accent: "text-svc-ai",
    bg:     "bg-svc-ai-dim",
    border: "border-svc-ai-border",
    hoverBorder: "hover:border-svc-ai-border",
    hoverShadow: "hover:shadow-[0_0_28px_var(--color-svc-ai-dim)]",
  },
] as const;
