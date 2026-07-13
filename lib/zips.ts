/**
 * Placeholder served-ZIP list for the client-side ZIP checker.
 * TODO: Replace with your real service-area ZIP codes.
 */

export const servedZips: string[] = [
  // North County San Diego
  "92008", "92009", "92010", "92011", // Carlsbad
  "92054", "92056", "92057", "92058", // Oceanside
  "92081", "92083", "92084", // Vista
  "92069", "92078", // San Marcos
  "92025", "92026", "92027", "92029", // Escondido
  "92024", // Encinitas
  "92007", // Cardiff
  "92014", // Del Mar
  "92075", // Solana Beach
  "92067", "92091", // Rancho Santa Fe
  "92003", "92028", // Bonsall / Fallbrook
  "92127", "92128", // Rancho Bernardo / 4S Ranch
  "92064", // Poway
  // Temecula & Murrieta (SW Riverside County)
  "92590", "92591", "92592", // Temecula
  "92562", "92563", // Murrieta
  "92595", // Wildomar
  "92584", "92585", "92586", "92587", // Menifee
  "92530", "92531", "92532", // Lake Elsinore
];

/** Cities/neighborhoods shown on the service-area page. */
export const servedCities: string[] = [
  "Carlsbad",
  "Oceanside",
  "Vista",
  "San Marcos",
  "Escondido",
  "Encinitas",
  "Del Mar",
  "Solana Beach",
  "Rancho Santa Fe",
  "Fallbrook",
  "Temecula",
  "Murrieta",
  "Wildomar",
  "Menifee",
  "Lake Elsinore",
];

export type ZipResult =
  | { status: "served"; zip: string }
  | { status: "nearby"; zip: string }
  | { status: "invalid" };

/** Validate + check a ZIP against the served list (client-side). */
export function checkZip(input: string): ZipResult {
  const zip = input.trim();
  if (!/^\d{5}$/.test(zip)) return { status: "invalid" };
  if (servedZips.includes(zip)) return { status: "served", zip };
  return { status: "nearby", zip };
}
