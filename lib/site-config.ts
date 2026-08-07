/**
 * ============================================================
 * CENTRAL SITE CONFIG
 * ------------------------------------------------------------
 * Swap the [bracketed placeholders] below with real values.
 * This is the single source of truth for brand name, phone,
 * address, hours, nav, and social links used across the site.
 * ============================================================
 */

export const siteConfig = {
  name: "My Guys Pest Control",
  shortName: "My Guys",
  // Header/footer logo (square red MG spider lockup on white).
  logo: "/logo.png",
  // Wide horizontal lockup: MG spider + "MY GUYS PEST CONTROL" wordmark (~3.64:1).
  logoBanner: "/logo-banner.png",
  logoBannerWidth: 1400,
  logoBannerHeight: 385,
  // Circular MG spider badge on a white disc — used on dark surfaces (footer).
  logoMark: "/logo-mark.png",
  // Used for absolute URLs (OG images, sitemap, JSON-LD). Update on deploy.
  url: "https://myguyspc.com",
  description:
    "Fast, guaranteed, locally-owned pest control. Licensed & insured technicians protect your home and family from ants, termites, rodents, roaches, mosquitoes and more. Get a free quote today.",

  // ---- REPLACE THESE ----
  phone: "(760) 309-7400",
  phoneHref: "tel:7603097400", // digits only for tap-to-call
  email: "info@myguyspc.com",
  // Where form submissions (quote / contact / quick-quote) are sent.
  // Paste your GoHighLevel inbound-webhook URL here to activate lead capture.
  // While empty, forms still show a success message but don't send anywhere.
  leadWebhookUrl: "",
  address: {
    street: "3145 Tiger Run Ct, Ste 107",
    city: "Carlsbad",
    state: "CA",
    zip: "92010",
  },
  region: "North County San Diego, Temecula & Murrieta",
  // Coverage-area map. Paste a Google Maps "Embed a map" src here
  // (Google Maps → Share → Embed a map → copy the iframe src).
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213797.48042667605!2d-117.16480301987308!3d33.14624906686366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1784434757224!5m2!1sen!2sus",
  licenseNumber: "License #: OPR 12980 · PR #7601",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  yearsInBusiness: 10,
  treatments: 22000,
  offer: {
    // The urgency banner. Replace with your real promotion.
    headline: "$50 Off Your First Recurring Service",
    code: "TryMyGuys",
  },

  social: {
    facebook: "https://facebook.com/[myguyspestcontrol]",
    instagram: "https://instagram.com/[myguyspestcontrol]",
    google: "https://g.page/[myguyspestcontrol]",
    yelp: "https://yelp.com/biz/[myguyspestcontrol]",
  },
} as const;

/** Primary navigation (used by header + footer). */
export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Pest Library", href: "/pests" },
  { label: "Plans", href: "/plans" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
] as const;

export const footerNav = {
  Services: [
    { label: "General Pest Control", href: "/services/general-pest-control" },
    { label: "Termite Control", href: "/services/termite-control" },
    { label: "Rodent Control", href: "/services/rodent-control" },
    { label: "Mosquito & Tick", href: "/services/mosquito-tick" },
    { label: "Bed Bugs", href: "/services/bed-bugs" },
    { label: "Commercial", href: "/services/commercial-pest-control" },
  ],
  "Pest Library": [
    { label: "Ants", href: "/pests/ants" },
    { label: "Termites", href: "/pests/termites" },
    { label: "Cockroaches", href: "/pests/cockroaches" },
    { label: "Rodents", href: "/pests/rodents" },
    { label: "Bed Bugs", href: "/pests/bed-bugs" },
    { label: "All Pests", href: "/pests" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Area", href: "/service-area" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Plans & Pricing", href: "/plans" },
    { label: "Get a Free Quote", href: "/quote" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
