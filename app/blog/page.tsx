import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/shared/cta-band";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { getAllPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pest Control Blog",
  description:
    "Seasonal pest tips, prevention guides, and expert advice from the team at My Guys Pest Control.",
  path: "/blog",
});

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Pest Tips & Prevention Guides"
        lead="Seasonal advice and expert know-how to help you keep your home pest-free all year long."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="section bg-white">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-muted">No posts yet — check back soon!</p>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group mb-12 grid overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-2"
                >
                  <div className="relative min-h-[220px] overflow-hidden brand-gradient">
                    <div className="absolute inset-0 hero-grid opacity-40" aria-hidden />
                    <span className="absolute bottom-6 left-6 font-display text-6xl font-extrabold uppercase text-white/90">
                      MG
                    </span>
                    <Badge variant="dark" className="absolute left-6 top-6">
                      Featured
                    </Badge>
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-red">
                      {featured.category}
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-ink group-hover:text-brand-red">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-muted">{featured.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="size-4" /> {formatDate(featured.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" /> {featured.readingTime}
                      </span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-red">
                      Read article <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              )}

              {/* Rest */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg"
                    >
                      <Badge variant="soft" className="w-fit">
                        {post.category}
                      </Badge>
                      <h3 className="mt-4 text-xl font-bold leading-snug text-ink group-hover:text-brand-red">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted">{post.description}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="size-3.5" /> {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" /> {post.readingTime}
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
