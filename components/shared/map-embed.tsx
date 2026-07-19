import { siteConfig } from "@/lib/site-config";

/**
 * Google Maps embed via iframe — no API key required.
 *
 * Two ways to point it somewhere:
 *  1. `query` — any address or search term (defaults to the office address).
 *  2. Paste a full embed URL from Google Maps (Share → Embed a map → copy the
 *     src) into `src` for a pinned, styled map.
 *
 * To customize: open Google Maps, find your location, click Share →
 * "Embed a map", copy the <iframe src="…">, and pass it as `src`.
 */
export function MapEmbed({
  query,
  src,
  zoom = 12,
  className,
  title,
}: {
  query?: string;
  src?: string;
  zoom?: number;
  className?: string;
  title?: string;
}) {
  const q =
    query ??
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;
  const mapSrc =
    src ?? `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&output=embed`;

  return (
    <iframe
      title={title ?? `Map — ${siteConfig.name}`}
      src={mapSrc}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
