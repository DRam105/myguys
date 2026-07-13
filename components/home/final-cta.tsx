import Link from "next/link";
import { Phone, ShieldCheck, Clock, Leaf } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-brand-red/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-20 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
          Ready to Reclaim Your Home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Get a free, no-obligation quote today. Same-day service is available —
          let&apos;s send those pests packing.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand-red" /> Licensed & Insured
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-brand-red" /> Same-Day Service
          </span>
          <span className="flex items-center gap-2">
            <Leaf className="size-4 text-brand-red" /> Pet- & Family-Conscious
          </span>
        </div>
      </Container>
    </section>
  );
}
