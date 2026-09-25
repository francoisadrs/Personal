import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckIcon, CloseIcon, FilterIcon, SearchIcon } from "../icons";
import { countSelected, toggleValue, type FilterGroup, type FilterSelection } from "../filters";
import "./SearchBar.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Groupes proposés dans le panneau de filtres. Sans groupes, le bouton filtre est masqué. */
  filterGroups?: FilterGroup[];
  selectedFilters?: FilterSelection;
  onSelectedFiltersChange?: (selection: FilterSelection) => void;
};

export function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Rechercher dans la bibliothèque",
  filterGroups = [],
  selectedFilters = {},
  onSelectedFiltersChange,
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const activeCount = countSelected(selectedFilters);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        filterButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.(value);
  };

  const clearQuery = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="search" ref={rootRef}>
      <form className="search__bar" role="search" onSubmit={handleSubmit}>
        <SearchIcon className="search__icon" size={20} />
        <input
          ref={inputRef}
          className="search__input"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            className="search__clear"
            onClick={clearQuery}
            aria-label="Effacer la recherche"
          >
            <CloseIcon size={16} />
          </button>
        )}
        {filterGroups.length > 0 && (
          <button
            ref={filterButtonRef}
            type="button"
            className="search__filter-button"
            data-active={activeCount > 0 || open}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={activeCount > 0 ? `Filtres (${activeCount} actifs)` : "Filtres"}
          >
            <FilterIcon size={20} />
            {activeCount > 0 && <span className="search__badge">{activeCount}</span>}
          </button>
        )}
      </form>

      {open && (
        <div id={panelId} className="search__panel" role="dialog" aria-label="Filtres">
          {filterGroups.map((group) => (
            <fieldset key={group.id} className="search__group">
              <legend className="search__group-label">{group.label}</legend>
              <div className="search__options">
                {group.options.map((option) => {
                  const checked = selectedFilters[group.id]?.includes(option.value) ?? false;
                  return (
                    <label key={option.value} className="search__option" data-checked={checked}>
                      <input
                        type="checkbox"
                        className="search__option-input"
                        checked={checked}
                        onChange={() =>
                          onSelectedFiltersChange?.(
                            toggleValue(selectedFilters, group.id, option.value),
                          )
                        }
                      />
                      {checked && <CheckIcon size={14} />}
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="search__panel-footer">
            <button
              type="button"
              className="search__text-button"
              onClick={() => onSelectedFiltersChange?.({})}
              disabled={activeCount === 0}
            >
              Réinitialiser
            </button>
            <button
              type="button"
              className="search__primary-button"
              onClick={() => {
                setOpen(false);
                filterButtonRef.current?.focus();
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
