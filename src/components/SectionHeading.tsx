import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
}

export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  description,
  align = "left",
  headingId,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent ${
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
        {centered && <span className="h-px w-16 bg-gradient-to-r from-transparent to-border" />}
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span
          className={
            centered ? "h-px w-16 bg-gradient-to-l from-transparent to-border" : "h-px flex-1 max-w-40"
          }
        />
      </div>
    </div>
  );
}
