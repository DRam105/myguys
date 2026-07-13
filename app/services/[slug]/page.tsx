import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, CircleAlert, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { getService, getServiceSlugs, services } from "@/lib/services";
import { pageMeta, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.name,
    description: service.excerpt,
    path: `/services/${slug}`,
    keywords: service.keywords,
  });
}

const whyChoose = [
  "Licensed, background-checked technicians",
  "Targeted Integrated Pest Management (IPM)",
  "Family- & pet-conscious products",
  "Free re-treatments between visits",
  "Fast, often same-day scheduling",
  "Upfront, customized pricing",
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.name}
        lead={service.intro}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.shortName }]}
      >
        <CtaButtons onDark />
      </PageHero>

      {/* What's included */}
      <section className="section bg-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What's Included"
              title="Comprehensive Protection"
              className="lg:mx-0"
            />
            <ul className="mt-8 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-red-soft text-brand-red">
                    <Check className="size-4" />
                  </span>
                  <span className="text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signs of infestation */}
          <div className="rounded-2xl border border-border bg-paper-alt p-7">
            <div className="flex items-center gap-2 text-brand-red">
              <CircleAlert className="size-5" />
              <h3 className="font-display text-lg font-bold uppercase">
                Signs You May Have a Problem
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {service.signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-sm text-ink/80">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
                  {sign}
                </li>
              ))}
            </ul>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-red hover:underline"
            >
              Notice any of these? Get a free inspection <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section bg-paper-alt">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="The My Guys Method"
            lead="A responsible, step-by-step approach that targets the root cause — not just the pests you can see."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <span className="font-display text-4xl font-extrabold text-brand-red/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section bg-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why My Guys"
              title="Why Homeowners Choose Us"
              className="lg:mx-0"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-red" />
                  <span className="text-sm text-ink/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl brand-gradient p-8 text-white shadow-lg">
            <h3 className="font-display text-2xl font-extrabold uppercase">
              Get rid of {service.shortName.toLowerCase()} for good
            </h3>
            <p className="mt-2 text-white/85">
              Book your free inspection today and let our local team build a plan
              that fits your home and budget.
            </p>
            <div className="mt-6">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand-red transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection faqs={service.faqs} className="bg-paper-alt" />

      {/* Related services */}
      <section className="section bg-white">
        <Container>
          <SectionHeading eyebrow="Explore More" title="Other Services" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-red">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={`Ready to Tackle ${service.shortName}?`} />

      <JsonLd data={serviceSchema(service.name, service.excerpt, `/services/${slug}`)} />
    </>
  );
}
