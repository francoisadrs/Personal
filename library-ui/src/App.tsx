import { useMemo, useState } from "react";
import {
  ActiveFiltersBar,
  ImageCarousel,
  SearchBar,
  toActiveFilters,
  toggleValue,
  type FilterSelection,
} from "./components";
import { LibraryIcon } from "./components/icons";
import { assets, filterGroups } from "./demoData";
import "./App.css";

export function App() {
  const [query, setQuery] = useState("");
  const [selection, setSelection] = useState<FilterSelection>({});

  const activeFilters = toActiveFilters(filterGroups, selection);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return assets.filter((asset) => {
      if (q && !asset.title?.toLowerCase().includes(q)) return false;
      const types = selection.type ?? [];
      const styles = selection.style ?? [];
      if (types.length && !types.includes(asset.type)) return false;
      if (styles.length && !styles.includes(asset.style)) return false;
      return true;
    });
  }, [query, selection]);

  return (
    <div className="stage">
      <aside className="library-panel">
        <header className="library-panel__top-bar">
          <span className="library-panel__title">
            <LibraryIcon size={20} />
            Library
          </span>
        </header>

        <div className="library-panel__content">
          <SearchBar
            value={query}
            onChange={setQuery}
            filterGroups={filterGroups}
            selectedFilters={selection}
            onSelectedFiltersChange={setSelection}
          />

          <ActiveFiltersBar
            filters={activeFilters}
            resultCount={results.length}
            onRemove={(f) => setSelection((s) => toggleValue(s, f.groupId, f.value))}
            onClearAll={() => setSelection({})}
          />

          <ImageCarousel
            title="Récents"
            items={results}
            emptyLabel="Aucun résultat pour cette recherche"
            onSelect={(item) => console.log("Sélection :", item.title)}
          />
        </div>
      </aside>
    </div>
  );
}
