"use client";

import { useState } from "react";
import { Input } from "../ui";
import { FilterCheckboxProps, FilterCheckbox } from "./filter-checkbox";

interface Props {
    title: string;
    items: FilterCheckboxProps[];
    defaultItems: FilterCheckboxProps[];
    limit: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValues?: string[];
    className?: string;
}

export const CheckboxFiltersGroup = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Suchen...",
    className,
    // onChange,
    // defaultValues,
}: Props) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const list = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().startsWith(searchValue.toLowerCase()) // searchValue ist am anfang = "", deswegen zeigt er alle Items an, weil alle Items mit "" anfangen
           )
        : defaultItems.slice(0, limit);

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border none"
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="text-primary mt-3 cursor-pointer"
                    >
                        {showAll ? "Verbergen" : "Alles anzeigen"}
                    </button>
                </div>
            )}
        </div>
    );
};
