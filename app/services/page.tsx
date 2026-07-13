import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { Icon, type IconName } from "@/components/shared/icons";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pest Control Services",
  description:
    "Full-service residential and commercial pest control: general pest, termites, rodents, mosquitoes, bed bugs, and more. Serving North County San Diego, Temecula & Murrieta.",
  path: "/services",
  keywords: services.flatMap((s) => s.keywords),
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Pest Control, Done Right"
        lead="From one-time treatments to year-round protection, our licensed technicians use responsible Integrated Pest Management to solve your problem at the source."
        crumbs={[{ label: "Services" }]}
      >
        <CtaButtons onDark />
      </PageHero>

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl"
                >
                  <span className="flex size-14 items-center justify-center rounded-xl bg-brand-red-soft text-brand-red transition-colors group-hover:brand-gradient group-hover:text-white">
                    <Icon name={service.icon as IconName} className="size-7" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-ink">{service.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
