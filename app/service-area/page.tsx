import type { Metadata } from "next";
import { MapPin, PhoneCall } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ZipChecker } from "@/components/shared/zip-checker";
import { MapEmbed } from "@/components/shared/map-embed";
import { CtaBand } from "@/components/shared/cta-band";
import { servedCities } from "@/lib/zips";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Service Area",
  description:
    "Proudly serving North County San Diego, Temecula & Murrieta — Carlsbad, Oceanside, Vista, San Marcos, Escondido, Encinitas, and more. Check your ZIP code.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Proudly Serving ${siteConfig.region}`}
        lead="Fast, local pest control across the region. Enter your ZIP code below to confirm we cover your neighborhood."
        crumbs={[{ label: "Service Area" }]}
      >
        <ZipChecker variant="dark" />
      </PageHero>

      {/* Cities + map */}
      <section className="section bg-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Cities We Serve"
              title="Local Coverage You Can Count On"
              lead="We're your neighbors — here are just some of the communities we protect."
              className="lg:mx-0"
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {servedCities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2.5 text-sm font-medium text-ink/85"
                >
                  <MapPin className="size-4 shrink-0 text-brand-red" />
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Don&apos;t see your city? We&apos;re always expanding —{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-brand-red hover:underline">
                give us a call
              </a>{" "}
              and we&apos;ll let you know.
            </p>
          </div>

          {/* Coverage-area map */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-paper-alt lg:aspect-[4/3]">
            <MapEmbed
              src={siteConfig.mapEmbedSrc}
              title={`${siteConfig.name} service area map`}
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Container>
      </section>

      {/* Same-day strip */}
      <section className="bg-paper-alt">
        <Container className="flex flex-col items-center gap-3 py-10 text-center">
          <PhoneCall className="size-8 text-brand-red" />
          <p className="max-w-xl text-lg font-medium text-ink">
            Have an urgent pest problem? We offer{" "}
            <span className="font-bold">same-day service</span> across most of our
            coverage area.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="font-display text-2xl font-extrabold text-brand-red hover:underline"
          >
            {siteConfig.phone}
          </a>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
