import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
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
            <Input type="number" placeholder="0" min={0} max={24} defaultValue={0}/>
            <Input  type="number" placeholder="0" min={0} max={24} defaultValue={0}/>
        </div>

        {/* Slider */}
        <RangeSlider min={0} max={24} step={0.01} value={[0,24]}/>
      </div>

        {/* Ingredients */}
        <CheckboxFiltersGroup 
        title="Zutaten" 
        items={[
            { text: "Salami", value: "1" },
            { text: "Schinken", value: "2" },
            { text: "Käse", value: "3" },
            { text: "Pilze", value: "4" },
            { text: "Pepperoni", value: "5" },
            { text: "Ananas", value: "6" },
            { text: "Oliven", value: "7" },
            { text: "Paprika", value: "8" },
            { text: "Zwiebeln", value: "9" },
            { text: "Mais", value: "10" },
            { text: "Spinat", value: "11" },
            { text: "Thunfisch", value: "12" },
            { text: "Sardellen", value: "13" },
            { text: "Champignons", value: "14" },
            { text: "Artischocken", value: "15" },
            { text: "Rucola", value: "16" },
            { text: "Schafskäse", value: "17" },
            { text: "Feta", value: "18" },
            { text: "Mozzarella", value: "19" },
            { text: "Gorgonzola", value: "20" },
            { text: "Parmesan", value: "21" },
            { text: "Ziegenkäse", value: "22" },
            { text: "Pecorino", value: "23" },
            { text: "Cheddar", value: "24" },
            { text: "Gouda", value: "25" },
            { text: "Emmentaler", value: "26" },
        ]}
        defaultItems={[
            { text: "Salami", value: "1" },
            { text: "Schinken", value: "2" },
            { text: "Käse", value: "3" },
            { text: "Pilze", value: "4" },
            { text: "Pepperoni", value: "5" },
            { text: "Ananas", value: "6" },
            { text: "Oliven", value: "7" },
            { text: "Paprika", value: "8" },
            { text: "Zwiebeln", value: "9" },
        ]}
        limit={6}
        className="mt-5"
        />
    </div>
  );
};
