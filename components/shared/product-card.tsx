/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard = ({ id, name, price, imageUrl, className }: Props) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>

            <Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>

            <p className="text-sm text-gray-400">
                Tomaten, Käse, Salami, Champignons, Paprika, Zwiebeln, Peperoni, Oliven, Schinken, Artischocken, Thunfisch
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                    ab <b>{price.toFixed(2)} €</b>
                </span>

                <Button variant="secondary">
                    <Plus size={20} className="mr-1"/>
                    Hinzufügen
                </Button>
            </div>

            </Link>
        </div>
    );
};
