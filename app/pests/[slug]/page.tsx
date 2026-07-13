import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Search, TriangleAlert, ShieldCheck, ArrowRight, Bug } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { getPest, getPestSlugs, pests } from "@/lib/pests";
import { getService } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return getPestSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPest(slug);
  if (!pest) return {};
  return pageMeta({
    title: `${pest.name} — Identification, Dangers & Prevention`,
    description: pest.excerpt,
    path: `/pests/${slug}`,
    keywords: pest.keywords,
  });
}

export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pest = getPest(slug);
  if (!pest) notFound();

  const service = getService(pest.relatedService);
  const related = pests.filter((p) => p.slug !== slug).slice(0, 3);

  const blocks = [
    { icon: Search, title: "How to Identify", items: pest.identification, tone: "neutral" as const },
    { icon: TriangleAlert, title: "Habits & Dangers", items: pest.habitsAndDangers, tone: "danger" as const },
    { icon: ShieldCheck, title: "Prevention Tips", items: pest.prevention, tone: "safe" as const },
  ];

  return (
    <>
      <PageHero
        eyebrow={pest.category}
        title={pest.name}
        lead={pest.intro}
        crumbs={[{ label: "Pest Library", href: "/pests" }, { label: pest.name }]}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                  <span
                    className={
                      "flex size-12 items-center justify-center rounded-xl " +
                      (block.tone === "danger"
                        ? "bg-brand-red-soft text-brand-red"
                        : block.tone === "safe"
                          ? "bg-green-50 text-green-600"
                          : "bg-paper-alt text-ink")
                    }
                  >
                    <block.icon className="size-6" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold uppercase text-ink">
                    {block.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Related service CTA */}
          {service && (
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl brand-gradient p-8 text-white md:flex-row">
              <div className="flex items-center gap-4">
                <span className="hidden size-14 items-center justify-center rounded-2xl bg-white/15 sm:flex">
                  <Bug className="size-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold uppercase">
                    Dealing with {pest.name.toLowerCase()}?
                  </h3>
                  <p className="mt-1 text-white/85">
                    Our {service.name.toLowerCase()} program eliminates them at the source.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="rounded-lg bg-white/15 px-5 py-3 font-semibold text-white hover:bg-white/25"
                >
                  View Service
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand-red hover:-translate-y-0.5"
                >
                  Free Quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Related pests */}
      <section className="section bg-paper-alt">
        <Container>
          <SectionHeading eyebrow="Pest Library" title="More Common Pests" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/pests/${p.slug}`}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink group-hover:text-brand-red">
                    {p.name}
                  </h3>
                  <Badge variant="soft">{p.category}</Badge>
                </div>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
