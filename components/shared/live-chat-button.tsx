"use client";

import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Floating live-chat launcher — a STUB.
 * TODO: Replace this with a real provider (Intercom, Tidio, Podium,
 * Drift, etc.). For now it opens a small panel pointing to call/quote.
 * Sits above the mobile call bar on small screens.
 */
export function LiveChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 sm:bottom-6">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-border bg-white p-4 shadow-2xl">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full brand-gradient text-white">
              <MessageCircle className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Chat with My Guys</p>
              <p className="text-xs text-green-600">● Typically replies fast</p>
            </div>
          </div>
          <p className="mb-3 text-sm text-muted">
            Hi there! 👋 How can we help you get pest-free today?
          </p>
          {/* TODO: swap for real live-chat widget */}
          <div className="flex flex-col gap-2">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg brand-gradient px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="size-4" /> Call {siteConfig.phone}
            </a>
            <a
              href="/quote"
              className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-red hover:text-brand-red"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className={cn(
          "flex size-14 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-105",
          open ? "bg-ink" : "brand-gradient",
        )}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-7" />}
      </button>
    </div>
  );
}
