import Link from "next/link";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Fixed bottom bar on mobile: tap-to-call + tap-to-text + Get Quote.
 * Hidden on lg+ where the header CTAs are always visible.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-1.5 border-r border-border py-3.5 text-[13px] font-bold text-ink"
      >
        <Phone className="size-5 text-brand-red" />
        Call
      </a>
      <a
        href={siteConfig.smsHref}
        className="flex items-center justify-center gap-1.5 border-r border-border py-3.5 text-[13px] font-bold text-ink"
      >
        <MessageSquare className="size-5 text-brand-red" />
        Text Us
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center gap-1.5 brand-gradient py-3.5 text-[13px] font-bold text-white"
      >
        <CalendarCheck className="size-5" />
        Free Quote
      </Link>
    </div>
  );
}
