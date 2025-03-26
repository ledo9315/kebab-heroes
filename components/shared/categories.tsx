"use client";

import { cn } from "@/lib/utils";
import useCategoryStore from "@/store/category";

interface Props {
    className?: string;
}

const cats = [
    { id: 0, name: "Pizza" },
    { id: 1, name: "Döner" },
    { id: 2, name: "Pita" },
    { id: 3, name: "Burger" },
    { id: 4, name: "Salat" },
    { id: 5, name: "Getränke" }
];

export const Categories = ({ className }: Props) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
            {cats.map(({ id, name }, index) => (
                <a
                    href={`/#${name}`}
                    className={cn(
                        "flex items-center justify-center font-bold h-11 rounded-2xl px-5 hover:cursor-pointer",
                        "transition-all duration-300 ease-in-out",
                        id === categoryActiveId
                            ? "bg-white shadow-md shadow-gray-200 text-primary"
                            : "text-gray-500"
                    )}
                    key={index}
                >
                    {name}
                </a>
            ))}
        </div>
    );
};

export default Categories;