import Link from "next/link";
import { Home, Phone, Bug } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-grid opacity-50" aria-hidden />
      <div
        className="absolute left-1/2 top-0 size-[26rem] -translate-x-1/2 rounded-full bg-brand-red/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="flex size-20 items-center justify-center rounded-2xl brand-gradient">
          <Bug className="size-10 text-white" />
        </span>
        <p className="mt-6 font-display text-7xl font-extrabold text-brand-red">404</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold uppercase sm:text-4xl">
          This Page Bugged Out
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home aria-hidden /> Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="onDark">
            <a href={siteConfig.phoneHref}>
              <Phone aria-hidden /> Call {siteConfig.phone}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
