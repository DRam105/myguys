import { Container } from "@/components/shared/container";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { ShieldCheck, Clock, Leaf } from "lucide-react";

/** Reusable closing CTA band (dark charcoal) used at the bottom of pages. */
export function CtaBand({
  title = "Ready to Reclaim Your Home?",
  subtitle = "Get a free, no-obligation quote today. Same-day service is available.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-0 size-[26rem] -translate-x-1/2 rounded-full bg-brand-red/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-16 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">{subtitle}</p>
        <CtaButtons className="mt-8 justify-center" onDark size="lg" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand-red" /> Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-brand-red" /> Same-Day Service
          </span>
          <span className="flex items-center gap-2">
            <Leaf className="size-4 text-brand-red" /> Pet- &amp; Family-Conscious
          </span>
        </div>
      </Container>
    </section>
  );
}
