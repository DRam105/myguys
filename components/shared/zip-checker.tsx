"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin, XCircle, ArrowRight } from "lucide-react";
import { checkZip, type ZipResult } from "@/lib/zips";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Client-side ZIP checker. Validates a 5-digit ZIP against the placeholder
 * served-ZIP list (lib/zips.ts) and shows a friendly result.
 */
export function ZipChecker({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ZipResult | null>(null);
  const dark = variant === "dark";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(checkZip(value));
  }

  return (
    <div className={cn("w-full max-w-md", className)}>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="zip-check" className="sr-only">
          Enter your ZIP code
        </label>
        <div className="relative flex-1">
          <MapPin
            className={cn(
              "pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2",
              dark ? "text-white/50" : "text-muted",
            )}
            aria-hidden
          />
          <input
            id="zip-check"
            inputMode="numeric"
            maxLength={5}
            placeholder="Enter your ZIP"
            value={value}
            onChange={(e) => {
              setValue(e.target.value.replace(/\D/g, ""));
              setResult(null);
            }}
            className={cn(
              "h-13 w-full rounded-lg border pl-11 pr-3 text-base shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-red/40",
              dark
                ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:border-white/60"
                : "border-input bg-white text-ink placeholder:text-muted focus-visible:border-brand-red",
            )}
          />
        </div>
        <Button type="submit" size="lg" className="h-13 shrink-0">
          Check Availability
        </Button>
      </form>

      {result && (
        <div
          role="status"
          className={cn(
            "mt-3 flex items-start gap-2.5 rounded-lg px-4 py-3 text-sm font-medium",
            result.status === "served" && "bg-green-50 text-green-800",
            result.status === "nearby" && "bg-amber-50 text-amber-800",
            result.status === "invalid" && "bg-red-50 text-brand-red-dark",
          )}
        >
          {result.status === "served" && (
            <>
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" aria-hidden />
              <span>
                Great news — we serve {result.zip}!{" "}
                <Link href="/quote" className="inline-flex items-center gap-1 font-bold underline">
                  Get your free quote <ArrowRight className="size-3.5" />
                </Link>
              </span>
            </>
          )}
          {result.status === "nearby" && (
            <>
              <MapPin className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden />
              <span>
                We may still cover {result.zip} —{" "}
                <Link href="/contact" className="font-bold underline">
                  contact us to confirm
                </Link>
                .
              </span>
            </>
          )}
          {result.status === "invalid" && (
            <>
              <XCircle className="mt-0.5 size-5 shrink-0 text-brand-red" aria-hidden />
              <span>Please enter a valid 5-digit ZIP code.</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
