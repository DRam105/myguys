/**
 * Customer testimonials (clearly fake placeholders — replace with
 * real, permissioned reviews). Used on /reviews and the home carousel.
 */

export type Review = {
  name: string;
  location: string;
  rating: number; // 1–5
  date: string;
  service: string;
  quote: string;
  /** Show the star rating on this card. Set true only for verified reviews. */
  showStars?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    location: "Carlsbad",
    rating: 5,
    showStars: true,
    date: "2 weeks ago",
    service: "General Pest Control",
    quote:
      "My Guys came out the same day I called and knocked out our ant problem completely. The technician was friendly, on time, and explained everything. Haven't seen a single ant since!",
  },
  {
    name: "James T.",
    location: "Oceanside",
    rating: 5,
    showStars: true,
    date: "1 month ago",
    service: "Rodent Control",
    quote:
      "We had mice in the garage and these guys actually found where they were getting in and sealed it up. No more scratching in the walls. Worth every penny.",
  },
  {
    name: "Priya K.",
    location: "Encinitas",
    rating: 5,
    showStars: true,
    date: "3 weeks ago",
    service: "Mosquito & Tick",
    quote:
      "Our backyard was unusable in the summer. After the first mosquito treatment we could finally eat dinner outside again. The recurring service keeps it that way.",
  },
  {
    name: "Robert & Linda H.",
    location: "Temecula",
    rating: 5,
    date: "2 months ago",
    service: "Termite Control",
    quote:
      "Found termites during our inspection before it turned into a disaster. The team was thorough, professional, and gave us real peace of mind. Highly recommend.",
  },
  {
    name: "Marcus D.",
    location: "Vista",
    rating: 5,
    date: "1 week ago",
    service: "Bed Bug Treatment",
    quote:
      "Discreet, fast, and effective. I was so stressed about bed bugs and they handled the whole thing professionally. The follow-up visit sealed the deal.",
  },
  {
    name: "Aisha R.",
    location: "San Marcos",
    rating: 5,
    date: "1 month ago",
    service: "Cockroach Control",
    quote:
      "Family-owned and it shows — they treat your home like it's theirs. Our roach problem is gone and their re-treatment guarantee makes it a no-brainer.",
  },
  {
    name: "Tom W.",
    location: "Escondido",
    rating: 4,
    date: "3 months ago",
    service: "General Pest Control",
    quote:
      "Great service and very responsive. Had a small scheduling hiccup but they made it right immediately. The quarterly plan keeps everything under control.",
  },
  {
    name: "Grace L.",
    location: "Murrieta",
    rating: 5,
    date: "2 weeks ago",
    service: "Wasps & Stinging Insects",
    quote:
      "A huge wasp nest showed up over our front door. They came out fast, removed it safely, and treated the area so it wouldn't come back. Lifesavers!",
  },
];
