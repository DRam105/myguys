"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Compact newsletter / quick-contact capture in the footer.
 * TODO: connect to your email service / CRM (e.g. Resend, Mailchimp).
 */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    // TODO: POST to newsletter endpoint
    console.log("[newsletter] subscribe:", email);
    setDone(true);
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
        <CheckCircle2 className="size-5 text-green-400" />
        You&apos;re on the list — thanks!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="h-11 flex-1 rounded-lg border border-white/20 bg-white/10 px-3.5 text-sm text-white placeholder:text-white/50 outline-none focus-visible:border-white/60 focus-visible:ring-2 focus-visible:ring-brand-red/40"
      />
      <button
        type="submit"
        className="flex h-11 items-center gap-1.5 rounded-lg brand-gradient px-4 text-sm font-semibold text-white"
      >
        Subscribe <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
