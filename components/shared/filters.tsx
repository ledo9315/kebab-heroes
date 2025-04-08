"use client";

import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const { ingredients, loading, selectedIds, onToggleId } =
    useFilterIngredients();

  const ingredientItems = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  console.log("ingredients", selectedIds);

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      {/* Upper Checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Zusammenstellen" value="zsm" />
        <FilterCheckbox text="Neu" value="neu" />
      </div>

      {/* Filter by Price Inputs */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Preisfilter:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={24}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={24}
            defaultValue={0}
          />
        </div>

        {/* Slider */}
        <RangeSlider min={0} max={24} step={0.01} value={[0, 24]} />
      </div>

      {/* Ingredients */}
      <CheckboxFiltersGroup
        title="Zutaten"
        items={ingredientItems}
        defaultItems={ingredientItems.slice(0, 6)}
        limit={6}
        className="mt-5"
        loading={loading}
        onClickCheckbox={onToggleId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
