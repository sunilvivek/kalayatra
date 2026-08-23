import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const TONES = {
  accent: { text: "text-accent", dot: "var(--accent)" },
  saffron: { text: "text-saffron", dot: "var(--saffron)" },
  rani: { text: "text-rani", dot: "var(--rani)" },
  indigo: { text: "text-indigo", dot: "var(--indigo)" },
  teal: { text: "text-teal", dot: "var(--teal)" },
  violet: { text: "text-violet", dot: "var(--violet)" },
} as const;

export type SectionTone = keyof typeof TONES;

interface SectionHeadingProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  headingId?: string;
}

export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  description,
  align = "left",
  tone = "accent",
  headingId,
}: SectionHeadingProps) {
  const centered = align === "center";
  const t = TONES[tone];
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${t.text} ${
          centered ? "justify-center" : ""
        }`}
      >
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-3 font-serif text-3xl font-semibold leading-tight text-heading sm:text-4xl"
      >
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-body">{description}</p>}
      <div aria-hidden="true" className={`mt-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {centered && (
          <>
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: t.dot }} />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </>
        )}
        {!centered && (
          <>
            <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: t.dot }} />
            <span className="h-px max-w-40 flex-1 bg-border" />
          </>
        )}
      </div>
    </div>
  );
}
