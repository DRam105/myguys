/**
 * Service catalog — single source of truth for /services,
 * /services/[slug], the home services grid, nav, and per-page SEO.
 * `icon` is a string key resolved by <Icon /> (components/shared/icons.tsx).
 */

export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  /** One-liner for cards/grids. */
  excerpt: string;
  /** Hero intro paragraph. */
  intro: string;
  included: string[];
  process: { title: string; description: string }[];
  signs: string[];
  faqs: FAQ[];
  /** SEO keywords baked into copy/metadata. */
  keywords: string[];
};

const IPM_PROCESS = [
  {
    title: "Inspect",
    description:
      "A licensed technician performs a thorough inspection of your property inside and out, identifying pests, entry points, and conducive conditions.",
  },
  {
    title: "Identify",
    description:
      "We pinpoint the exact species and the root cause of the problem — because the right treatment starts with the right diagnosis.",
  },
  {
    title: "Treat",
    description:
      "We apply targeted, family- and pet-conscious treatments precisely where pests live and travel, minimizing product and maximizing results.",
  },
  {
    title: "Protect",
    description:
      "We seal entry points, set up monitoring, and schedule ongoing visits so pests stay gone — backed by our free re-treatment guarantee.",
  },
];

export const services: Service[] = [
  {
    slug: "general-pest-control",
    name: "General Pest Control",
    shortName: "General Pest",
    icon: "bug",
    tagline: "Year-round protection from the pests that bug you most",
    excerpt:
      "Comprehensive, recurring protection against 30+ common household pests — inside and out.",
    intro:
      "Our General Pest Control program is the foundation of a pest-free home. Using an Integrated Pest Management (IPM) approach, we target ants, spiders, roaches, silverfish, earwigs and dozens of other common invaders while keeping treatments responsible and precise.",
    included: [
      "Full interior and exterior inspection",
      "Treatment of baseboards, entry points, and nesting areas",
      "Exterior barrier treatment around your foundation",
      "Web and wasp-nest removal from eaves and entryways",
      "Granular yard treatment for crawling pests",
      "Free re-treatments between scheduled visits",
    ],
    process: IPM_PROCESS,
    signs: [
      "Ant trails along counters, floors, or foundation",
      "Spider webs in corners, eaves, and basements",
      "Droppings or shed skins near baseboards",
      "Sightings of roaches or silverfish at night",
    ],
    faqs: [
      {
        question: "How often do you treat?",
        answer:
          "Most homeowners choose quarterly service, with the option of bi-monthly for heavier pressure. If pests return between visits, we come back and re-treat at no charge.",
      },
      {
        question: "Are the treatments safe for kids and pets?",
        answer:
          "Yes. We use EPA-registered products applied by licensed technicians, and we follow label directions to the letter. We'll let you know if any short re-entry window applies to a specific application.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "For exterior-only visits, no. For the initial interior service we ask that an adult be present so we can inspect and treat problem areas together.",
      },
    ],
    keywords: [
      "general pest control",
      "quarterly pest control",
      "home pest control service",
      "residential exterminator",
    ],
  },
  {
    slug: "termite-control",
    name: "Termite Control",
    shortName: "Termite",
    icon: "house",
    tagline: "Stop the silent destroyer before it costs you thousands",
    excerpt:
      "Advanced termite inspections, treatments, and monitoring that protect your biggest investment.",
    intro:
      "Termites cause billions in structural damage every year — often before homeowners ever notice. Our termite program combines liquid barrier treatments and bait station monitoring to eliminate active colonies and keep new ones from moving in.",
    included: [
      "Comprehensive termite inspection with written report",
      "Liquid termiticide barrier around the structure",
      "In-ground bait station installation and monitoring",
      "Identification of moisture and wood-to-soil issues",
      "Annual re-inspections to catch new activity early",
      "Damage-prevention documentation for your records",
    ],
    process: IPM_PROCESS,
    signs: [
      "Mud tubes on foundation walls or crawlspaces",
      "Hollow-sounding or blistered wood",
      "Discarded wings near windows and doors",
      "Tight-fitting doors or bubbling paint",
    ],
    faqs: [
      {
        question: "How do I know if I have termites?",
        answer:
          "Common signs include mud tubes, discarded wings, and wood that sounds hollow. Because termites work out of sight, an annual professional inspection is the surest way to catch them early.",
      },
      {
        question: "What kind of treatment do you use?",
        answer:
          "We tailor the approach to your home — typically a combination of a liquid termiticide barrier and in-ground bait stations for long-term monitoring and protection.",
      },
      {
        question: "Is termite damage covered by my insurance?",
        answer:
          "Most homeowner policies exclude termite damage, which is exactly why prevention matters. Ask us about our protection plan and documentation.",
      },
    ],
    keywords: [
      "termite control",
      "termite treatment",
      "termite inspection",
      "termite bait stations",
    ],
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    shortName: "Rodent",
    icon: "mouse",
    tagline: "Seal them out and keep them out — for good",
    excerpt:
      "Trapping, exclusion, and sanitation to end mouse and rat problems at the source.",
    intro:
      "Mice and rats contaminate food, chew wiring, and multiply fast. Our rodent program goes beyond traps: we find and seal the entry points that let them in, then monitor to make sure the problem stays solved.",
    included: [
      "Interior and exterior rodent inspection",
      "Strategic trapping and tamper-resistant bait stations",
      "Entry-point sealing and exclusion work",
      "Sanitation and droppings clean-up guidance",
      "Attic and crawlspace evaluation",
      "Follow-up monitoring visits",
    ],
    process: IPM_PROCESS,
    signs: [
      "Droppings in cabinets, pantries, or along walls",
      "Gnaw marks on food packaging or wiring",
      "Scratching or scurrying sounds in walls at night",
      "Greasy rub marks along baseboards",
    ],
    faqs: [
      {
        question: "Do you just set traps?",
        answer:
          "No — trapping is only half the job. The lasting fix is exclusion: we seal the gaps and entry points rodents use, so new ones can't get in after we remove the current population.",
      },
      {
        question: "How long does it take to get rid of mice?",
        answer:
          "Most infestations are brought under control within a few weeks, depending on severity. We monitor and adjust until activity stops completely.",
      },
      {
        question: "Are baits safe around pets?",
        answer:
          "We use tamper-resistant, locked bait stations placed out of reach, and we favor trapping in interior living spaces whenever possible.",
      },
    ],
    keywords: [
      "rodent control",
      "mouse exterminator",
      "rat control",
      "rodent exclusion",
    ],
  },
  {
    slug: "mosquito-tick",
    name: "Mosquito & Tick Control",
    shortName: "Mosquito & Tick",
    icon: "droplet",
    tagline: "Take your yard back all season long",
    excerpt:
      "Seasonal treatments that dramatically cut mosquito and tick populations around your home.",
    intro:
      "Mosquitoes and ticks aren't just annoying — they carry serious disease. Our seasonal program treats the shady, humid harborage areas where they breed and rest, so your family can actually enjoy the backyard again.",
    included: [
      "Targeted treatment of shrubs, tree lines, and shady harborage",
      "Standing-water and breeding-site identification",
      "Tick treatment along wood lines and tall grass",
      "Recurring visits every few weeks in season",
      "Special event ('one-time') treatments available",
      "Larvicide options for water features",
    ],
    process: IPM_PROCESS,
    signs: [
      "Swarms at dawn and dusk in the yard",
      "Bites within minutes of stepping outside",
      "Ticks found on pets after time outdoors",
      "Standing water in gutters, planters, or low spots",
    ],
    faqs: [
      {
        question: "How much will treatment reduce mosquitoes?",
        answer:
          "Most customers see a dramatic reduction after the first treatment. With recurring service through the season, your yard stays comfortable for everyday use and gatherings.",
      },
      {
        question: "Can you treat for a specific event?",
        answer:
          "Absolutely. Schedule a one-time treatment a day or two before your party, wedding, or cookout for peak protection.",
      },
      {
        question: "Is it safe for pollinators?",
        answer:
          "We apply responsibly, avoid flowering plants where pollinators forage, and time treatments to minimize impact on bees and butterflies.",
      },
    ],
    keywords: [
      "mosquito control",
      "tick control",
      "yard mosquito treatment",
      "backyard mosquito spray",
    ],
  },
  {
    slug: "bed-bugs",
    name: "Bed Bug Treatment",
    shortName: "Bed Bugs",
    icon: "bedDouble",
    tagline: "Discreet, thorough treatment that ends the sleepless nights",
    excerpt:
      "Proven bed bug elimination with detailed inspection, treatment, and follow-up verification.",
    intro:
      "Bed bugs are stubborn, fast-spreading, and stressful. Our discreet, systematic approach targets every life stage — from eggs to adults — with proven treatments and thorough follow-up so you can sleep soundly again.",
    included: [
      "Detailed room-by-room bed bug inspection",
      "Targeted treatment of harborage areas and cracks",
      "Optional heat-treatment for severe infestations",
      "Mattress and furniture treatment guidance",
      "Follow-up visits to confirm elimination",
      "Prep checklist to maximize results",
    ],
    process: IPM_PROCESS,
    signs: [
      "Small itchy bites in lines or clusters",
      "Rusty or dark spots on sheets and mattress seams",
      "Tiny pale eggs or shed skins in crevices",
      "A sweet, musty odor in heavy infestations",
    ],
    faqs: [
      {
        question: "How many treatments will I need?",
        answer:
          "Most infestations require an initial treatment plus at least one follow-up to catch newly hatched bugs. We verify elimination before we consider the job done.",
      },
      {
        question: "Do I have to throw out my mattress?",
        answer:
          "Usually not. With proper treatment and encasements, most furniture can be saved. We'll advise you honestly if anything can't be treated.",
      },
      {
        question: "How should I prepare for treatment?",
        answer:
          "We provide a simple prep checklist — typically laundering bedding on high heat and reducing clutter so we can reach harborage areas.",
      },
    ],
    keywords: [
      "bed bug treatment",
      "bed bug exterminator",
      "bed bug heat treatment",
      "get rid of bed bugs",
    ],
  },
  {
    slug: "ants",
    name: "Ant Control",
    shortName: "Ants",
    icon: "bug",
    tagline: "From the counter to the colony — gone",
    excerpt:
      "Species-specific ant control that eliminates the colony, not just the ants you see.",
    intro:
      "Spraying the ants you see rarely solves the problem — and with some species it makes it worse. We identify the species, locate the colony, and use targeted baiting and treatment to wipe it out at the source.",
    included: [
      "Ant species identification",
      "Colony and trail-source location",
      "Targeted, non-repellent baiting",
      "Interior and exterior perimeter treatment",
      "Moisture and entry-point recommendations",
    ],
    process: IPM_PROCESS,
    signs: [
      "Ant trails to food or water sources",
      "Piles of fine sawdust (carpenter ants)",
      "Small dirt mounds along walkways",
      "Winged swarmers indoors in spring",
    ],
    faqs: [
      {
        question: "Why do the ants keep coming back?",
        answer:
          "Over-the-counter sprays kill workers but leave the colony intact — and can cause some species to 'bud' into multiple colonies. We bait the colony so the whole nest collapses.",
      },
      {
        question: "Do you treat carpenter ants?",
        answer:
          "Yes. Carpenter ants tunnel through wood and need a specialized approach. We locate the nest and treat it directly to prevent structural damage.",
      },
      {
        question: "How fast will I see results?",
        answer:
          "You'll usually notice a sharp drop within days. Baiting takes a little longer than spraying but delivers a far more complete, lasting result.",
      },
    ],
    keywords: [
      "ant control",
      "ant exterminator",
      "carpenter ant treatment",
      "get rid of ants",
    ],
  },
  {
    slug: "cockroaches",
    name: "Cockroach Control",
    shortName: "Cockroaches",
    icon: "bug",
    tagline: "Eliminate roaches and the health risks they bring",
    excerpt:
      "Thorough roach elimination that targets hidden harborage and breaks the breeding cycle.",
    intro:
      "Cockroaches trigger allergies and spread bacteria, and they breed fast in the warm, hidden spaces of your home. Our program combines precision baiting, growth regulators, and sanitation guidance to break the cycle for good.",
    included: [
      "Inspection of kitchens, baths, and hidden harborage",
      "Targeted gel baiting and crack-and-crevice treatment",
      "Insect growth regulators to stop reproduction",
      "Sanitation and exclusion recommendations",
      "Follow-up visits to confirm elimination",
    ],
    process: IPM_PROCESS,
    signs: [
      "Roaches scattering when lights turn on",
      "Pepper-like droppings in drawers and cabinets",
      "A musty, oily odor in heavy infestations",
      "Egg cases (oothecae) in dark crevices",
    ],
    faqs: [
      {
        question: "Why are roaches dangerous?",
        answer:
          "Roaches spread bacteria across food surfaces and their droppings and shed skins are a leading indoor allergen and asthma trigger — especially for kids.",
      },
      {
        question: "Will one treatment get rid of them?",
        answer:
          "Light infestations may clear quickly, but established populations need follow-up visits to catch newly hatched roaches and fully break the breeding cycle.",
      },
      {
        question: "What can I do to help?",
        answer:
          "Reduce food and water access — fix leaks, store food in sealed containers, and clean grease. We'll give you a simple, effective checklist.",
      },
    ],
    keywords: [
      "cockroach control",
      "roach exterminator",
      "german roach treatment",
      "get rid of roaches",
    ],
  },
  {
    slug: "spiders",
    name: "Spider Control",
    shortName: "Spiders",
    icon: "bug",
    tagline: "Fewer webs, fewer worries",
    excerpt:
      "Web removal and barrier treatments that keep spiders — including dangerous species — at bay.",
    intro:
      "Most spiders are harmless, but nobody wants webs in every corner — and some species pose a real risk. We knock down webs, treat harborage areas, and reduce the insect population spiders feed on so they move on.",
    included: [
      "De-webbing of eaves, corners, and entryways",
      "Perimeter barrier treatment",
      "Identification of dangerous species (widow, recluse)",
      "Reduction of prey insects that attract spiders",
      "Cracks, crevice, and void treatment",
    ],
    process: IPM_PROCESS,
    signs: [
      "Webs in corners, eaves, and window frames",
      "Egg sacs in undisturbed areas",
      "Frequent spider sightings indoors",
      "Other insects present (a spider food source)",
    ],
    faqs: [
      {
        question: "Do you treat for dangerous spiders?",
        answer:
          "Yes. If we find widow or recluse spiders, we treat harborage areas directly and advise you on reducing the clutter and gaps they favor.",
      },
      {
        question: "Why do I have so many spiders?",
        answer:
          "Spiders follow their food. If you have spiders, you likely have other insects — our program treats both, which is why results last.",
      },
      {
        question: "Will the webs come right back?",
        answer:
          "With recurring exterior service and barrier treatment, web activity drops sharply and stays low throughout the season.",
      },
    ],
    keywords: [
      "spider control",
      "spider exterminator",
      "web removal",
      "get rid of spiders",
    ],
  },
  {
    slug: "wasps-stinging-insects",
    name: "Wasps & Stinging Insects",
    shortName: "Wasps & Stinging",
    icon: "hexagon",
    tagline: "Safe nest removal so you can enjoy the outdoors",
    excerpt:
      "Fast, safe removal of wasp, hornet, and yellow-jacket nests around your home.",
    intro:
      "Wasps, hornets, and yellow jackets can turn a backyard dangerous fast — especially for anyone with an allergy. Our technicians safely locate and remove nests and treat active areas so you can reclaim your space.",
    included: [
      "Nest location and safe removal",
      "Treatment of active voids and eaves",
      "Yellow-jacket ground-nest treatment",
      "Preventive treatment of common nesting spots",
      "Return visits for stubborn colonies",
    ],
    process: IPM_PROCESS,
    signs: [
      "Visible nests under eaves, decks, or in shrubs",
      "Heavy wasp traffic around a single spot",
      "Buzzing inside walls or soffits",
      "Yellow jackets entering a hole in the ground",
    ],
    faqs: [
      {
        question: "Is nest removal dangerous?",
        answer:
          "It can be — disturbing a nest without training and protective gear risks multiple stings. Our technicians are equipped to handle it safely, so please don't attempt large nests yourself.",
      },
      {
        question: "How quickly can you come out?",
        answer:
          "Stinging-insect issues are a priority. We offer same-day service in many cases — call us and we'll get you on the schedule fast.",
      },
      {
        question: "Will they come back to the same spot?",
        answer:
          "We treat and remove the nest and apply preventive treatment to favored nesting areas to discourage rebuilding.",
      },
    ],
    keywords: [
      "wasp control",
      "hornet nest removal",
      "yellow jacket treatment",
      "stinging insect control",
    ],
  },
  {
    slug: "commercial-pest-control",
    name: "Commercial Pest Control",
    shortName: "Commercial",
    icon: "building",
    tagline: "Protect your business, your brand, and your bottom line",
    excerpt:
      "Discreet, compliance-ready pest management for restaurants, offices, retail, and property managers.",
    intro:
      "A single pest sighting can cost a business its reputation. We deliver discreet, documented, IPM-based commercial programs tailored to your industry — with the reporting and compliance support inspectors expect.",
    included: [
      "Custom facility assessment and service plan",
      "Scheduled recurring service with flexible timing",
      "Detailed logbooks and compliance documentation",
      "Rodent, insect, and stored-product pest programs",
      "Staff guidance on sanitation and exclusion",
      "Priority response for urgent issues",
    ],
    process: IPM_PROCESS,
    signs: [
      "Pest sightings in customer or prep areas",
      "Failed or flagged health inspections",
      "Droppings near storage or dumpsters",
      "Employee or customer complaints",
    ],
    faqs: [
      {
        question: "Do you service my industry?",
        answer:
          "We work with restaurants, food processing, retail, offices, warehouses, multi-family housing, and property managers. Every plan is tailored to your facility and compliance needs.",
      },
      {
        question: "Can you service after hours?",
        answer:
          "Yes. We schedule around your operations — including early mornings, evenings, and off-days — to stay out of your customers' way.",
      },
      {
        question: "Do you provide documentation for audits?",
        answer:
          "Absolutely. You'll receive detailed service logs and reporting to satisfy health inspectors and third-party auditors.",
      },
    ],
    keywords: [
      "commercial pest control",
      "restaurant pest control",
      "business exterminator",
      "commercial IPM",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
