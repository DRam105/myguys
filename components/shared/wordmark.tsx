import { cn } from "@/lib/utils";

/**
 * Text lockup for DARK surfaces where the white-background logo.jpeg
 * would not read (footer, dark CTA bands).
 * TODO: If you export a white "knockout" version of the logo, you can
 * swap this for an <Image> of that asset. See README.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Simplified red "MG" spider glyph */}
      <span
        className="flex size-11 items-center justify-center rounded-lg brand-gradient font-display text-xl font-extrabold text-white shadow-md"
        aria-hidden
      >
        MG
      </span>
      <span className="font-display leading-none">
        <span className="block text-lg font-extrabold uppercase tracking-tight text-white">
          My Guys
        </span>
        <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
          Pest Control
        </span>
      </span>
    </div>
  );
}
