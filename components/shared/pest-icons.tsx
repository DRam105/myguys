import type { SVGProps } from "react";

/**
 * Refined line-art pest icons drawn in the lucide stroke style (24×24,
 * currentColor, ~1.5 stroke) so they sit consistently with the rest of the
 * UI icons — but with realistic, anatomically-correct silhouettes (proper
 * leg counts, body segments) rather than generic/childish marks.
 *
 * Consumed by the home "What We Treat" grid and the Pest Library grid.
 * Resolve by string key with <PestIcon name="..." />.
 */

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** Ant — head, thorax, teardrop abdomen, six legs, antennae (top view). */
export function AntIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11 3.8Q9.9 2.7 9.2 2M13 3.8Q14.1 2.7 14.8 2" />
      <circle cx="12" cy="5.1" r="1.5" />
      <ellipse cx="12" cy="9.1" rx="1.4" ry="1.8" />
      <ellipse cx="12" cy="14.6" rx="2.5" ry="3.3" />
      <path d="M10.6 8 7.5 6.5 6 7.2M10.3 9.4 6.8 9.4 5.4 10.4M10.6 10.9 7.4 12.5 6.4 13.7" />
      <path d="M13.4 8 16.5 6.5 18 7.2M13.7 9.4 17.2 9.4 18.6 10.4M13.4 10.9 16.6 12.5 17.6 13.7" />
    </svg>
  );
}

/** Termite — broad connected body, mandibles, straight antennae, six legs. */
export function TermiteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.7 4.3 9.6 3.3M13.3 4.3 14.4 3.3" />
      <path d="M11.1 3.9 10.5 2.2M12.9 3.9 13.5 2.2" />
      <ellipse cx="12" cy="5.4" rx="1.9" ry="1.6" />
      <ellipse cx="12" cy="9.4" rx="1.7" ry="2" />
      <ellipse cx="12" cy="15" rx="2.1" ry="3.3" />
      <path d="M10.5 8.4 7.6 7.2M10.3 9.9 7 9.9M10.5 11.4 7.4 12.7" />
      <path d="M13.5 8.4 16.4 7.2M13.7 9.9 17 9.9M13.5 11.4 16.6 12.7" />
    </svg>
  );
}

/** Cockroach — broad flat body, pronotum shield, long swept antennae, six spiny legs. */
export function CockroachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.4 5.6C7.2 3.6 5.2 2.7 3.4 2.5M13.6 5.6C16.8 3.6 18.8 2.7 20.6 2.5" />
      <ellipse cx="12" cy="6.4" rx="2.4" ry="1.7" />
      <ellipse cx="12" cy="13.4" rx="4" ry="5.6" />
      <path d="M12 8.4 12 18.6" />
      <path d="M8.6 10 5 8.4M8.2 13 4.2 13M8.6 16 5.2 18.4" />
      <path d="M15.4 10 19 8.4M15.8 13 19.8 13M15.4 16 18.8 18.4" />
    </svg>
  );
}

/** Rodent — mouse/rat side profile: rounded body, ear, snout, long curved tail. */
export function RodentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="13.6" cy="13.6" rx="5" ry="4" />
      <circle cx="7.4" cy="11.7" r="2.7" />
      <circle cx="6.7" cy="8.9" r="1.2" />
      <path d="M4.9 12.1 3.1 12.7" />
      <circle cx="6.1" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
      <path d="M18.3 14.4C20.9 15 21.4 11.4 19 10" />
      <path d="M10.2 17.4 10.2 18.9M14.6 17.6 14.6 19.1" />
    </svg>
  );
}

/** Bed bug — wide flat oval body, segment lines, small head, six short legs. */
export function BedBugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.6 7.9 9.2 6.7M13.4 7.9 14.8 6.7" />
      <path d="M9.8 9.4 14.2 9.4 13.4 7.8 10.6 7.8Z" />
      <ellipse cx="12" cy="13.2" rx="4.4" ry="3.9" />
      <path d="M12 9.7 12 16.9" />
      <path d="M8.1 12.4Q12 13.4 15.9 12.4M8.1 14.6Q12 15.5 15.9 14.6" />
      <path d="M8.2 11.4 6 10.4M7.8 13.2 5.6 13.2M8.2 15 6.2 16.1" />
      <path d="M15.8 11.4 18 10.4M16.2 13.2 18.4 13.2M15.8 15 17.8 16.1" />
    </svg>
  );
}

/** Mosquito — slender body, long proboscis, two wings, six long dangling legs. */
export function MosquitoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10 6.4 6.4 3.2M10.1 6.7 7.9 4.6" />
      <circle cx="10.7" cy="6.9" r="1.1" />
      <circle cx="11.6" cy="9.1" r="1.4" />
      <ellipse cx="13.6" cy="13.6" rx="1.3" ry="4" transform="rotate(28 13.6 13.6)" />
      <ellipse cx="13.6" cy="9.4" rx="3.4" ry="1.4" transform="rotate(30 13.6 9.4)" />
      <ellipse cx="12.4" cy="10.2" rx="3.2" ry="1.3" transform="rotate(14 12.4 10.2)" />
      <path d="M10.6 10 6.5 12 5 15M11.4 10.6 8 14 7.5 17.5M12 11 10 15 11 18" />
      <path d="M13.2 11.4 15.6 15 15 18M13.6 10.8 16.2 13.2 18.2 13.6" />
    </svg>
  );
}

/** Spider — cephalothorax + round abdomen, eight two-jointed bent legs. */
export function SpiderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9.8" r="1.6" />
      <circle cx="12" cy="14.4" r="3" />
      <path d="M10.6 8.8 7 6.8 4.8 7.4M10.2 10.2 6 9.4 3.8 10.6M10.3 11.8 6.1 11.8 4.1 13.4M10.7 13.3 6.9 15.4 5.5 17.5" />
      <path d="M13.4 8.8 17 6.8 19.2 7.4M13.8 10.2 18 9.4 20.2 10.6M13.7 11.8 17.9 11.8 19.9 13.4M13.3 13.3 17.1 15.4 18.5 17.5" />
    </svg>
  );
}

/** Wasp — head, thorax, pinched "wasp waist", pointed striped abdomen, wings, stinger. */
export function WaspIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11.2 3.6 10.4 2M12.8 3.6 13.6 2" />
      <circle cx="12" cy="4.7" r="1.4" />
      <ellipse cx="8.9" cy="8" rx="2.7" ry="1.3" transform="rotate(-22 8.9 8)" />
      <ellipse cx="15.1" cy="8" rx="2.7" ry="1.3" transform="rotate(22 15.1 8)" />
      <ellipse cx="12" cy="8" rx="1.8" ry="1.9" />
      <path d="M12 10 12 11" />
      <path d="M12 11C14 12 14.6 15 12 19 9.4 15 10 12 12 11Z" />
      <path d="M10.1 13.6 13.9 13.6M10.4 16 13.6 16" />
      <path d="M10.4 8.6 8.4 10M10.6 9.8 9 11.6" />
      <path d="M13.6 8.6 15.6 10M13.4 9.8 15 11.6" />
    </svg>
  );
}

/** Bee — rounded striped body, two wings, antennae, six legs. */
export function BeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11.2 3.8 10.2 2.4M12.8 3.8 13.8 2.4" />
      <circle cx="12" cy="5" r="1.4" />
      <ellipse cx="8.9" cy="7.6" rx="2.5" ry="1.5" transform="rotate(-28 8.9 7.6)" />
      <ellipse cx="15.1" cy="7.6" rx="2.5" ry="1.5" transform="rotate(28 15.1 7.6)" />
      <ellipse cx="12" cy="13.6" rx="3" ry="4.6" />
      <path d="M9.2 11.4 14.8 11.4M9 14.4 15 14.4M10.6 17.4 13.4 17.4" />
      <path d="M9.4 9.6 7.8 10.6M9.2 11 7.4 12M9.6 12.6 8 14" />
      <path d="M14.6 9.6 16.2 10.6M14.8 11 16.6 12M14.4 12.6 16 14" />
    </svg>
  );
}

/** Tick — teardrop body, mouth-part head, eight legs clustered near the front. */
export function TickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.8 8.4 13.2 8.4 12.6 6.6 11.4 6.6Z" />
      <ellipse cx="12" cy="13.6" rx="3.8" ry="4.7" />
      <path d="M9.6 11.2Q12 12.9 14.4 11.2" />
      <path d="M9.1 9.6 6.3 8.4M8.9 10.9 6 10.5M8.9 12.2 6.1 12.5M9.3 13.4 6.7 14.4" />
      <path d="M14.9 9.6 17.7 8.4M15.1 10.9 18 10.5M15.1 12.2 17.9 12.5M14.7 13.4 17.3 14.4" />
    </svg>
  );
}

/** Flea — humped body in profile, antenna, and a large hind jumping leg. */
export function FleaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12.6" cy="11" rx="4.2" ry="3" transform="rotate(-28 12.6 11)" />
      <circle cx="8.6" cy="13.4" r="1.3" />
      <path d="M7.6 14.4 6.2 15.6" />
      <path d="M8 12.3 6.7 11.1" />
      <path d="M9.7 15 9.1 18M11.7 14.6 11.5 18.4" />
      <path d="M15 13 16.7 16.4 14 18.7" />
    </svg>
  );
}

/** String-keyed registry so data files can reference a pest icon by name. */
export const pestIcons = {
  ant: AntIcon,
  termite: TermiteIcon,
  cockroach: CockroachIcon,
  rodent: RodentIcon,
  bedbug: BedBugIcon,
  mosquito: MosquitoIcon,
  spider: SpiderIcon,
  wasp: WaspIcon,
  bee: BeeIcon,
  tick: TickIcon,
  flea: FleaIcon,
} as const;

export type PestIconName = keyof typeof pestIcons;

/** Resolve a pest icon by string key (falls back to the ant mark). */
export function PestIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Cmp = pestIcons[name as PestIconName] ?? AntIcon;
  return <Cmp {...props} />;
}
