import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/shared/cta-band";
import { Badge } from "@/components/ui/badge";
import { getAllPostSlugs, getPost } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

// Brand-styled MDX elements.
const mdxComponents = {
  h2: (props: { children?: ReactNode }) => (
    <h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-ink" {...props} />
  ),
  h3: (props: { children?: ReactNode }) => (
    <h3 className="mt-8 text-xl font-bold text-ink" {...props} />
  ),
  p: (props: { children?: ReactNode }) => (
    <p className="mt-4 leading-relaxed text-ink/80" {...props} />
  ),
  ul: (props: { children?: ReactNode }) => (
    <ul className="mt-4 space-y-2 pl-1" {...props} />
  ),
  ol: (props: { children?: ReactNode }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink/80" {...props} />
  ),
  li: (props: { children?: ReactNode }) => (
    <li className="ml-4 list-disc pl-1 text-ink/80 marker:text-brand-red" {...props} />
  ),
  a: (props: { children?: ReactNode; href?: string }) => (
    <a className="font-semibold text-brand-red underline underline-offset-2" {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: (props: { children?: ReactNode }) => (
    <strong className="font-bold text-ink" {...props} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <article>
        {/* Header */}
        <header className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0 hero-grid opacity-50" aria-hidden />
          <div
            className="absolute -right-32 -top-32 size-[24rem] rounded-full bg-brand-red/20 blur-3xl"
            aria-hidden
          />
          <Container className="relative py-14 lg:py-20">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
            >
              <ArrowLeft className="size-4" /> Back to Blog
            </Link>
            <Badge variant="default" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span>{post.author}</span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4" /> {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" /> {post.readingTime}
              </span>
            </div>
          </Container>
        </header>

        {/* Body */}
        <div className="bg-white py-14">
          <Container className="max-w-3xl">
            <div className="text-lg">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </Container>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
