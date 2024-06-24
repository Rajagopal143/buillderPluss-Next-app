"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useProductContext } from "@/contextapi/ProductContex";
import React, { useEffect, useState } from "react";
import { useBlueprintContext } from "@/contextapi/blueprintContext";
import SearchBar from "../../../components/SearchBar";
import { FilterIcon } from "lucide-react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ProductpageCard from "@/components/ProductpageCard";
interface Product {
  No: number;
  itemImage: string;
  name: string;
  price: number;
  filepath: string;
}

interface ProductListProps {
  products: Product[];
}
const page = () => {
  const { products }: ProductListProps = useProductContext();
  console.log(products);
  return (
    <>
      <div className="flex w-full  h-full">
        <div className="flex flex-wrap justify-center overflow-y-scroll scrollbar  flex-1 mt-4 gap-5 px-3 mb-10">
          {products &&
            products.map((product: Product, index: number) => (
              <ProductpageCard
                key={index}
                image={product.itemImage}
                name={product.name}
                price={product.price}
                filepath={product.filepath}
              />
            ))}
        </div>
      </div>
      
      {/* <div>{showProducts?<AddProducts/>:null}</div> */}
    </>
  );
};

export default page;
