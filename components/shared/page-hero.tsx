import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

/** Charcoal inner-page hero with breadcrumb, eyebrow, title, and lead. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden />
      <div
        className="absolute -right-32 -top-32 size-[26rem] rounded-full bg-brand-red/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-14 lg:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5" aria-hidden />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red">
            <span className="brand-rule" aria-hidden />
            {eyebrow}
          </div>
        )}

        <h1 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{lead}</p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
