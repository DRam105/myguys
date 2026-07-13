import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Consistent section header: eyebrow + red rule + title + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red",
            align === "center" && "justify-center",
          )}
        >
          <span className="brand-rule" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold uppercase sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
