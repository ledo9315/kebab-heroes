/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  // Sendet alle 200ms eine Anfrage an die API, um die Produkte zu suchen, statt wie bei useEffect
  // bei jeder Änderung des Inputs. Das ist wichtig, um die API nicht zu überlasten.
  useDebounce(
    () => {
      const fetchProducts = async () => {
        const results = await Api.products.search(searchQuery);
        setProducts(results);
      };

      // if (searchQuery.trim()) {
      //   fetchProducts();
      // } else {
      //   setProducts([]);
      // }

      fetchProducts();
    },
    300,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    // setProducts([]);
  }

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11 z-30"
          type="text"
          placeholder="Suchen..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-2xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products.length === 0 && (
            <div className="text-center text-gray-400 py-5">Keine Ergebnisse gefunden</div>
          )}

          {products.map((product) => (
            <Link
              key={product.id}
              className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
              href={`/product/${product.id}`}
              onClick={onClickItem}
            >
              <img
                className="rounded-sm h-8"
                src={product.imageUrl}
                alt={product.name}
                width={32}
                height={32}
              />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
