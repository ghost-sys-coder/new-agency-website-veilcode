/* ─── TYPES ───────────────────────────────────────────────────────────────── */

export interface BlogAuthor {
  name:     string;
  role:     string;
  initials: string;
  bio:      string;
  linkedin: string;
  twitter:  string;
  /** Accent class for avatar bg — reuses service tokens */
  accent:   string;
  dimBg:    string;
  border:   string;
}

export interface TocEntry {
  id:    string;
  level: 2 | 3;
  text:  string;
}

/** A single content block in the article body */
export type ContentBlock =
  | { type: "h2";       id: string; text: string }
  | { type: "h3";       id: string; text: string }
  | { type: "p";        html: string }
  | { type: "ul";       items: string[] }
  | { type: "ol";       items: string[] }
  | { type: "code";     lang: string; code: string }
  | { type: "callout";  variant: "info" | "warning" | "tip"; html: string }
  | { type: "divider" };

export interface BlogPost {
  slug:        string;
  title:       string;
  excerpt:     string;
  category:    string;
  tags:        string[];
  publishedAt: string; // ISO date string
  readTime:    string;
  author:      BlogAuthor;
  heroAlt:     string;
  /** Set to null until you add a real image at /public/blog/{slug}/hero.jpg */
  heroSrc:     string | null;
  toc:         TocEntry[];
  body:        ContentBlock[];
  relatedSlugs: string[];
  classes: {
    accent:  string;
    dimBg:   string;
    border:  string;
  };
}

/* ─── AUTHORS ─────────────────────────────────────────────────────────────── */

const FRANK: BlogAuthor = {
  name:     "Frank Tamale",
  role:     "Founder & Lead Engineer",
  initials: "DK",
  bio:      "Full-stack engineer with a decade of experience building products that scale. Writes about software architecture, performance engineering, and building digital products in Africa.",
  linkedin: "#",
  twitter:  "#",
  accent:   "text-brand",
  dimBg:    "bg-brand-dim",
  border:   "border-brand-border",
};

const RONALD: BlogAuthor = {
  name:     "Ronald Mugisha",
  role:     "Head of Data & AI",
  initials: "RM",
  bio:      "Data engineer and ML practitioner building analytics systems and AI automation pipelines. Writes about data architecture, LLMs, and practical AI implementation.",
  linkedin: "#",
  twitter:  "#",
  accent:   "text-svc-data",
  dimBg:    "bg-svc-data-dim",
  border:   "border-svc-data-border",
};

const AISHA: BlogAuthor = {
  name:     "Aisha Nakato",
  role:     "Creative Director",
  initials: "AN",
  bio:      "Designer who codes. Writes about design systems, the intersection of brand and product, and building interfaces that feel as good as they perform.",
  linkedin: "#",
  twitter:  "#",
  accent:   "text-svc-mobile",
  dimBg:    "bg-svc-mobile-dim",
  border:   "border-svc-mobile-border",
};

/* ─── POSTS ───────────────────────────────────────────────────────────────── */

export const POSTS: BlogPost[] = [
  /* ── 01 ─────────────────────────────────────────────────────────────────── */
  {
    slug:        "next-js-performance-east-africa",
    title:       "Building Fast Web Apps for Low-Bandwidth Markets",
    excerpt:     "Performance optimisation isn't a nice-to-have when your users are on 3G in Kampala or Nairobi. Here's the exact stack and techniques we use to build sub-2s load times across East Africa.",
    category:    "Engineering",
    tags:        ["Next.js", "Performance", "Web Development", "East Africa"],
    publishedAt: "2024-11-14",
    readTime:    "9 min read",
    author:      FRANK,
    heroSrc:     null,
    heroAlt:     "Code editor showing Next.js configuration with performance annotations",
    relatedSlugs: ["ai-agents-production", "design-systems-scale"],
    classes: { accent: "text-brand", dimBg: "bg-brand-dim", border: "border-brand-border" },
    toc: [
      { id: "the-problem",              level: 2, text: "The Problem with Standard Advice" },
      { id: "baseline-measurements",   level: 2, text: "Start With Baseline Measurements" },
      { id: "image-optimisation",      level: 2, text: "Image Optimisation That Actually Moves the Needle" },
      { id: "js-bundle-strategy",      level: 2, text: "JavaScript Bundle Strategy" },
      { id: "edge-and-caching",        level: 2, text: "Edge Deployment and Caching" },
      { id: "font-loading",            level: 3, text: "Font Loading Without Layout Shift" },
      { id: "measuring-real-users",    level: 2, text: "Measuring Real User Performance" },
      { id: "checklist",               level: 2, text: "The Full Checklist" },
    ],
    body: [
      {
        type: "p",
        html: `Most performance advice is written for a developer in San Francisco on a MacBook connected to gigabit fibre, testing against a CDN node that's 10ms away. That's not your user in Kampala. Their phone is a mid-range Android from 2021, their connection is fluctuating between 3G and 4G, and the nearest CDN node might be 80ms away on a good day.`,
      },
      {
        type: "p",
        html: `We've shipped over 30 web products in East African markets. Here's what we've learned — often the hard way — about building web apps that feel fast for those users.`,
      },
      { type: "h2", id: "the-problem", text: "The Problem with Standard Advice" },
      {
        type: "p",
        html: `The standard Next.js performance tutorial will tell you to use <code>next/image</code>, enable ISR, and deploy to Vercel. That's all correct and you should do it. But it's the floor, not the ceiling. When we profiled a client's site against real users in Nairobi, we found that following all the standard recommendations still left us with a 4.8s LCP on a median device. We needed to get it under 2s.`,
      },
      {
        type: "callout",
        variant: "info",
        html: `<strong>LCP target:</strong> Aim for under 2.5s on a simulated mid-range Android (Moto G4 class) throttled to "Fast 3G" in Chrome DevTools. That's the baseline test environment we use for every East African deployment.`,
      },
      { type: "h2", id: "baseline-measurements", text: "Start With Baseline Measurements" },
      {
        type: "p",
        html: `Before touching a single line of code, instrument your actual user population. Google Analytics 4's Core Web Vitals report and Chrome UX Report (CrUX) will tell you the 75th percentile LCP, CLS, and INP for your real traffic — not your local machine. The numbers are almost always worse than you expect.`,
      },
      {
        type: "code",
        lang: "bash",
        code: `# Pull CrUX data for your domain using the PageSpeed Insights API
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed\\
?url=https://yoursite.com\\
&strategy=mobile\\
&key=YOUR_API_KEY" | jq '.loadingExperience.metrics'`,
      },
      { type: "h2", id: "image-optimisation", text: "Image Optimisation That Actually Moves the Needle" },
      {
        type: "p",
        html: `<code>next/image</code> handles WebP conversion and lazy loading. That's table stakes. What it won't do for you is enforce disciplined <code>sizes</code> attributes — and without them, Next.js will serve a 1200px image to a 390px phone screen.`,
      },
      {
        type: "code",
        lang: "tsx",
        code: `// ❌ This serves a massive image to mobile users
<Image src={hero} alt="Hero" fill />

// ✅ Tells the browser exactly what size to request at each breakpoint
<Image
  src={hero}
  alt="Hero"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  priority  // only for above-the-fold images
/>`,
      },
      {
        type: "p",
        html: `Beyond <code>sizes</code>, we pre-generate AVIF variants for hero images. AVIF averages 40–50% smaller than WebP for photographic content. The Next.js config is one line:`,
      },
      {
        type: "code",
        lang: "js",
        code: `// next.config.js
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"], // AVIF first, WebP fallback
    deviceSizes: [390, 640, 828, 1080, 1200], // match real device widths
    minimumCacheTTL: 60 * 60 * 24 * 30,       // 30-day CDN cache
  },
};`,
      },
      { type: "h2", id: "js-bundle-strategy", text: "JavaScript Bundle Strategy" },
      {
        type: "p",
        html: `JavaScript parse time on a mid-range Android is 3–5× slower than a modern laptop. Every kilobyte of JS you send costs more than you think. Our rules:`,
      },
      {
        type: "ul",
        items: [
          "Audit with <code>@next/bundle-analyzer</code> on every major dependency addition",
          "Never import an entire utility library — use specific imports (<code>import { format } from 'date-fns'</code> not <code>import * as dateFns</code>)",
          "Use <code>next/dynamic</code> with <code>ssr: false</code> for any component that's below the fold or interaction-triggered",
          "Replace <code>moment.js</code> with <code>date-fns</code> (saves ~65KB gzipped)",
          "Replace <code>lodash</code> with native equivalents or cherry-picked imports",
        ],
      },
      {
        type: "code",
        lang: "tsx",
        code: `// Lazy-load heavy components — they don't block the initial render
import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("@/components/HeavyChart"), {
  ssr:     false,
  loading: () => <div className="h-64 animate-pulse bg-surface-hi rounded-xl" />,
});`,
      },
      { type: "h2", id: "edge-and-caching", text: "Edge Deployment and Caching" },
      {
        type: "p",
        html: `Vercel's Edge Network has nodes in Johannesburg and a growing presence in West Africa. For East African users, this means your ISR-cached pages can be served from a node that's 30–40ms away rather than Frankfurt or US-East. The configuration for aggressive edge caching looks like this:`,
      },
      {
        type: "code",
        lang: "tsx",
        code: `// app/products/[slug]/page.tsx
export const revalidate = 3600; // revalidate at most every hour

export async function generateStaticParams() {
  const products = await getTopProducts(200); // pre-build top 200
  return products.map((p) => ({ slug: p.slug }));
}

// Headers that tell Vercel's edge to cache aggressively
export async function generateMetadata() {
  return {
    other: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" },
  };
}`,
      },
      { type: "h3", id: "font-loading", text: "Font Loading Without Layout Shift" },
      {
        type: "p",
        html: `Custom fonts are a common source of CLS. The right pattern with Next.js is to use <code>next/font</code> with <code>display: 'swap'</code> and <code>preload: true</code>, and to declare font variables on <code>:root</code> rather than injecting them into <code>body</code> directly.`,
      },
      {
        type: "code",
        lang: "tsx",
        code: `// app/layout.tsx
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  subsets:  ["latin"],
  variable: "--font-display",
  display:  "swap",
  preload:  true,
  weight:   ["400", "700", "800"],
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-sans",
  display:  "swap",
  weight:   ["300", "400", "500"],
});

export default function RootLayout({ children }) {
  return (
    <html className={\`\${syne.variable} \${dmSans.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`,
      },
      { type: "h2", id: "measuring-real-users", text: "Measuring Real User Performance" },
      {
        type: "p",
        html: `Synthetic testing (Lighthouse, PageSpeed Insights) is useful for catching regressions in CI. But the number that matters is your real user p75 LCP from CrUX. Set up a monthly alert using the CrUX API if it crosses your threshold. We use this snippet in a GitHub Action that runs weekly:`,
      },
      {
        type: "callout",
        variant: "tip",
        html: `<strong>Tip:</strong> The CrUX dashboard in Google Search Console is the easiest way to monitor your real-user Core Web Vitals without any code changes. Check it before and after any significant deployment.`,
      },
      { type: "h2", id: "checklist", text: "The Full Checklist" },
      {
        type: "ol",
        items: [
          "Set correct <code>sizes</code> on every <code>next/image</code> component",
          "Enable AVIF in <code>next.config.js</code> image formats",
          "Audit bundle size with <code>@next/bundle-analyzer</code> — target &lt;150KB first load JS",
          "Lazy-load all below-the-fold components with <code>next/dynamic</code>",
          "Use <code>next/font</code> with <code>display: swap</code> for all custom fonts",
          "Configure ISR on all content pages with a sensible revalidate window",
          "Deploy to a region with African CDN coverage (Vercel, Cloudflare, or AWS af-south-1)",
          "Test on a real Android device throttled to Fast 3G — not Lighthouse mobile simulation",
          "Monitor real user p75 LCP monthly via CrUX API",
        ],
      },
      {
        type: "p",
        html: `None of these steps are individually heroic. It's the combination that gets you from a 4.8s LCP to a 1.4s LCP. Build the discipline into your process from the start and you won't be retrofitting it under deadline pressure.`,
      },
    ],
  },

  /* ── 02 ─────────────────────────────────────────────────────────────────── */
  {
    slug:        "ai-agents-production",
    title:       "Shipping AI Agents to Production: What Nobody Tells You",
    excerpt:     "Building an LLM prototype takes an afternoon. Getting it to production takes months. After shipping 6 agent systems this year, here's the gap between the demo and reality.",
    category:    "AI & Automation",
    tags:        ["AI", "LangChain", "LangGraph", "Production", "Architecture"],
    publishedAt: "2024-10-02",
    readTime:    "12 min read",
    author:      RONALD,
    heroSrc:     null,
    heroAlt:     "Diagram showing a multi-agent LLM workflow with human escalation paths",
    relatedSlugs: ["next-js-performance-east-africa", "design-systems-scale"],
    classes: { accent: "text-svc-data", dimBg: "bg-svc-data-dim", border: "border-svc-data-border" },
    toc: [
      { id: "the-demo-gap",            level: 2, text: "The Demo-to-Production Gap" },
      { id: "reliability",             level: 2, text: "Reliability Is Not Optional" },
      { id: "prompt-versioning",       level: 2, text: "Prompt Versioning and Testing" },
      { id: "human-in-the-loop",       level: 2, text: "Human-in-the-Loop Is an Architecture Decision" },
      { id: "observability",           level: 2, text: "Observability for Agents" },
      { id: "cost-management",         level: 3, text: "Managing Token Costs at Scale" },
      { id: "when-not-to-use-agents",  level: 2, text: "When Not to Use Agents" },
    ],
    body: [
      {
        type: "p",
        html: `Everyone can build an LLM prototype that impresses in a demo. You give it a prompt, it produces a plausible output, stakeholders are excited. Then you try to put it in production and everything falls apart. This post is about the gap between those two states — and how to close it.`,
      },
      { type: "h2", id: "the-demo-gap", text: "The Demo-to-Production Gap" },
      {
        type: "p",
        html: `In a demo, you hand-pick the inputs. In production, users send inputs you never imagined. The LLM's job is to handle all of them gracefully — and when it can't, your system's job is to fail safely. Most prototype architectures have no concept of graceful failure.`,
      },
      {
        type: "callout",
        variant: "warning",
        html: `<strong>The hard truth:</strong> An agent that works 95% of the time is not a production-ready agent. It's a demo that occasionally fails in front of real users. Production means 99.5%+ success rates with observable, recoverable failures.`,
      },
      { type: "h2", id: "reliability", text: "Reliability Is Not Optional" },
      {
        type: "p",
        html: `The first thing we add to every production agent system is structured retry logic with exponential backoff. LLM APIs have rate limits and occasionally return malformed JSON. If you're not handling both, your agent will fail silently in ways that are very hard to debug.`,
      },
      {
        type: "code",
        lang: "python",
        code: `import asyncio
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    reraise=True,
)
async def call_llm_with_retry(messages: list[dict]) -> str:
    response = await openai_client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        response_format={"type": "json_object"},
        timeout=30,
    )
    return response.choices[0].message.content`,
      },
      { type: "h2", id: "prompt-versioning", text: "Prompt Versioning and Testing" },
      {
        type: "p",
        html: `Prompts are code. They need to be version-controlled, reviewed, and tested before shipping. We store every prompt in a dedicated <code>prompts/</code> directory with a version suffix, and we maintain a golden dataset of input/output pairs that we run on every prompt change.`,
      },
      {
        type: "ul",
        items: [
          "Store prompts as typed constants in a dedicated module — never inline strings",
          "Build a golden test dataset of 20–50 representative inputs per agent",
          "Run evals against the golden set on every prompt PR — reject if pass rate drops",
          "Use structured output (JSON mode or tool calling) rather than free-text parsing",
          "Log every prompt + completion pair to a database for analysis and fine-tuning",
        ],
      },
      { type: "h2", id: "human-in-the-loop", text: "Human-in-the-Loop Is an Architecture Decision" },
      {
        type: "p",
        html: `Every production agent system we've shipped has a human escalation path. Not because we don't trust the LLM — but because there will always be a class of inputs where the right answer is "a human needs to make this call". The architecture question is not <em>whether</em> to build this, but <em>where</em> in the flow to put it.`,
      },
      {
        type: "code",
        lang: "python",
        code: `from langgraph.graph import StateGraph, END
from typing import TypedDict, Literal

class AgentState(TypedDict):
    document:   str
    confidence: float
    result:     str | None
    escalated:  bool

def should_escalate(state: AgentState) -> Literal["escalate", "complete"]:
    """Route to human queue if confidence below threshold."""
    return "escalate" if state["confidence"] < 0.85 else "complete"

graph = StateGraph(AgentState)
graph.add_node("process",  process_document)
graph.add_node("escalate", route_to_human_queue)
graph.add_node("complete", mark_complete)

graph.add_conditional_edges("process", should_escalate)`,
      },
      { type: "h2", id: "observability", text: "Observability for Agents" },
      {
        type: "p",
        html: `You cannot debug what you cannot observe. Every agent invocation should emit structured logs with: the input hash, model used, token counts, latency, confidence score, and whether it was escalated. We use a simple Postgres table for this — not a fancy LLMOps platform — because SQL gives us full flexibility to query and aggregate.`,
      },
      { type: "h3", id: "cost-management", text: "Managing Token Costs at Scale" },
      {
        type: "p",
        html: `Token costs are invisible until they're not. A document processing agent that handles 10 documents a day in testing might need to handle 10,000 a day in production. At that scale, the difference between a 2,000-token and 4,000-token prompt is significant. Instrument token usage from day one.`,
      },
      {
        type: "callout",
        variant: "tip",
        html: `<strong>Cost pattern:</strong> Cache LLM responses for identical or near-identical inputs using a semantic similarity hash. For document classification tasks, we typically see 30–40% cache hit rates — effectively cutting costs by a third with no accuracy loss.`,
      },
      { type: "h2", id: "when-not-to-use-agents", text: "When Not to Use Agents" },
      {
        type: "p",
        html: `Not every automation problem needs an LLM. If the logic can be expressed as rules, use rules. If the data is structured, use a database query. LLMs add latency, cost, and non-determinism. They earn their place when the task genuinely requires language understanding or judgment — not just pattern matching.`,
      },
      {
        type: "ul",
        items: [
          "<strong>Use an LLM</strong> when the input is unstructured and the output requires interpretation",
          "<strong>Use rules</strong> when the logic is deterministic and the inputs are constrained",
          "<strong>Use both</strong> when you need LLM understanding feeding into deterministic downstream processing",
        ],
      },
    ],
  },

  /* ── 03 ─────────────────────────────────────────────────────────────────── */
  {
    slug:        "design-systems-scale",
    title:       "Design Systems That Don't Become a Burden",
    excerpt:     "Most design systems start as a solution and end up as a problem. Here's how we build component libraries that teams actually want to use — and keep using.",
    category:    "Design",
    tags:        ["Design Systems", "Tailwind CSS", "React", "Component Design"],
    publishedAt: "2024-08-19",
    readTime:    "8 min read",
    author:      AISHA,
    heroSrc:     null,
    heroAlt:     "Figma file showing a component library with tokens, variants, and documentation",
    relatedSlugs: ["next-js-performance-east-africa", "ai-agents-production"],
    classes: { accent: "text-svc-mobile", dimBg: "bg-svc-mobile-dim", border: "border-svc-mobile-border" },
    toc: [
      { id: "why-they-fail",           level: 2, text: "Why Most Design Systems Fail" },
      { id: "tokens-first",            level: 2, text: "Start With Tokens, Not Components" },
      { id: "component-api-design",    level: 2, text: "Component API Design" },
      { id: "documentation",           level: 2, text: "Documentation That Gets Read" },
      { id: "governance",              level: 3, text: "Governance Without Bureaucracy" },
      { id: "tailwind-approach",       level: 2, text: "Our Tailwind Approach" },
      { id: "measuring-adoption",      level: 2, text: "Measuring Adoption" },
    ],
    body: [
      {
        type: "p",
        html: `The graveyard of enterprise software is full of design systems that were built with good intentions and abandoned within 18 months. The teams that built them are still proud of the Storybook. The teams that were supposed to use them went back to building their own buttons.`,
      },
      {
        type: "p",
        html: `We've designed component libraries for 8 clients over the past 3 years. Here's what separates the ones that get adopted from the ones that get abandoned.`,
      },
      { type: "h2", id: "why-they-fail", text: "Why Most Design Systems Fail" },
      {
        type: "p",
        html: `Design systems fail for one of three reasons: they're built by designers who don't consider developer experience, they're built by engineers who don't consider design intent, or they're built for the system rather than for the product. The common thread is that they optimise for the wrong audience.`,
      },
      {
        type: "callout",
        variant: "info",
        html: `<strong>The adoption test:</strong> A component should be faster to use from the system than to build from scratch. If it isn't — if the API is confusing, the documentation is missing, or the customisation model is inflexible — developers will build their own. Every time.`,
      },
      { type: "h2", id: "tokens-first", text: "Start With Tokens, Not Components" },
      {
        type: "p",
        html: `The biggest mistake teams make is jumping straight to building buttons and cards. Tokens — colour, spacing, typography, shadow — are the foundation everything else inherits from. If you get tokens wrong, every component built on top of them carries the mistake.`,
      },
      {
        type: "code",
        lang: "css",
        code: `/* Good token architecture — semantic, not literal */
@theme {
  /* Semantic colour tokens */
  --color-base:      #080A0F;  /* page background */
  --color-surface:   #0D1117;  /* card background  */
  --color-ink:       #F0F4F8;  /* primary text     */
  --color-ink-muted: #8A9BB0;  /* secondary text   */
  --color-brand:     #00E5FF;  /* primary accent   */

  /* Spacing scale — consistent rhythm */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 40px;
}`,
      },
      { type: "h2", id: "component-api-design", text: "Component API Design" },
      {
        type: "p",
        html: `The API of a component is a contract. Once teams are using it in production, changing it is expensive. Spend time on API design before writing implementation. The questions to answer are: What are the required props? What are the optional ones? What are the escape hatches?`,
      },
      {
        type: "ul",
        items: [
          "Prefer composition over configuration — <code>&lt;Button&gt;</code> with <code>&lt;ButtonIcon&gt;</code> beats a single component with 12 boolean props",
          "Always include a <code>className</code> override — never trap consumers inside your styles",
          "Use TypeScript discriminated unions for variant props — prevents invalid state at compile time",
          "Export both the component and its props type — consumers need to extend them",
        ],
      },
      {
        type: "code",
        lang: "tsx",
        code: `// ❌ Too many boolean props — combinatorial explosion
<Button primary disabled large iconLeft="arrow" iconRight="chevron" />

// ✅ Variant-based with composition for icons
<Button variant="primary" size="lg">
  <ButtonIcon icon={ArrowIcon} placement="left" />
  Continue
</Button>`,
      },
      { type: "h2", id: "documentation",  text: "Documentation That Gets Read" },
      {
        type: "p",
        html: `Documentation that isn't read is worse than no documentation — it creates a false sense that the system is self-explanatory. The only documentation that gets read is documentation that's <em>in context</em>: in the IDE via TypeScript types, in the component file via JSDoc, and in examples that show real usage patterns rather than synthetic demos.`,
      },
      { type: "h3", id: "governance", text: "Governance Without Bureaucracy" },
      {
        type: "p",
        html: `Every design system needs a process for proposing new components and changing existing ones. But most governance processes are too heavy — they require RFCs, design reviews, and approval chains that take weeks. The result is that teams bypass the process and build locally.`,
      },
      {
        type: "callout",
        variant: "tip",
        html: `<strong>Lightweight governance:</strong> A shared Slack channel, a 48-hour RFC period on a PR, and a named component owner who reviews within one business day. That's all the process you need for teams under 20 engineers.`,
      },
      { type: "h2", id: "tailwind-approach", text: "Our Tailwind Approach" },
      {
        type: "p",
        html: `We use Tailwind v4 with a custom theme layer for all our client component libraries. The key insight is that Tailwind's utility classes are the implementation detail, not the API. The API is your component props. Consumers shouldn't need to know what Tailwind classes your Button uses internally.`,
      },
      {
        type: "code",
        lang: "tsx",
        code: `// The component consumer sees this
<PrimaryButton onClick={handleSubmit}>
  Save Changes
</PrimaryButton>

// The implementation detail (invisible to consumers)
function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={\`px-7 py-3.5 rounded-md border border-brand text-brand
        hover:bg-brand hover:text-base transition-all duration-200
        focus-visible:ring-2 focus-visible:ring-brand \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
      },
      { type: "h2", id: "measuring-adoption", text: "Measuring Adoption" },
      {
        type: "p",
        html: `A design system that isn't used is a failure, regardless of how well it's designed. Track adoption by running a codebase grep for your component imports monthly. The ratio of system components to locally-created components tells you whether teams trust the system. If that ratio is declining, investigate why before adding new components.`,
      },
      {
        type: "ol",
        items: [
          "Count component imports from the system vs local components monthly",
          "Track time-to-first-use for new developers (should be &lt;1 day)",
          "Survey teams quarterly on what's missing and what's painful",
          "Treat declining adoption as a P1 — it means the system is drifting from product needs",
        ],
      },
    ],
  },
];

/* ─── HELPERS ─────────────────────────────────────────────────────────────── */

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => POSTS.find((p) => p.slug === s))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 2);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  });
}

export function getAllCategories(): string[] {
  return Array.from(new Set(POSTS.map((p) => p.category))).sort();
}

export function getAllTags(): string[] {
  return Array.from(new Set(POSTS.flatMap((p) => p.tags))).sort();
}

export function getPostsByCategory(category: string): BlogPost[] {
  return POSTS.filter((p) => p.category === category);
}

export function getFeaturedPost(): BlogPost {
  return POSTS[0];
}

export function getRecentPosts(exclude?: string, limit = 20): BlogPost[] {
  return POSTS
    .filter((p) => p.slug !== exclude)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}