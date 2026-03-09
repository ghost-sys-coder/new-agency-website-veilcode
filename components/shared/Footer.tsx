import Link from "next/link";
import { LogoMark, WordMark } from "@/components/extras/Primitives";
import { SOCIALS, FOOTER_COLS } from "@/constants";


export function Footer() {
  return (
    <footer className="border-t border-line bg-surface pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-30Link mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-5">
              <LogoMark size={28} />
              <WordMark />
            </Link>

            <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-70 mb-6">
              Premium digital agency building web &amp; mobile solutions,
              analytics, and AI automation for ambitious businesses.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.abbr}
                  href={s.href}
                  aria-label={s.label}
                  className="size-9 flex items-center justify-center rounded-md
                    border border-line text-ink-faint
                    hover:border-line-hi hover:text-ink-muted
                    transition-colors duration-200 no-underline"
                >
                  <span className="font-mono text-[10px] tracking-wide">{s.abbr}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-faint mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm text-ink-muted no-underline
                        hover:text-ink transition-colors duration-150"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line pt-7 flex flex-col sm:flex-row
          justify-between items-center gap-4 text-center">
          <p className="font-sans text-[13px] text-ink-faint">
            &copy; {new Date().getFullYear()} VeilCode. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-faint">
            Built with precision &middot; Deployed with purpose
          </p>
        </div>
      </div>
    </footer>
  );
}