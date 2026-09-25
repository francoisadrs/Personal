import type { CarouselItem, FilterGroup } from "./components";

export type LibraryAsset = CarouselItem & { type: string; style: string };

export const filterGroups: FilterGroup[] = [
  {
    id: "type",
    label: "Type",
    options: [
      { value: "character", label: "Personnage" },
      { value: "scene", label: "Décor" },
      { value: "object", label: "Objet" },
    ],
  },
  {
    id: "style",
    label: "Style",
    options: [
      { value: "3d", label: "3D" },
      { value: "illustration", label: "Illustration" },
      { value: "photo", label: "Photo" },
    ],
  },
];

// Visuels de démonstration générés en SVG pour rester hors-ligne.
function placeholder(label: string, from: string, to: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
<defs><linearGradient id="g" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>
<rect width="400" height="500" fill="url(#g)"/>
<circle cx="200" cy="210" r="90" fill="#fff" fill-opacity="0.18"/>
<text x="200" y="420" font-family="Open Sans, sans-serif" font-size="30" font-weight="700" fill="#fff" text-anchor="middle">${label}</text>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const raw: Array<[string, string, string, string, string, string]> = [
  ["1", "Jeune femme 3D", "character", "3d", "#1D4ED8", "#377CF3"],
  ["2", "Tenue casual", "character", "illustration", "#818BFD", "#EF7AC5"],
  ["3", "Atelier lumineux", "scene", "photo", "#6CE0B1", "#377CF3"],
  ["4", "Robot assistant", "object", "3d", "#464646", "#818BFD"],
  ["5", "Rue au crépuscule", "scene", "illustration", "#EF7AC5", "#1D4ED8"],
  ["6", "Lampe de bureau", "object", "photo", "#303030", "#6CE0B1"],
  ["7", "Portrait studio", "character", "photo", "#377CF3", "#EF7AC5"],
  ["8", "Salle de concert", "scene", "3d", "#1D4ED8", "#6CE0B1"],
];

const typeLabel = Object.fromEntries(filterGroups[0].options.map((o) => [o.value, o.label]));
const styleLabel = Object.fromEntries(filterGroups[1].options.map((o) => [o.value, o.label]));

export const assets: LibraryAsset[] = raw.map(([id, title, type, style, from, to]) => ({
  id,
  title,
  type,
  style,
  subtitle: `${typeLabel[type]} · ${styleLabel[style]}`,
  alt: title,
  src: placeholder(title, from, to),
}));
