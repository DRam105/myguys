import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

/**
 * Logo lockup for DARK surfaces (footer, dark CTA bands): the circular
 * MG spider badge on a white disc, paired with the "My Guys Pest Control"
 * text so the brand reads clearly against dark backgrounds.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={siteConfig.logoMark}
        alt=""
        width={256}
        height={256}
        className="size-11 shrink-0"
        aria-hidden
      />
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
