export type FilterOption = { value: string; label: string };

export type FilterGroup = {
  id: string;
  label: string;
  options: FilterOption[];
};

/** Valeurs sélectionnées, indexées par id de groupe. */
export type FilterSelection = Record<string, string[]>;

export type ActiveFilter = {
  groupId: string;
  groupLabel: string;
  value: string;
  label: string;
};

export function countSelected(selection: FilterSelection): number {
  return Object.values(selection).reduce((n, values) => n + values.length, 0);
}

export function toggleValue(
  selection: FilterSelection,
  groupId: string,
  value: string,
): FilterSelection {
  const current = selection[groupId] ?? [];
  const next = current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];
  return { ...selection, [groupId]: next };
}

/** Aplatit la sélection en liste de chips à afficher, dans l'ordre des groupes. */
export function toActiveFilters(
  groups: FilterGroup[],
  selection: FilterSelection,
): ActiveFilter[] {
  return groups.flatMap((group) =>
    (selection[group.id] ?? []).map((value) => ({
      groupId: group.id,
      groupLabel: group.label,
      value,
      label: group.options.find((o) => o.value === value)?.label ?? value,
    })),
  );
}
