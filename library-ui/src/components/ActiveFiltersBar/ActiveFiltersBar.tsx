import { CloseIcon } from "../icons";
import type { ActiveFilter } from "../filters";
import "./ActiveFiltersBar.css";

type ActiveFiltersBarProps = {
  filters: ActiveFilter[];
  onRemove: (filter: ActiveFilter) => void;
  onClearAll?: () => void;
  /** Nombre de résultats à afficher à droite (optionnel). */
  resultCount?: number;
};

export function ActiveFiltersBar({
  filters,
  onRemove,
  onClearAll,
  resultCount,
}: ActiveFiltersBarProps) {
  if (filters.length === 0) return null;

  return (
    <div className="active-filters" role="region" aria-label="Filtres actifs">
      <ul className="active-filters__list">
        {filters.map((filter) => (
          <li key={`${filter.groupId}:${filter.value}`}>
            <span className="active-filters__chip">
              <span className="active-filters__group">{filter.groupLabel}</span>
              <span className="active-filters__label">{filter.label}</span>
              <button
                type="button"
                className="active-filters__remove"
                onClick={() => onRemove(filter)}
                aria-label={`Retirer le filtre ${filter.groupLabel} : ${filter.label}`}
              >
                <CloseIcon size={14} />
              </button>
            </span>
          </li>
        ))}
      </ul>

      <div className="active-filters__meta">
        {resultCount !== undefined && (
          <span className="active-filters__count" aria-live="polite">
            {resultCount} résultat{resultCount > 1 ? "s" : ""}
          </span>
        )}
        {onClearAll && filters.length > 1 && (
          <button type="button" className="active-filters__clear" onClick={onClearAll}>
            Tout effacer
          </button>
        )}
      </div>
    </div>
  );
}
