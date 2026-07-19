import type { SVGProps } from "react";

/**
 * Custom pest icons — lucide-react has no ant/cockroach/spider/flea/bee
 * marks (and its generic "Bug" only has 6 legs). These are drawn in the
 * same lucide stroke style so they sit consistently with the other icons.
 */

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** Ant — head + thorax + abdomen, six legs, antennae. */
export function AntIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11 3.4 9.4 1.9M13 3.4l1.6-1.5" />
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="10.5" r="2" />
      <ellipse cx="12" cy="16.6" rx="2.8" ry="3.4" />
      <path d="M10.2 9.2 6 7M10 10.6H5.6M10.2 12 6.4 14.2" />
      <path d="M13.8 9.2 18 7M14 10.6h4.4M13.8 12 17.6 14.2" />
    </svg>
  );
}

/** Cockroach — broad oval body, long antennae, six legs. */
export function CockroachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="13" rx="4.3" ry="6" />
      <ellipse cx="12" cy="6.6" rx="2" ry="1.6" />
      <path d="M10.6 5.4C8.6 3 6 2 4 2.6" />
      <path d="M13.4 5.4C15.4 3 18 2 20 2.6" />
      <path d="M12 8.6v8.8" />
      <path d="M7.9 10 4 8M7.8 13H3.6M7.9 16 4.4 18.6" />
      <path d="M16.1 10 20 8M16.2 13h4.2M16.1 16 19.6 18.6" />
    </svg>
  );
}

/** Spider — cephalothorax + abdomen, eight bent legs. */
export function SpiderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="1.8" />
      <circle cx="12" cy="13.6" r="3" />
      <path d="M10.3 8 6.5 5.5 5 6.6" />
      <path d="M10 9.4 5.4 8.6 3.9 10.2" />
      <path d="M9.6 11.2 5 11.7 3.8 13.7" />
      <path d="M9.9 13 6 15.2 5.3 17.4" />
      <path d="M13.7 8 17.5 5.5 19 6.6" />
      <path d="M14 9.4 18.6 8.6 20.1 10.2" />
      <path d="M14.4 11.2 19 11.7 20.2 13.7" />
      <path d="M14.1 13 18 15.2 18.7 17.4" />
    </svg>
  );
}

/** Flea — humped body in profile, antenna, and a large hind jumping leg. */
export function FleaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="13" cy="11" rx="4.6" ry="3.2" transform="rotate(-30 13 11)" />
      <circle cx="8.4" cy="13.6" r="1.4" />
      <path d="M7.4 12.4 5.9 11" />
      <path d="M7.3 14.7 6 16.2" />
      <path d="M10.2 14 9.2 18M12.6 13.6 12 18" />
      <path d="M16 12.8 17.2 16.4 14.6 18.4" />
      <path d="M15 14.4 16.2 18" />
    </svg>
  );
}

/** Bee — striped body, wings, antennae. */
export function BeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10.5 6.5C9.8 4.8 8.6 4 7 4" />
      <path d="M13.5 6.5C14.2 4.8 15.4 4 17 4" />
      <ellipse cx="7.6" cy="9.4" rx="3" ry="2.1" />
      <ellipse cx="16.4" cy="9.4" rx="3" ry="2.1" />
      <ellipse cx="12" cy="13.5" rx="4" ry="6" />
      <path d="M8.2 12h7.6" />
      <path d="M8.4 15.5h7.2" />
      <path d="M10 19h4" />
    </svg>
  );
}
