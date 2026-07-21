"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={512}
            height={512}
            priority
            className="h-12 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-brand-red",
                  active ? "text-brand-red" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="group flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-brand-red"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-red-soft text-brand-red transition-colors group-hover:brand-gradient group-hover:text-white">
              <Phone className="size-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-medium uppercase tracking-wide text-muted">
                Call today
              </span>
              {siteConfig.phone}
            </span>
          </a>
          <Button asChild size="default">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/quote">Free Quote</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[88%] max-w-sm flex-col p-0">
              <div className="flex items-center border-b border-border px-5 py-4">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={512}
                  height={512}
                  className="h-12 w-auto"
                />
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </div>

              <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile">
                {mainNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-ink hover:bg-paper-alt"
                    >
                      {item.label}
                      <ChevronRight className="size-4 text-muted" />
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/blog"
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-ink hover:bg-paper-alt"
                  >
                    Blog
                    <ChevronRight className="size-4 text-muted" />
                  </Link>
                </SheetClose>
              </nav>

              <div className="space-y-3 border-t border-border p-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="dark" className="w-full">
                  <a href={siteConfig.phoneHref}>
                    <Phone /> Call {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
