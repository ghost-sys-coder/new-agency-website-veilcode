import { useState } from "react";
import { CONTACT_DETAILS } from "./OfficeInfo";

export function ContactDetailRow({
  detail,
}: {
  detail: (typeof CONTACT_DETAILS)[number];
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div
      className={`flex items-start gap-4 p-5 rounded-xl border
        transition-all duration-200
        ${hovered
          ? "bg-surface-hi border-brand-border"
          : "bg-surface-hi border-line"
        }`}
    >
      {/* Icon container */}
      <div
        className={`size-9 rounded-lg flex items-center justify-center shrink-0
          border transition-all duration-200
          ${hovered
            ? "bg-brand-dim border-brand-border text-brand"
            : "bg-surface-top border-line text-ink-faint"
          }`}
      >
        {detail.icon}
      </div>

      {/* Text */}
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-0.5">
          {detail.label}
        </p>
        <p className={`font-sans text-sm font-medium transition-colors duration-200
          ${hovered ? "text-brand" : "text-ink"}`}>
          {detail.value}
        </p>
        <p className="font-sans text-xs text-ink-faint mt-0.5">
          {detail.sub}
        </p>
      </div>
    </div>
  );

  if (detail.href) {
    return (
      <a
        href={detail.href}
        target={detail.href.startsWith("http") ? "_blank" : undefined}
        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="no-underline block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </div>
  );
}