export type ServiceSlug = "web" | "mobile" | "data" | "social" | "ai";


export const PROJECTS: Project[] = [
  // 01 NEXUS COMMERCE
  {
    slug:         "nexus-commerce",
    service:      "web",
    serviceLabel: "Web Solutions",
    year:         "2024",
    title:        "Nexus Commerce Platform",
    client:       "Nexus Retail Group",
    industry:     "E-Commerce / Retail",
    duration:     "14 weeks",
    team:         "3 engineers, 1 designer",
    summary:
      "A ground-up rebuild of a regional retail group's e-commerce infrastructure — replacing a legacy system that was losing thousands per week in abandoned carts and downtime.",
    challenge:
      "The existing platform couldn't handle peak traffic, had a 68% mobile cart-abandonment rate, and took 12+ seconds to load on 3G connections across East Africa. The codebase was a 7-year-old WordPress install with 40+ plugins, no test coverage, and no deployment pipeline.",
    approach:
      "We started with a two-week discovery sprint: analytics audit, session recordings, and user interviews across three cities. The data pointed clearly to mobile performance and checkout friction as the primary revenue leaks. We rebuilt on Next.js 14 with a headless Shopify backend, implementing incremental static regeneration for product pages, an edge-cached cart API, and a streamlined 2-step checkout flow designed specifically for mobile users on slow connections.",
    outcome:
      "Delivered a Next.js-powered storefront with edge-cached product pages, AI-driven recommendations, and a custom checkout flow. Load time dropped to 1.2s on 3G. Conversion rate tripled within 60 days of launch.",
    metric:      "+312%",
    metricLabel: "Conversion Rate",
    tags:        ["Next.js", "TypeScript", "Stripe", "AI Recommendations", "Vercel"],
    featured:    true,
    results: [
      { metric: "+312%", label: "Conversion rate",        sub: "vs 60 days pre-launch"   },
      { metric: "1.2s",  label: "Load time on 3G",        sub: "down from 12+ seconds"   },
      { metric: "−68%",  label: "Cart abandonment",       sub: "mobile users"            },
      { metric: "99.9%", label: "Uptime post-launch",     sub: "over first 6 months"     },
    ],
    deliverables: [
      { title: "Discovery & analytics audit",    desc: "Full audit of existing platform performance, session recordings, and conversion funnel analysis." },
      { title: "Design system & UI",             desc: "Mobile-first design system with component library, applied across all storefront templates." },
      { title: "Next.js storefront",             desc: "Production-grade headless storefront with ISR, image optimisation, and edge-cached API routes." },
      { title: "Custom checkout flow",           desc: "Two-step mobile-optimised checkout reducing form fields by 60% vs the previous implementation." },
      { title: "AI recommendation engine",       desc: "Collaborative filtering model surfacing personalised product recommendations on PDP and cart pages." },
      { title: "CMS & analytics handover",       desc: "Full Sanity CMS setup, GA4 + heatmap configuration, and team training documentation." },
    ],
    screenshots: [
      { src: "/assets/nexus-project/image-client-1.jpg", alt: "Nexus Commerce homepage — desktop",         caption: "Homepage — desktop view",               size: "wide" },
      { src: "/assets/nexus-project/image-client-2.jpg", alt: "Nexus Commerce product listing page",       caption: "Product listing page",                  size: "half" },
      { src: "/assets/nexus-project/image-1.jpg", alt: "Nexus Commerce product detail page",        caption: "Product detail page",                   size: "half" },
      { src: "/assets/nexus-project/image-2.jpg", alt: "Nexus Commerce mobile checkout flow",       caption: "Mobile checkout — step 1 of 2",         size: "half" },
      { src: "/assets/nexus-project/image-3.jpg", alt: "Nexus Commerce order confirmation screen",  caption: "Order confirmation",                    size: "half" },
      { src: "/assets/nexus-project/image-4.jpg", alt: "Nexus Commerce admin CMS dashboard",        caption: "Sanity CMS — product management",       size: "wide" },
    ],
    testimonial: {
      quote:    "VeilCode didn't just rebuild our website — they rebuilt how we think about our digital channel. The results speak for themselves, but what impressed me most was how precisely they diagnosed the problem before touching a line of code.",
      name:     "James Mwangi",
      role:     "CEO, Nexus Retail Group",
      initials: "JM",
    },
    nextSlug: "flowmetrics-dashboard",
    classes: {
      accent:      "text-svc-web",
      dimBg:       "bg-svc-web-dim",
      border:      "border-svc-web-border",
      hoverBorder: "hover:border-svc-web-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-web-dim)]",
      gradFrom:    "from-svc-web/10",
    },
  },

  // 02 FLOWMETRICS
  {
    slug:         "flowmetrics-dashboard",
    service:      "data",
    serviceLabel: "Data Analytics",
    year:         "2024",
    title:        "FlowMetrics BI Dashboard",
    client:       "FlowMetrics SaaS",
    industry:     "SaaS / Analytics",
    duration:     "10 weeks",
    team:         "2 data engineers, 1 frontend engineer",
    summary:
      "Real-time analytics platform processing 50M+ events per day, replacing a reporting stack that was 36 hours behind and costing the team 3 days per week in manual exports.",
    challenge:
      "Manual reporting across 6 disconnected data sources. The data team was spending 3 days every week pulling CSVs, joining them in Excel, and formatting reports for leadership — all on data that was already 36+ hours stale by the time it arrived.",
    approach:
      "We mapped every data source, designed a star-schema warehouse in BigQuery, and built ELT pipelines in dbt that ingest and transform data on a 15-minute schedule. On top of that, we built a custom React dashboard (replacing Looker for their core use case) with live WebSocket updates, drill-down filtering, and export tooling — all served from a FastAPI backend with Redis caching.",
    outcome:
      "Reports now refresh every 15 minutes. The data team's manual reporting burden dropped to zero. Leadership has a live dashboard they can interrogate without filing a request.",
    metric:      "50M+",
    metricLabel: "Events / Day",
    tags:        ["dbt", "BigQuery", "Looker", "Python", "Airflow"],
    featured:    false,
    results: [
      { metric: "50M+",  label: "Events processed daily", sub: "across all pipelines"       },
      { metric: "15min", label: "Data freshness",          sub: "down from 36+ hours"        },
      { metric: "−100%", label: "Manual report effort",    sub: "data team time reclaimed"   },
      { metric: "6",     label: "Sources unified",         sub: "in single warehouse schema" },
    ],
    deliverables: [
      { title: "Data architecture design",    desc: "Star-schema warehouse design in BigQuery with full data dictionary and lineage documentation." },
      { title: "dbt ELT pipelines",           desc: "Modular dbt models ingesting from Stripe, HubSpot, Postgres, and 3 internal APIs on 15-min cadence." },
      { title: "Custom BI dashboard",         desc: "React + FastAPI dashboard with live updates, drill-down filtering, and scheduled PDF export." },
      { title: "Airflow orchestration",       desc: "Managed Airflow deployment on GCP with alerting, retry logic, and Slack failure notifications." },
      { title: "Governance documentation",   desc: "Data dictionary, access control policy, and runbook for the data team." },
    ],
    screenshots: [
      { src: "/assets/flow-metrics-project/image-1.jpg", alt: "FlowMetrics main analytics dashboard",      caption: "Main KPI dashboard — live view",         size: "wide" },
      { src: "/assets/flow-metrics-project/image-2.jpg", alt: "FlowMetrics revenue breakdown chart",       caption: "Revenue breakdown — drill-down view",    size: "half" },
      { src: "/assets/flow-metrics-project/image-3.jpg", alt: "FlowMetrics pipeline health monitor",       caption: "Pipeline health monitor",                size: "half" },
      { src: "/assets/flow-metrics-project/image-4.jpg", alt: "FlowMetrics data lineage diagram",          caption: "dbt lineage graph",                      size: "wide" },
    ],
    testimonial: {
      quote:    "We went from spending 3 days a week on manual reports to having live data in front of leadership at all times. The VeilCode team understood our data model faster than any vendor we've worked with.",
      name:     "Priya Nair",
      role:     "Head of Data, FlowMetrics",
      initials: "PN",
    },
    nextSlug: "vantage-ai-agents",
    classes: {
      accent:      "text-svc-data",
      dimBg:       "bg-svc-data-dim",
      border:      "border-svc-data-border",
      hoverBorder: "hover:border-svc-data-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-data-dim)]",
      gradFrom:    "from-svc-data/10",
    },
  },

    // 03 VANTAGE AI
  {
    slug:         "vantage-ai-agents",
    service:      "ai",
    serviceLabel: "AI Automation",
    year:         "2024",
    title:        "Vantage AI Agent Suite",
    client:       "Vantage Financial",
    industry:     "Financial Services",
    duration:     "12 weeks",
    team:         "2 AI engineers, 1 backend engineer",
    summary:
      "Custom LLM-powered agent system that automated 80% of a regional financial firm's document processing, compliance checking, and internal reporting workflows.",
    challenge:
      "A team of 6 analysts spending 60% of their time on document triage, data extraction from PDFs, and formatting reports — none of it requiring human judgment. The firm was growing but couldn't hire fast enough to keep up with document volume.",
    approach:
      "We ran a structured automation audit to map every repetitive workflow and rank by ROI. The top three — document ingestion, compliance pre-screening, and report assembly — were built as a multi-agent LangGraph system. Each agent has a defined scope, can call tools (PDF parser, database lookup, email sender), and escalates to a human queue when confidence is below threshold. Every action is logged and auditable.",
    outcome:
      "Deployed to production in 12 weeks. 80% of previously manual tasks now run autonomously. The analyst team shifted entirely to decision-making and client-facing work.",
    metric:      "80%",
    metricLabel: "Tasks Automated",
    tags:        ["LangGraph", "OpenAI", "FastAPI", "Python", "Supabase"],
    featured:    false,
    results: [
      { metric: "80%",    label: "Tasks automated",         sub: "of previously manual workflows" },
      { metric: "6×",     label: "Document throughput",     sub: "same headcount"                 },
      { metric: "< 2min", label: "Avg. processing time",    sub: "down from 25 minutes manual"    },
      { metric: "100%",   label: "Audit trail coverage",    sub: "every agent action logged"      },
    ],
    deliverables: [
      { title: "Automation audit & roadmap",    desc: "Structured review of all workflows ranked by automation ROI and implementation complexity." },
      { title: "Document ingestion agent",      desc: "PDF/email parser + classifier that routes documents to the correct downstream agent automatically." },
      { title: "Compliance pre-screening agent", desc: "LLM agent that checks documents against a configurable compliance rule set and flags exceptions." },
      { title: "Report assembly agent",         desc: "Pulls structured data from the warehouse and assembles formatted reports on a schedule." },
      { title: "Human-in-the-loop queue",       desc: "Escalation interface for low-confidence decisions — analysts review flagged items in a simple web UI." },
      { title: "Observability dashboard",       desc: "Real-time view of agent activity, throughput, error rates, and human escalation volume." },
    ],
    screenshots: [
      { src: "/assets/vantage-ai-suite/image-1.jpg", alt: "Vantage agent orchestration dashboard",     caption: "Agent orchestration — live activity view",  size: "wide" },
      { src: "/assets/vantage-ai-suite/image-2.jpg", alt: "Vantage document ingestion pipeline",       caption: "Document ingestion pipeline",               size: "half" },
      { src: "/assets/vantage-ai-suite/image-3.jpg", alt: "Vantage human review queue",                caption: "Human-in-the-loop review queue",            size: "half" },
      { src: "/assets/vantage-ai-suite/image-4.jpg", alt: "Vantage compliance screening results",      caption: "Compliance pre-screening results",          size: "half" },
      { src: "/assets/vantage-ai-suite/image-1.jpg", alt: "Vantage agent performance metrics",         caption: "Agent performance metrics",                 size: "half" },
    ],
    testimonial: {
      quote:    "The audit alone was worth the engagement. VeilCode identified three workflows we hadn't even considered automating. The agents they built are running in production daily — reliable, auditable, and genuinely transformative for our team.",
      name:     "Claire Ochieng",
      role:     "COO, Vantage Financial",
      initials: "CO",
    },
    nextSlug: "tradepost-mobile",
    classes: {
      accent:      "text-svc-ai",
      dimBg:       "bg-svc-ai-dim",
      border:      "border-svc-ai-border",
      hoverBorder: "hover:border-svc-ai-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-ai-dim)]",
      gradFrom:    "from-svc-ai/10",
    },
  },

  // 04 TRADEPOST 
  {
    slug:         "tradepost-mobile",
    service:      "mobile",
    serviceLabel: "Mobile Applications",
    year:         "2023",
    title:        "TradePost Marketplace App",
    client:       "TradePost Uganda",
    industry:     "Marketplace / Classifieds",
    duration:     "16 weeks",
    team:         "2 mobile engineers, 1 backend engineer, 1 designer",
    summary:
      "A cross-platform mobile marketplace for second-hand goods — built offline-first for low-connectivity markets and launched to 40,000 active users in its first three months.",
    challenge:
      "Target users were on low-end Android devices with intermittent 2G/3G connectivity. Competitor apps were slow, data-heavy, and crashed frequently — leaving a significant gap in the market for something that actually worked reliably.",
    approach:
      "We built the app with React Native and Expo, but the architectural centrepiece was the offline-first sync layer — every listing browse, save, and message is queued locally and synced when connectivity allows. Images are compressed aggressively on-device before upload. The initial APK came in under 2MB.",
    outcome:
      "Rated 4.7★ on the Play Store at launch. 40,000 active users within 90 days. Zero reported crashes in the first month due to offline handling.",
    metric:      "4.7★",
    metricLabel: "Play Store Rating",
    tags:        ["React Native", "Expo", "Offline-First", "Zustand", "Supabase"],
    featured:    false,
    results: [
      { metric: "40K",  label: "Active users",          sub: "within 90 days of launch"   },
      { metric: "4.7★", label: "Play Store rating",     sub: "at launch, sustained"        },
      { metric: "<2MB", label: "Initial download size",  sub: "optimised for low-end devices" },
      { metric: "0",    label: "Crash reports",          sub: "in first 30 days live"       },
    ],
    deliverables: [
      { title: "UX research & flow design",    desc: "User interviews in 3 cities, journey mapping, and lo-fi prototype testing before any code." },
      { title: "React Native app (iOS + Android)", desc: "Single codebase cross-platform app with platform-appropriate UI conventions on both." },
      { title: "Offline-first sync engine",    desc: "Local-first data layer with background sync, conflict resolution, and queue management." },
      { title: "Image compression pipeline",   desc: "On-device compression before upload — reducing bandwidth usage by 80% vs raw camera images." },
      { title: "App Store submission",         desc: "Full Play Store and App Store submission including metadata, screenshots, and review management." },
    ],
    screenshots: [
      { src: "/assets/tradepost-app/image-1.jpg", alt: "TradePost home feed — Android",             caption: "Home feed — Android",                    size: "half" },
      { src: "/assets/tradepost-app/image-2.jpg", alt: "TradePost listing detail page",             caption: "Listing detail view",                    size: "half" },
      { src: "/assets/tradepost-app/image-3.png", alt: "TradePost search and filter screen",        caption: "Search & filter",                        size: "half" },
      { src: "/assets/tradepost-app/image-4.jpg", alt: "TradePost seller profile page",             caption: "Seller profile",                         size: "half" },
    ],
    testimonial: {
      quote:    "They understood our users better than we did after two weeks of research. The offline-first approach wasn't our idea — it was theirs. It's the single most important technical decision in the product.",
      name:     "Samuel Byaruhanga",
      role:     "Founder, TradePost Uganda",
      initials: "SB",
    },
    nextSlug: "brewed-social",
    classes: {
      accent:      "text-svc-mobile",
      dimBg:       "bg-svc-mobile-dim",
      border:      "border-svc-mobile-border",
      hoverBorder: "hover:border-svc-mobile-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-mobile-dim)]",
      gradFrom:    "from-svc-mobile/10",
    },
  },

  // 05 BREWED 
  {
    slug:         "brewed-social",
    service:      "social",
    serviceLabel: "Social Media Marketing",
    year:         "2023",
    title:        "Brewed Coffee Brand Launch",
    client:       "Brewed — Specialty Coffee",
    industry:     "F&B / Consumer Brand",
    duration:     "6 months (ongoing)",
    team:         "1 strategist, 1 content creator, 1 paid media specialist",
    summary:
      "Full social media strategy and execution for a new specialty coffee brand entering a saturated Kampala market — growing from zero to 28,000 engaged followers in 6 months.",
    challenge:
      "Entering a market dominated by established café chains with much larger marketing budgets. Brand awareness was zero. The founder had a compelling product and story but no time to manage channels and no clear sense of who their audience actually was.",
    approach:
      "We started with a 3-week audience and competitor analysis to identify the positioning gap. Brewed's story — single-origin Ugandan beans, direct farmer relationships, precision brewing — was deeply underused. We built a content strategy around origin storytelling and barista craft, posting 5× per week across Instagram and TikTok. Organic content was amplified with targeted Meta ads once we identified the 3 content formats that drove the highest saves and shares.",
    outcome:
      "28,000 followers organically in 6 months. 6.8× ROAS on paid social. The brand is now the most-tagged independent café in Kampala on Instagram.",
    metric:      "6.8×",
    metricLabel: "ROAS Achieved",
    tags:        ["Meta Ads", "Instagram", "TikTok", "Content Strategy", "UGC"],
    featured:    false,
    results: [
      { metric: "28K",  label: "Organic followers",       sub: "in 6 months from zero"        },
      { metric: "6.8×", label: "ROAS on paid social",     sub: "Meta + TikTok campaigns"       },
      { metric: "5×",   label: "Weekly content output",   sub: "across Instagram & TikTok"     },
      { metric: "#1",   label: "Most-tagged indie café",  sub: "Kampala — Instagram"           },
    ],
    deliverables: [
      { title: "Audience & competitor audit", desc: "Deep analysis of the Kampala F&B social landscape and identification of positioning whitespace." },
      { title: "Content strategy & pillars",  desc: "5 content pillars, posting cadence, tone-of-voice guide, and visual identity applied to social." },
      { title: "Monthly content production",  desc: "Full shoot-to-post production: photography, reels, captions, and scheduling — 5× per week." },
      { title: "Paid social campaigns",       desc: "Meta and TikTok ad campaigns with A/B creative testing and weekly budget optimisation." },
      { title: "Monthly performance reports", desc: "Clear reporting on reach, engagement, follower growth, and attributed revenue from paid." },
    ],
    screenshots: [
      { src: "/assets/brewed-coffee-project/image-1.png", alt: "Brewed Instagram profile grid",             caption: "Instagram profile — 6-month grid",       size: "wide" },
      { src: "/assets/brewed-coffee-project/image-2.png", alt: "Brewed top-performing reel screenshot",     caption: "Top-performing reel (380K views)",        size: "half" },
      { src: "/assets/brewed-coffee-project/image-3.png", alt: "Brewed Meta Ads campaign results",          caption: "Meta Ads Manager — campaign results",    size: "half" },
      { src: "/assets/brewed-coffee-project/image-4.png", alt: "Brewed TikTok content performance",         caption: "TikTok analytics overview",              size: "wide" },
    ],
    testimonial: {
      quote:    "I gave them a brand and a product. They gave me a community. Within three months, people were tagging us in posts we had nothing to do with. That's the kind of presence I didn't think was possible on our budget.",
      name:     "Amara Ssali",
      role:     "Founder, Brewed",
      initials: "AS",
    },
    nextSlug: "meridian-web",
    classes: {
      accent:      "text-svc-social",
      dimBg:       "bg-svc-social-dim",
      border:      "border-svc-social-border",
      hoverBorder: "hover:border-svc-social-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-social-dim)]",
      gradFrom:    "from-svc-social/10",
    },
  },

  //  06 MERIDIAN 
  {
    slug:         "meridian-web",
    service:      "web",
    serviceLabel: "Web Solutions",
    year:         "2023",
    title:        "Meridian Law Firm Website",
    client:       "Meridian Advocates",
    industry:     "Legal Services",
    duration:     "8 weeks",
    team:         "1 engineer, 1 designer",
    summary:
      "A premium brand and web presence for a top-tier East African law firm — repositioning them from a generic directory listing to a destination their target clients trust.",
    challenge:
      "The firm was winning work through referrals but losing RFPs to firms with more polished digital presences. Their website was a liability in competitive pitches — generic, slow, and impossible to update without a developer.",
    approach:
      "We led with brand before code — a four-week brand sprint to define positioning, visual language, and messaging hierarchy. The resulting identity (deep navy, warm gold, rigorous typography) was applied to a bespoke Next.js site with a Sanity CMS, attorney profile system, practice area pages, and a gated resource library that doubles as a lead capture tool.",
    outcome:
      "RFP win rate improved 40% in year one. The site now generates 3–5 qualified inbound enquiries per month that previously wouldn't have existed.",
    metric:      "+40%",
    metricLabel: "RFP Win Rate",
    tags:        ["Next.js", "Sanity CMS", "Brand Identity", "Framer Motion"],
    featured:    false,
    results: [
      { metric: "+40%",  label: "RFP win rate",            sub: "year-one improvement"         },
      { metric: "3–5",   label: "Inbound leads / month",   sub: "new channel, previously zero" },
      { metric: "0",     label: "Developer needed",         sub: "to update site content"       },
      { metric: "98",    label: "PageSpeed score",          sub: "mobile — Lighthouse"          },
    ],
    deliverables: [
      { title: "Brand identity system",       desc: "Logo, colour palette, typography system, and usage guidelines applied across print and digital." },
      { title: "Bespoke website design",      desc: "Custom-designed page templates for home, practice areas, attorney profiles, and resources." },
      { title: "Next.js development",         desc: "Production-grade build with Framer Motion page transitions, 98 Lighthouse score, and zero layout shift." },
      { title: "Sanity CMS integration",      desc: "Fully managed content system — attorneys can update profiles, add articles, and publish resources without code." },
      { title: "Gated resource library",      desc: "Lead capture system — visitors download guides in exchange for email, integrated with the firm's CRM." },
    ],
    screenshots: [
      { src: "/assets/meridian-lawfirm-project/image-1.png", alt: "Meridian homepage — desktop",               caption: "Homepage — desktop",                     size: "wide" },
      { src: "/assets/meridian-lawfirm-project/image-2.png", alt: "Meridian practice area page",               caption: "Practice area detail page",              size: "half" },
      { src: "/assets/meridian-lawfirm-project/image-3.png", alt: "Meridian attorney profile page",            caption: "Attorney profile",                       size: "half" },
      { src: "/assets/meridian-lawfirm-project/image-4.png", alt: "Meridian resource library",                 caption: "Gated resource library",                 size: "half" },
      { src: "/assets/meridian-lawfirm-project/image-5.png", alt: "Meridian mobile homepage",                  caption: "Mobile — homepage",                      size: "half" },
    ],
    testimonial: {
      quote:    "Our previous website made us look like a mid-tier firm. The new one makes us look like what we actually are. We've had senior partners at competing firms ask who built it.",
      name:     "David Tumusiime",
      role:     "Managing Partner, Meridian Advocates",
      initials: "DT",
    },
    nextSlug: "agridata-platform",
    classes: {
      accent:      "text-svc-web",
      dimBg:       "bg-svc-web-dim",
      border:      "border-svc-web-border",
      hoverBorder: "hover:border-svc-web-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-web-dim)]",
      gradFrom:    "from-svc-web/10",
    },
  },

  // 07 AGRIDATA
  {
    slug:         "agridata-platform",
    service:      "data",
    serviceLabel: "Data Analytics",
    year:         "2022",
    title:        "AgriData Intelligence Platform",
    client:       "AgriLink East Africa",
    industry:     "Agriculture / NGO",
    duration:     "20 weeks",
    team:         "2 data engineers, 1 mobile engineer, 1 GIS specialist",
    summary:
      "A geospatial analytics platform helping agricultural NGOs track crop yield, weather correlation, and intervention effectiveness across 12,000 smallholder farms.",
    challenge:
      "Field data was collected on paper, digitised manually into Excel, and had typically lost any time-sensitivity by the time it reached analysts. There was no way to track whether interventions (seed distribution, training programmes) were actually improving outcomes.",
    approach:
      "We built two things in parallel: a lightweight mobile data collection app for field officers (offline-first, works on basic Android) and a Python + PostGIS analytics backend that processes submissions, joins them with satellite weather data, and feeds a map-centric Power BI dashboard. The data model was designed specifically for longitudinal outcome tracking.",
    outcome:
      "Intervention targeting accuracy improved 3×. Field officers now submit data in real time rather than batches. Leadership can see crop yield vs weather correlation across the full farm network within hours of data collection.",
    metric:      "3×",
    metricLabel: "Targeting Accuracy",
    tags:        ["Python", "PostGIS", "React", "Power BI", "Mobile Forms"],
    featured:    false,
    results: [
      { metric: "3×",    label: "Targeting accuracy",       sub: "intervention effectiveness" },
      { metric: "12K",   label: "Farms tracked",            sub: "across 4 countries"         },
      { metric: "Real-time", label: "Data submission",     sub: "from offline-first mobile app" },
      { metric: "−90%",  label: "Manual data entry",        sub: "field officer workload"      },
    ],
    deliverables: [
      { title: "Data collection mobile app",  desc: "Offline-first Android app for field officers — forms, GPS tagging, photo capture, background sync." },
      { title: "PostGIS data pipeline",       desc: "Geospatial data pipeline joining farm submissions with satellite weather and soil data." },
      { title: "Longitudinal outcome model",  desc: "Data model designed for tracking intervention outcomes over multiple growing seasons." },
      { title: "Map-centric Power BI dashboard", desc: "Interactive dashboard with farm-level drill-down, yield vs weather overlays, and intervention tracking." },
      { title: "Field officer training",      desc: "In-person training sessions across 3 countries with printed quick-reference guides." },
    ],
    screenshots: [
      { src: "/assets/agridata-project/image-1.jpg", alt: "AgriData map dashboard — farm network view",  caption: "Farm network — map dashboard",           size: "wide" },
      { src: "/assets/agridata-project/image-2.jpg", alt: "AgriData yield vs weather correlation chart",  caption: "Yield vs weather correlation",           size: "half" },
      { src: "/assets/agridata-project/image-3.jpg", alt: "AgriData intervention tracking panel",         caption: "Intervention tracking",                  size: "half" },
      { src: "/assets/agridata-project/image-4.jpg", alt: "AgriData mobile data collection app",          caption: "Field officer mobile app",               size: "wide" },
    ],
    testimonial: {
      quote:    "For the first time, we can actually see whether our interventions are working — and where to focus next season. This platform has fundamentally changed how we allocate resources.",
      name:     "Ruth Atukunda",
      role:     "Director of Programmes, AgriLink East Africa",
      initials: "RA",
    },
    nextSlug: "healthpulse-app",
    classes: {
      accent:      "text-svc-data",
      dimBg:       "bg-svc-data-dim",
      border:      "border-svc-data-border",
      hoverBorder: "hover:border-svc-data-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-data-dim)]",
      gradFrom:    "from-svc-data/10",
    },
  },

  // 08 HEALTHPULSE
  {
    slug:         "healthpulse-app",
    service:      "mobile",
    serviceLabel: "Mobile Applications",
    year:         "2022",
    title:        "HealthPulse Patient App",
    client:       "HealthPulse Clinics",
    industry:     "Healthcare",
    duration:     "18 weeks",
    team:         "2 mobile engineers, 1 backend engineer, 1 designer",
    summary:
      "A patient-facing mobile app for a growing private clinic chain — enabling appointment booking, teleconsultation, prescription tracking, and lab result delivery.",
    challenge:
      "Patients were calling a single phone line to book, often abandoning after 20+ minute waits. No digital record access. Clinic staff were drowning in administrative calls, leaving less time for actual patient care.",
    approach:
      "We designed the app around the three most common patient journeys — booking, teleconsultation, and results retrieval — and ruthlessly cut everything else from v1. Real-time slot availability is pulled from the clinic's existing scheduling system via a REST adapter. Video consultations use WebRTC with a TURN server for reliable connectivity on mobile networks. Lab results are pushed via FCM notifications the moment they're signed off.",
    outcome:
      "Phone booking volume dropped 74% within 60 days. Patient satisfaction scores improved significantly. Clinic staff report spending materially less time on admin calls.",
    metric:      "−74%",
    metricLabel: "Phone Booking Load",
    tags:        ["React Native", "Expo", "WebRTC", "Node.js", "PostgreSQL"],
    featured:    false,
    results: [
      { metric: "−74%", label: "Phone booking volume",    sub: "within 60 days of launch"     },
      { metric: "4.8★", label: "App Store rating",        sub: "iOS & Android combined"        },
      { metric: "< 3s", label: "Avg. booking flow",       sub: "from open to confirmed"        },
      { metric: "100%", label: "Results via push",        sub: "zero manual notification calls" },
    ],
    deliverables: [
      { title: "Patient journey research",    desc: "Interviews with 30 patients and 12 clinic staff to map pain points and prioritise v1 scope." },
      { title: "React Native app (iOS + Android)", desc: "Appointment booking, teleconsultation, prescription history, and lab results in one app." },
      { title: "WebRTC teleconsultation",     desc: "In-app video consultation with TURN server for reliable mobile network performance." },
      { title: "Scheduling system adapter",   desc: "REST API adapter connecting the app to the clinic's existing scheduling software." },
      { title: "Push notification pipeline",  desc: "FCM integration for real-time lab result and appointment reminder notifications." },
    ],
    screenshots: [
      { src: "/assets/health-pulse-app/image-1.jpg", alt: "HealthPulse home screen — iOS",             caption: "Home screen — iOS",                      size: "half" },
      { src: "/assets/health-pulse-app/image-2.jpg", alt: "HealthPulse appointment booking flow",      caption: "Appointment booking flow",               size: "half" },
      { src: "/assets/health-pulse-app/image-3.jpg", alt: "HealthPulse teleconsultation screen",       caption: "In-app video consultation",              size: "half" },
      { src: "/assets/health-pulse-app/image-4.jpg", alt: "HealthPulse lab results view",              caption: "Lab results — push notification + view", size: "half" },
      { src: "/assets/health-pulse-app/image-1.jpg", alt: "HealthPulse prescription history",          caption: "Prescription history",                   size: "wide" },
    ],
    testimonial: {
      quote:    "Our admin team was spending half their day on the phone booking appointments. Now they barely touch it. The app works the way our patients actually behave — that's what makes the difference.",
      name:     "Dr. Josephine Nakamya",
      role:     "Medical Director, HealthPulse Clinics",
      initials: "JN",
    },
    nextSlug: "nexus-commerce",
    classes: {
      accent:      "text-svc-mobile",
      dimBg:       "bg-svc-mobile-dim",
      border:      "border-svc-mobile-border",
      hoverBorder: "hover:border-svc-mobile-border",
      hoverShadow: "hover:shadow-[0_0_40px_var(--color-svc-mobile-dim)]",
      gradFrom:    "from-svc-mobile/10",
    },
  },
];

//  FILTER CONFIG

export type FilterKey = "all" | ServiceSlug;

export interface FilterTab {
  key:   FilterKey;
  label: string;
  classes: {
    active:  string;
    dot:     string;
    dotGlow: string;
  };
}

export const FILTER_TABS: FilterTab[] = [
  { key: "all",    label: "All Work",        classes: { active: "bg-brand-dim border-brand-border text-brand",               dot: "bg-brand",       dotGlow: "shadow-[0_0_6px_var(--color-brand)]"       } },
  { key: "web",    label: "Web Solutions",   classes: { active: "bg-svc-web-dim border-svc-web-border text-svc-web",         dot: "bg-svc-web",     dotGlow: "shadow-[0_0_6px_var(--color-svc-web)]"     } },
  { key: "mobile", label: "Mobile Apps",     classes: { active: "bg-svc-mobile-dim border-svc-mobile-border text-svc-mobile", dot: "bg-svc-mobile",  dotGlow: "shadow-[0_0_6px_var(--color-svc-mobile)]"  } },
  { key: "data",   label: "Data Analytics",  classes: { active: "bg-svc-data-dim border-svc-data-border text-svc-data",      dot: "bg-svc-data",    dotGlow: "shadow-[0_0_6px_var(--color-svc-data)]"    } },
  { key: "social", label: "Social Media",    classes: { active: "bg-svc-social-dim border-svc-social-border text-svc-social", dot: "bg-svc-social",  dotGlow: "shadow-[0_0_6px_var(--color-svc-social)]"  } },
  { key: "ai",     label: "AI Automation",   classes: { active: "bg-svc-ai-dim border-svc-ai-border text-svc-ai",            dot: "bg-svc-ai",      dotGlow: "shadow-[0_0_6px_var(--color-svc-ai)]"      } },
];