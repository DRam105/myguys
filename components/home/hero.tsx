import Link from "next/link";
import { Phone, ShieldCheck, Clock, CheckCircle2, Leaf } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ZipChecker } from "@/components/shared/zip-checker";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "Same-Day Service Available" },
  { icon: Leaf, label: "Pet- & Family-Friendly" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Texture + red glow */}
      <div className="absolute inset-0 hero-grid opacity-70" aria-hidden />
      <div
        className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-brand-red/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-48 -left-24 size-[28rem] rounded-full bg-brand-red/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
            <span className="flex size-2 rounded-full bg-green-400" />
            Local & Family-Owned · Serving {siteConfig.region}
          </div>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Pests Don&apos;t
            <br />
            <span className="text-brand-red">Stand a Chance.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Fast, professional, locally-owned pest control that protects your home
            and family. Licensed technicians, responsible treatments, and free
            re-treatments if pests come back.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="onDark">
              <a href={siteConfig.phoneHref}>
                <Phone aria-hidden />
                Call {siteConfig.phone}
              </a>
            </Button>
          </div>

          {/* Inline ZIP */}
          <div className="mt-8">
            <p className="mb-2 text-sm font-semibold text-white/80">
              Enter your ZIP to get started:
            </p>
            <ZipChecker variant="dark" />
          </div>

          {/* Trust microcopy */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/80">
                <Icon className="size-4 text-brand-red" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-ink-soft to-ink p-8 shadow-2xl">
            {/* Big spider-mark watermark */}
            <span
              className="pointer-events-none absolute -right-8 -top-10 select-none font-display text-[12rem] font-extrabold leading-none text-brand-red/10"
              aria-hidden
            >
              MG
            </span>

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl brand-gradient">
                  <ShieldCheck className="size-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold uppercase text-white">
                    Professional Pest Management
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "Free, no-obligation inspection",
                  "Family- & pet-conscious treatments",
                  "Same-day & emergency service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                    <CheckCircle2 className="size-5 shrink-0 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/quote">Claim Your Free Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
