# library-ui

Composants React + TypeScript pour le panneau **Library**, avec les tokens de la maquette Figma
(fonds `#121212` / `#303030` / `#464646`, rayons 16/12 px, Open Sans, dégradés bleu et « eureka »).

```bash
npm install
npm run dev     # démo sur http://localhost:5173
npm run build   # typecheck + build
```

## Composants (`src/components`)

| Composant | Rôle |
|---|---|
| `ImageCarousel` | Carousel horizontal (scroll-snap, swipe natif), boutons précédent/suivant, points de pagination, navigation clavier ← →, état vide. |
| `SearchBar` | Champ de recherche avec bouton d'effacement et bouton **Filtres** (badge du nombre de filtres actifs) qui ouvre un panneau de filtres multi-sélection. Le panneau se ferme avec Échap ou un clic à l'extérieur. |
| `ActiveFiltersBar` | Chips des filtres actifs (`Groupe : Valeur ×`), défilement horizontal, compteur de résultats, « Tout effacer ». Ne rend rien quand aucun filtre n'est actif. |

Les tokens sont dans `src/styles/tokens.css` ; `src/App.tsx` montre comment assembler les trois composants.

```tsx
const [query, setQuery] = useState("");
const [selection, setSelection] = useState<FilterSelection>({});

<SearchBar value={query} onChange={setQuery}
  filterGroups={groups} selectedFilters={selection} onSelectedFiltersChange={setSelection} />

<ActiveFiltersBar filters={toActiveFilters(groups, selection)} resultCount={items.length}
  onRemove={(f) => setSelection((s) => toggleValue(s, f.groupId, f.value))}
  onClearAll={() => setSelection({})} />

<ImageCarousel title="Récents" items={items} onSelect={(item) => …} />
```
