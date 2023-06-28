import React from "react";
import { PRODUCTS } from "../../Products";
import { ProductCard } from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Shop = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-start mt-20">
        <h1 className="text-5xl font-medium">
          Bunmi<span className="text-zinc-400">-Tech</span>{" "}
          <span className="text-amber-400">
            Shop
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </h1>
      </div>
      <div className="products grid gap-8 grid-cols-3 grid-rows-3 justify-items-center mt-[5rem]">
        {PRODUCTS.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  );
};
