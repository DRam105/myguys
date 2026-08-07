/**
 * Recurring-service plan tiers for /plans and the home preview.
 * Pricing is illustrative — real quotes are customized.
 */

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  priceFrom: string;
  cadence: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    slug: "basic",
    name: "Basic",
    tagline: "Straightforward protection for smaller homes",
    priceFrom: "$135",
    cadence: "/mo",
    features: [
      "Quarterly service visits",
      "Coverage for general pests",
      "Web removal",
      "Exterior & interior treatment on request",
    ],
    cta: "Get Started",
  },
  {
    slug: "home-shield",
    name: "Essential",
    tagline: "Our most popular year-round protection",
    priceFrom: "$85",
    cadence: "/mo",
    popular: true,
    features: [
      "Bi-monthly service visits",
      "Exterior & interior treatment on request",
      "Covers general pests",
      "Free re-treatment in affected areas",
      "Priority scheduling",
    ],
    cta: "Get Started",
  },
  {
    slug: "premium",
    name: "Premier",
    tagline: "Total-home defense with the works",
    priceFrom: "$70",
    cadence: "/mo",
    features: [
      "Monthly treatment",
      "Everything in Essential",
      "Priority scheduling",
    ],
    cta: "Get Started",
  },
];

/** Rows for the comparison table on /plans. */
export const planComparison: {
  feature: string;
  basic: boolean | string;
  homeShield: boolean | string;
  premium: boolean | string;
}[] = [
  { feature: "Service frequency", basic: "Quarterly", homeShield: "Bi-monthly", premium: "Monthly" },
  { feature: "Exterior barrier treatment", basic: true, homeShield: true, premium: true },
  { feature: "Interior treatment", basic: false, homeShield: true, premium: true },
  { feature: "Pests covered", basic: "15+", homeShield: "30+", premium: "30+" },
  { feature: "Web & nest removal", basic: true, homeShield: true, premium: true },
  { feature: "Rodent monitoring", basic: false, homeShield: true, premium: true },
  { feature: "Mosquito & tick (seasonal)", basic: false, homeShield: false, premium: false },
  { feature: "Termite monitoring", basic: false, homeShield: false, premium: true },
  { feature: "Priority scheduling", basic: false, homeShield: true, premium: true },
  { feature: "Free re-treatments", basic: true, homeShield: true, premium: true },
  { feature: "Professional Pest Management", basic: true, homeShield: true, premium: true },
];
