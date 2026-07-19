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
    tagline: "Essential protection for smaller homes",
    priceFrom: "$99",
    cadence: "/mo",
    features: [
      "Quarterly service visits",
      "Exterior barrier treatment",
      "Coverage for 15+ common pests",
      "Web & wasp-nest removal",
      "Free re-treatments between visits",
    ],
    cta: "Get Started",
  },
  {
    slug: "home-shield",
    name: "Home Shield",
    tagline: "Our most popular year-round protection",
    priceFrom: "$89",
    cadence: "/mo",
    popular: true,
    features: [
      "Bi-monthly service visits",
      "Interior + exterior treatment",
      "Coverage for 30+ common pests",
      "Rodent monitoring stations",
      "Priority scheduling",
      "Free re-treatments, guaranteed",
    ],
    cta: "Get Started",
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Total-home defense with the works",
    priceFrom: "$79",
    cadence: "/mo",
    features: [
      "Monthly or bi-monthly visits",
      "Everything in Home Shield",
      "Seasonal mosquito & tick service",
      "Termite monitoring add-on",
      "Same-day priority response",
      "Annual termite inspection",
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
  { feature: "Mosquito & tick (seasonal)", basic: false, homeShield: false, premium: true },
  { feature: "Termite monitoring", basic: false, homeShield: false, premium: true },
  { feature: "Priority scheduling", basic: false, homeShield: true, premium: true },
  { feature: "Free re-treatments", basic: true, homeShield: true, premium: true },
  { feature: "Satisfaction guarantee", basic: true, homeShield: true, premium: true },
];
