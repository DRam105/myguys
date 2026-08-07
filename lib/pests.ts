/**
 * Pest Library — educational SEO knowledge base.
 * Drives /pests and /pests/[slug]. `relatedService` links each
 * pest to the service page that treats it.
 */

export type Pest = {
  slug: string;
  name: string;
  icon: string;
  /** Short label e.g. "Insect" | "Rodent". */
  category: string;
  excerpt: string;
  intro: string;
  identification: string[];
  habitsAndDangers: string[];
  prevention: string[];
  /** Slug of the related service in lib/services.ts */
  relatedService: string;
  keywords: string[];
};

export const pests: Pest[] = [
  {
    slug: "ants",
    name: "Ants",
    icon: "ant",
    category: "Insect",
    excerpt:
      "The #1 nuisance pest in America — and some species damage wood or bite.",
    intro:
      "Ants are social insects that live in large colonies and forage relentlessly for food and water. While most are simply a nuisance, carpenter ants damage wood and certain species can bite or sting.",
    identification: [
      "Segmented bodies with a pinched waist and bent antennae",
      "Size ranges from tiny (2mm) to large carpenter ants (12mm+)",
      "Colors from light brown to black or red",
      "Often seen in long foraging trails to food sources",
    ],
    habitsAndDangers: [
      "Colonies can number in the tens of thousands",
      "Contaminate food and surfaces as they forage",
      "Carpenter ants tunnel through and weaken wood",
      "Some species (like fire ants) deliver painful stings",
    ],
    prevention: [
      "Wipe up spills and store food in sealed containers",
      "Fix leaks and reduce moisture indoors",
      "Seal cracks and gaps around windows and doors",
      "Trim vegetation touching the house",
    ],
    relatedService: "ants",
    keywords: ["ants identification", "ant prevention", "carpenter ants"],
  },
  {
    slug: "termites",
    name: "Termites",
    icon: "termite",
    category: "Insect",
    excerpt:
      "Silent destroyers that cause billions in structural damage each year.",
    intro:
      "Termites feed on cellulose in wood and can quietly compromise a home's structure long before they're noticed. Subterranean termites — the most common type — build mud tubes from the soil to their food source.",
    identification: [
      "Straight antennae and a broad waist (unlike ants)",
      "Swarmers have two pairs of equal-length wings",
      "Creamy-white workers stay hidden inside wood or soil",
      "Mud tubes on foundations are a telltale sign",
    ],
    habitsAndDangers: [
      "Feed 24/7 on wood, flooring, and even paper",
      "Cause damage that's usually not covered by insurance",
      "Colonies can contain hundreds of thousands of members",
      "Often go undetected until damage is significant",
    ],
    prevention: [
      "Keep wood, mulch, and soil away from the foundation",
      "Fix moisture problems and improve drainage",
      "Store firewood away from the house",
      "Schedule annual professional termite inspections",
    ],
    relatedService: "termite-control",
    keywords: ["termite signs", "termite damage", "subterranean termites"],
  },
  {
    slug: "cockroaches",
    name: "Cockroaches",
    icon: "cockroach",
    category: "Insect",
    excerpt:
      "Fast-breeding disease carriers and a leading indoor allergy trigger.",
    intro:
      "Cockroaches thrive in warm, humid, hidden spaces and reproduce rapidly. They spread bacteria across surfaces and their droppings and shed skins are a major asthma and allergy trigger.",
    identification: [
      "Oval, flattened bodies with long antennae",
      "Colors from light brown (German) to reddish-brown (American)",
      "German roaches are small (~½ inch); American roaches larger",
      "Leave pepper-like droppings and egg cases in crevices",
    ],
    habitsAndDangers: [
      "Spread bacteria including Salmonella and E. coli",
      "Trigger asthma and allergies, especially in children",
      "Breed extremely quickly in hidden harborage",
      "Most active at night, scattering when lights turn on",
    ],
    prevention: [
      "Keep kitchens clean and grease-free",
      "Store food in sealed containers and take out trash often",
      "Fix leaks and eliminate standing water",
      "Seal cracks around pipes, cabinets, and baseboards",
    ],
    relatedService: "cockroaches",
    keywords: ["cockroach identification", "german cockroach", "roach allergens"],
  },
  {
    slug: "rodents",
    name: "Rodents",
    icon: "rodent",
    category: "Rodent",
    excerpt:
      "Mice and rats contaminate food, chew wiring, and spread disease.",
    intro:
      "Mice and rats are prolific breeders that seek warmth, food, and shelter inside homes — especially as temperatures drop. They gnaw constantly, damaging wiring and structures, and carry serious diseases.",
    identification: [
      "Mice are small (2–4 in.) with large ears; rats are larger",
      "Droppings are dark, rod-shaped, and concentrated near food",
      "Gnaw marks on packaging, wood, and wiring",
      "Greasy rub marks along frequently traveled walls",
    ],
    habitsAndDangers: [
      "Chew electrical wiring, creating fire hazards",
      "Contaminate food and surfaces with droppings and urine",
      "Spread diseases like hantavirus and salmonellosis",
      "A single pair can produce dozens of offspring a year",
    ],
    prevention: [
      "Seal gaps larger than a dime around the exterior",
      "Store food and pet food in airtight containers",
      "Keep garages and attics clutter-free",
      "Trim branches away from the roofline",
    ],
    relatedService: "rodent-control",
    keywords: ["mouse control", "rat signs", "rodent droppings"],
  },
  {
    slug: "bed-bugs",
    name: "Bed Bugs",
    icon: "bedbug",
    category: "Insect",
    excerpt:
      "Hitchhiking bloodsuckers that spread fast and are tough to eliminate.",
    intro:
      "Bed bugs are small, reddish-brown insects that feed on blood at night and hide in mattress seams, furniture, and cracks by day. They spread by hitchhiking on luggage, clothing, and used furniture.",
    identification: [
      "Flat, oval, reddish-brown bodies about the size of an apple seed",
      "Rusty or dark spots on sheets and mattress seams",
      "Tiny pale eggs and shed skins in crevices",
      "Bites often appear in lines or clusters",
    ],
    habitsAndDangers: [
      "Feed on blood, usually at night",
      "Multiply quickly and spread room to room",
      "Cause itching, welts, and significant stress",
      "Notoriously difficult to eliminate without professionals",
    ],
    prevention: [
      "Inspect hotel rooms and used furniture before bringing items home",
      "Keep luggage off beds and floors while traveling",
      "Use protective encasements on mattresses",
      "Reduce clutter that provides hiding spots",
    ],
    relatedService: "bed-bugs",
    keywords: ["bed bug signs", "bed bug bites", "bed bug identification"],
  },
  {
    slug: "mosquitoes",
    name: "Mosquitoes",
    icon: "mosquito",
    category: "Insect",
    excerpt:
      "The deadliest animal on earth — vectors for numerous diseases.",
    intro:
      "Mosquitoes breed in standing water and are most active at dawn and dusk. Beyond itchy bites, they transmit diseases like West Nile virus, making population control an important part of protecting your family.",
    identification: [
      "Slender bodies with long legs and a needle-like proboscis",
      "Females bite; males feed on nectar",
      "Larvae ('wrigglers') develop in standing water",
      "Most active at dawn and dusk",
    ],
    habitsAndDangers: [
      "Transmit West Nile, Zika, and other diseases",
      "Breed in as little as a bottle-cap of standing water",
      "Populations explode in warm, humid weather",
      "Bites cause itching and allergic reactions",
    ],
    prevention: [
      "Eliminate standing water in gutters, planters, and toys",
      "Change birdbath and pet-bowl water frequently",
      "Keep grass and shrubs trimmed",
      "Use screens and treat harborage areas seasonally",
    ],
    relatedService: "mosquito-tick",
    keywords: ["mosquito control", "mosquito breeding", "mosquito bites"],
  },
  {
    slug: "spiders",
    name: "Spiders",
    icon: "spider",
    category: "Arachnid",
    excerpt:
      "Mostly harmless, but a few species pose a real danger to people.",
    intro:
      "Spiders help control other insects, but webs and sightings are unwelcome indoors — and widow and recluse spiders can deliver a medically significant bite. Where there are spiders, there's usually a food source of other insects.",
    identification: [
      "Eight legs and two body segments (no antennae)",
      "Black widows: shiny black with a red hourglass",
      "Brown recluses: tan with a violin-shaped marking",
      "Webs in corners, eaves, and undisturbed areas",
    ],
    habitsAndDangers: [
      "Most species are harmless and beneficial",
      "Widow and recluse bites can require medical care",
      "Indicate a supply of prey insects nearby",
      "Egg sacs can produce hundreds of spiderlings",
    ],
    prevention: [
      "Reduce clutter in garages, basements, and closets",
      "Seal cracks and install door sweeps",
      "Remove webs regularly",
      "Control the insects spiders feed on",
    ],
    relatedService: "spiders",
    keywords: ["spider identification", "black widow", "brown recluse"],
  },
  {
    slug: "wasps",
    name: "Wasps & Hornets",
    icon: "wasp",
    category: "Insect",
    excerpt:
      "Aggressive stingers that can be dangerous — especially near nests.",
    intro:
      "Wasps, hornets, and yellow jackets build nests under eaves, in shrubs, and underground. Unlike bees, they can sting repeatedly, and disturbing a nest can provoke an aggressive, dangerous response.",
    identification: [
      "Slender bodies with a narrow waist",
      "Paper wasps build open, umbrella-shaped nests",
      "Yellow jackets nest in the ground or wall voids",
      "Hornets build large, enclosed paper nests",
    ],
    habitsAndDangers: [
      "Can sting repeatedly, unlike honeybees",
      "Aggressively defend their nests",
      "Stings are dangerous to those with allergies",
      "Colonies grow rapidly through summer",
    ],
    prevention: [
      "Seal entry points into eaves and wall voids",
      "Keep trash covered and clean up food outdoors",
      "Inspect for early-season nests and act quickly",
      "Never disturb a large nest yourself",
    ],
    relatedService: "wasps-stinging-insects",
    keywords: ["wasp nest", "yellow jackets", "hornet identification"],
  },
  {
    slug: "ticks",
    name: "Ticks",
    icon: "tick",
    category: "Arachnid",
    excerpt:
      "Blood-feeding arachnids that transmit Lyme disease and more.",
    intro:
      "Ticks wait in tall grass and wooded edges for a host to brush by. They attach and feed on blood, and can transmit Lyme disease and other illnesses to people and pets.",
    identification: [
      "Eight legs and a small, teardrop-shaped body",
      "Engorge and darken after feeding on blood",
      "Common species include deer ticks and dog ticks",
      "Often found on pets, ankles, and hairlines",
    ],
    habitsAndDangers: [
      "Transmit Lyme disease and other tick-borne illnesses",
      "Attach and feed unnoticed for days",
      "Thrive along wood lines and in tall grass",
      "Hitch rides indoors on pets and clothing",
    ],
    prevention: [
      "Keep grass short and create a barrier from wood lines",
      "Check pets and family after time outdoors",
      "Wear repellent and long clothing in wooded areas",
      "Treat yard edges and harborage seasonally",
    ],
    relatedService: "mosquito-tick",
    keywords: ["tick control", "deer ticks", "lyme disease prevention"],
  },
  {
    slug: "fleas",
    name: "Fleas",
    icon: "flea",
    category: "Insect",
    excerpt:
      "Tiny biting pests that infest pets, carpets, and bedding fast.",
    intro:
      "Fleas are tiny, wingless insects that feed on the blood of pets and people. They reproduce explosively, and an untreated infestation quickly spreads through carpets, furniture, and bedding.",
    identification: [
      "Very small (1–3mm), dark, and laterally flattened",
      "Jump impressive distances rather than fly",
      "'Flea dirt' (dark specks) in pet fur and bedding",
      "Itchy bites, often around ankles",
    ],
    habitsAndDangers: [
      "A single flea can bite hundreds of times a day",
      "Reproduce rapidly — eggs fall off pets into carpet",
      "Cause itching, allergies, and can transmit tapeworm",
      "Infestations persist without treating the environment",
    ],
    prevention: [
      "Keep pets on veterinarian-recommended flea prevention",
      "Vacuum carpets and wash pet bedding frequently",
      "Treat both the pet and the home together",
      "Mow the lawn and reduce shady, moist yard areas",
    ],
    relatedService: "general-pest-control",
    keywords: ["flea control", "flea infestation", "flea dirt"],
  },
];

export function getPest(slug: string): Pest | undefined {
  return pests.find((p) => p.slug === slug);
}

export function getPestSlugs(): string[] {
  return pests.map((p) => p.slug);
}
