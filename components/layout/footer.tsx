import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Wordmark } from "@/components/shared/wordmark";
import { QuickQuoteDialog } from "@/components/forms/quick-quote-dialog";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { footerNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      {/* Newsletter / quick-quote strip */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-extrabold uppercase text-white">
              Pest Problem? Let&apos;s Solve It.
            </h3>
            <p className="mt-1 text-sm text-white/60">Request a fast free quote.</p>
          </div>
          <QuickQuoteDialog />
        </Container>
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        {/* Brand + contact */}
        <div className="lg:col-span-2">
          <Wordmark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.name} keeps homes and businesses across {siteConfig.region}{" "}
            pest-free with fast, guaranteed, family- and pet-conscious treatments.
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-white">
              <Phone className="size-4 text-brand-red" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="size-4 text-brand-red" /> {siteConfig.email}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-red" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-red" />
              <span>
                {siteConfig.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="text-white/80">{h.day}:</span> {h.time}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(footerNav).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              {heading}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved. · {siteConfig.licenseNumber}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="size-4" />
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
