import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Fixed bottom bar on mobile with tap-to-call + Get Quote.
 * Hidden on lg+ where the header CTAs are always visible.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-ink"
      >
        <Phone className="size-5 text-brand-red" />
        Call Now
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center gap-2 brand-gradient py-3.5 text-sm font-bold text-white"
      >
        <CalendarCheck className="size-5" />
        Free Quote
      </Link>
    </div>
  );
}
