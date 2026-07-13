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
  // Header/footer logo. Drop your file at /public/logo.jpeg and set this
  // to "/logo.jpeg". Until then we use the branded SVG placeholder.
  logo: "/logo-placeholder.svg",
  // Used for absolute URLs (OG images, sitemap, JSON-LD). Update on deploy.
  url: "https://myguyspestcontrol.com",
  description:
    "Fast, guaranteed, locally-owned pest control. Licensed & insured technicians protect your home and family from ants, termites, rodents, roaches, mosquitoes and more. Get a free quote today.",

  // ---- REPLACE THESE ----
  phone: "(760) 309-7400",
  phoneHref: "tel:7603097400", // digits only for tap-to-call
  email: "[hello@myguyspestcontrol.com]",
  address: {
    street: "3145 Tiger Run Ct, Ste 107",
    city: "Carlsbad",
    state: "CA",
    zip: "92010",
  },
  region: "North County San Diego, Temecula & Murrieta",
  licenseNumber: "[License #000000]",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed (emergency line available)" },
  ],
  // Aggregate rating shown in trust bars + JSON-LD (replace with real data).
  rating: {
    value: 4.9,
    count: 1200,
  },
  yearsInBusiness: 15,
  homesProtected: 25000,
  offer: {
    // The urgency banner. Replace with your real promotion.
    headline: "$50 Off Your First Recurring Service",
    subtext: "New customers only. Mention code [SAVE50] when you book.",
    expires: "[limited time]",
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
