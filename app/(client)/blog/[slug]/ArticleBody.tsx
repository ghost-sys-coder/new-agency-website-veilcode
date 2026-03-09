"use client";

import { type ContentBlock } from "@/constants/blog";

/* ─── SYNTAX HIGHLIGHT ────────────────────────────────────────────────────── */
/* Lightweight tokeniser — no external dep. Covers the languages we use:
   tsx, ts, js, python, css, bash.
   Produces <span> elements with inline colour classes.               */

const LANG_LABELS: Record<string, string> = {
  tsx:    "TSX",
  ts:     "TypeScript",
  js:     "JavaScript",
  jsx:    "JSX",
  python: "Python",
  py:     "Python",
  css:    "CSS",
  bash:   "Bash",
  sh:     "Shell",
};

/** Very small tokeniser for display-only syntax colouring */
function tokenise(code: string, lang: string): string {
  // Escape HTML first
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const isPython = lang === "python" || lang === "py";
  const isCSS    = lang === "css";
  const isBash   = lang === "bash" || lang === "sh";

  // Comments
  if (isBash) {
    html = html.replace(/(#[^\n]*)/g, `<span class="text-ink-faint italic">$1</span>`);
  } else if (isCSS) {
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g, `<span class="text-ink-faint italic">$1</span>`);
  } else {
    html = html.replace(/(\/\/[^\n]*)/g,        `<span class="text-ink-faint italic">$1</span>`);
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g,  `<span class="text-ink-faint italic">$1</span>`);
  }

  // Strings
  html = html.replace(/("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`|'(?:[^'\\]|\\.)*')/g,
    `<span class="text-svc-data">$1</span>`);

  // Numbers
  html = html.replace(/\b(\d+(?:\.\d+)?)\b/g,
    `<span class="text-svc-social">$1</span>`);

  // Keywords
  const jsKeywords = /\b(import|export|from|const|let|var|function|async|await|return|default|type|interface|class|extends|implements|new|if|else|for|while|of|in|true|false|null|undefined|void|typeof|keyof|as|satisfies)\b/g;
  const pyKeywords = /\b(def|class|import|from|return|if|elif|else|for|while|in|not|and|or|True|False|None|async|await|with|as|raise|try|except|finally|pass|yield|lambda)\b/g;

  if (isPython) {
    html = html.replace(pyKeywords, `<span class="text-svc-mobile">$1</span>`);
  } else {
    html = html.replace(jsKeywords, `<span class="text-svc-mobile">$1</span>`);
  }

  // Function/method calls  name(
  html = html.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()/g,
    `<span class="text-brand">$1</span>`);

  // CSS properties
  if (isCSS) {
    html = html.replace(/(--[a-zA-Z0-9-]+)/g, `<span class="text-svc-ai">$1</span>`);
    html = html.replace(/([a-zA-Z-]+)(?=\s*:)/g, `<span class="text-svc-mobile">$1</span>`);
  }

  // Decorators / annotations  @something
  html = html.replace(/(@[a-zA-Z_][a-zA-Z0-9_]*)/g,
    `<span class="text-svc-ai">$1</span>`);

  return html;
}

/* ─── CODE BLOCK ──────────────────────────────────────────────────────────── */

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const label     = LANG_LABELS[lang] ?? lang.toUpperCase();
  const tokenised = tokenise(code, lang);

  return (
    <div className="group relative my-6 rounded-xl overflow-hidden
      border border-line bg-surface">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3
        border-b border-line bg-surface-hi">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5" aria-hidden>
          {["bg-red-500/40", "bg-svc-social/40", "bg-svc-data/40"].map((c) => (
            <div key={c} className={`size-2.5 rounded-full ${c}`} />
          ))}
        </div>
        {/* Language label */}
        <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
          {label}
        </span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-[1.75]
        font-mono scrollbar-thin">
        <code
          /* Safe — we escape HTML before tokenising */
          dangerouslySetInnerHTML={{ __html: tokenised }}
        />
      </pre>
    </div>
  );
}

/* ─── CALLOUT ─────────────────────────────────────────────────────────────── */

const CALLOUT_STYLES = {
  info: {
    border: "border-brand-border",
    bg:     "bg-brand-dim",
    dot:    "bg-brand",
    icon:   "ℹ",
    label:  "Info",
    text:   "text-brand",
  },
  warning: {
    border: "border-svc-social-border",
    bg:     "bg-svc-social-dim",
    dot:    "bg-svc-social",
    icon:   "⚠",
    label:  "Note",
    text:   "text-svc-social",
  },
  tip: {
    border: "border-svc-data-border",
    bg:     "bg-svc-data-dim",
    dot:    "bg-svc-data",
    icon:   "◎",
    label:  "Tip",
    text:   "text-svc-data",
  },
} as const;

function Callout({ variant, html }: { variant: "info" | "warning" | "tip"; html: string }) {
  const s = CALLOUT_STYLES[variant];
  return (
    <div className={`my-6 rounded-xl border p-5 ${s.border} ${s.bg}`}>
      <div className="flex items-start gap-3">
        <span className={`text-base leading-none mt-0.5 ${s.text}`} aria-hidden>
          {s.icon}
        </span>
        <p
          className="font-sans text-sm text-ink-muted leading-relaxed
            [&_code]:font-mono [&_code]:text-[12px] [&_code]:text-brand
            [&_code]:bg-brand-dim [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
            [&_strong]:font-semibold [&_strong]:text-ink"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

/* ─── ARTICLE BODY ────────────────────────────────────────────────────────── */

const proseInline =
  "[&_code]:font-mono [&_code]:text-[13px] [&_code]:text-brand " +
  "[&_code]:bg-brand-dim [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded " +
  "[&_strong]:font-semibold [&_strong]:text-ink " +
  "[&_em]:italic [&_em]:text-ink-muted " +
  "[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 " +
  "[&_a:hover]:text-brand/80";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="min-w-0">
      {blocks.map((block, i) => {
        switch (block.type) {

          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="font-display text-[clamp(20px,2.5vw,28px)] font-bold
                  tracking-tight text-ink mt-12 mb-4 scroll-mt-28"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="font-display text-[18px] font-bold tracking-tight
                  text-ink mt-8 mb-3 scroll-mt-28"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={i}
                className={`font-sans text-[16px] font-light text-ink-muted
                  leading-[1.9] mb-5 ${proseInline}`}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );

          case "ul":
            return (
              <ul key={i} className="mb-5 space-y-2 list-none pl-0">
                {block.items.map((item, j) => (
                  <li key={j}
                    className={`flex items-start gap-3 font-sans text-[15px]
                      font-light text-ink-muted leading-relaxed ${proseInline}`}
                  >
                    <span className="mt-1.75 size-1.5 rounded-full bg-brand shrink-0" aria-hidden />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="mb-5 space-y-2 list-none pl-0 counter-reset-[item]">
                {block.items.map((item, j) => (
                  <li key={j}
                    className={`flex items-start gap-3 font-sans text-[15px]
                      font-light text-ink-muted leading-relaxed ${proseInline}`}
                  >
                    <span className="mt-0.5 font-mono text-[12px] text-brand shrink-0
                      size-5 rounded flex items-center justify-center
                      bg-brand-dim border border-brand-border">
                      {j + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ol>
            );

          case "code":
            return <CodeBlock key={i} lang={block.lang} code={block.code} />;

          case "callout":
            return <Callout key={i} variant={block.variant} html={block.html} />;

          case "divider":
            return (
              <div key={i} className="my-10 flex items-center gap-4" aria-hidden>
                <div className="flex-1 h-px bg-line" />
                <div className="size-1.5 rounded-full bg-brand" />
                <div className="flex-1 h-px bg-line" />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}