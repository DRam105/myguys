import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { pests } from "@/lib/pests";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pest Library",
  description:
    "Identify common household pests, learn their habits and dangers, and find prevention tips. A free educational resource from My Guys Pest Control.",
  path: "/pests",
  keywords: pests.flatMap((p) => p.keywords),
});

export default function PestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pest Library"
        title="Know Your Pest, Beat Your Pest"
        lead="Identification, habits, dangers, and prevention tips for the pests we see most. Use this free guide to spot problems early — then let us handle the rest."
        crumbs={[{ label: "Pest Library" }]}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pests.map((pest, i) => (
              <Reveal key={pest.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/pests/${pest.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative block size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-red/40 ring-offset-2 ring-offset-white transition-all group-hover:ring-brand-red">
                      <Image
                        src={`/pest-icons/${pest.icon}.jpg`}
                        alt={pest.name}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>
                    <Badge variant="soft">{pest.category}</Badge>
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-ink">{pest.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {pest.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    Read guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Got a Pest You Can't Identify?"
        subtitle="Send us a photo or book a free inspection — our licensed techs will identify it and recommend a plan."
      />
    </>
  );
}
