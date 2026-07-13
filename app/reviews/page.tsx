import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ReviewCard } from "@/components/shared/review-card";
import { StarRating } from "@/components/shared/star-rating";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { reviews, aggregateRating } from "@/lib/reviews";
import { siteConfig } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Customer Reviews",
  description:
    "See why homeowners across North County San Diego, Temecula & Murrieta rate My Guys Pest Control 4.9 stars. Read real customer reviews.",
  path: "/reviews",
});

function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.name} Pest Control Service`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.value,
      reviewCount: aggregateRating.count,
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.quote,
    })),
  };
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Homeowners Love My Guys"
        lead="Don't just take our word for it. Here's what your neighbors have to say about our service."
        crumbs={[{ label: "Reviews" }]}
      >
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-extrabold text-white">
            {aggregateRating.value}
          </span>
          <div>
            <StarRating rating={aggregateRating.value} size={22} />
            <p className="mt-1 text-sm text-white/60">
              Based on {aggregateRating.count.toLocaleString()}+ verified reviews
            </p>
          </div>
        </div>
      </PageHero>

      {/* Review widget placeholders */}
      <section className="border-b border-border bg-paper-alt">
        <Container className="flex flex-col items-center justify-center gap-4 py-8 sm:flex-row">
          {/* TODO: embed live Google & Facebook review widgets */}
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            [Google Reviews Widget] · {siteConfig.rating.value} ★
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            [Facebook Reviews Widget] · {siteConfig.rating.value} ★
          </div>
        </Container>
      </section>

      {/* Wall */}
      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name + review.quote} delay={(i % 3) * 0.06}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Join Thousands of Happy Customers"
        subtitle="Experience the My Guys difference for yourself — get your free quote today."
      />

      <JsonLd data={reviewsSchema()} />
    </>
  );
}
