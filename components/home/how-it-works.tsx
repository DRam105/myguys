import { Search, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CtaButtons } from "@/components/shared/cta-buttons";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Free Inspection",
    body: "A licensed technician inspects your property, identifies the pests and entry points, and pinpoints the root cause.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Custom Treatment Plan",
    body: "We build a targeted plan for your home and budget — no cookie-cutter spraying, just the right treatment where it's needed.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Ongoing Protection",
    body: "We treat, seal, and monitor on a schedule that keeps pests out — backed by our free re-treatment guarantee.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Pest-Free in 3 Simple Steps"
          lead="Getting protected is easy. Here's exactly what to expect when you call My Guys."
        />

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-linear-to-r from-brand-red/10 via-brand-red/40 to-brand-red/10 md:block"
            aria-hidden
          />
          {steps.map(({ icon: Icon, step, title, body }, i) => (
            <Reveal key={step} delay={i * 0.12} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 flex size-16 items-center justify-center rounded-full brand-gradient text-white shadow-lg shadow-brand-red/25">
                  <Icon className="size-7" />
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full border-2 border-white bg-ink text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <span className="mt-5 font-display text-sm font-bold uppercase tracking-widest text-brand-red">
                  Step {step}
                </span>
                <h3 className="mt-1 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButtons />
        </div>
      </Container>
    </section>
  );
}
