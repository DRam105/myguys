import {
  Bug,
  House,
  Mouse,
  Droplet,
  BedDouble,
  Hexagon,
  Building2,
  ShieldCheck,
  Leaf,
  Clock,
  Zap,
  Award,
  Users,
  MapPin,
  Star,
  Search,
  ClipboardCheck,
  SprayCan,
  type LucideProps,
} from "lucide-react";

/**
 * Curated icon map so data files can reference icons by string key
 * (keeping data serializable) without bundling all of lucide-react.
 */
const iconMap = {
  bug: Bug,
  house: House,
  mouse: Mouse,
  droplet: Droplet,
  bedDouble: BedDouble,
  hexagon: Hexagon,
  building: Building2,
  shield: ShieldCheck,
  leaf: Leaf,
  clock: Clock,
  zap: Zap,
  award: Award,
  users: Users,
  mapPin: MapPin,
  star: Star,
  search: Search,
  clipboard: ClipboardCheck,
  spray: SprayCan,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Cmp = iconMap[name] ?? Bug;
  return <Cmp {...props} />;
}
