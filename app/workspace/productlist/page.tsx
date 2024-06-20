"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import ProductCard from "@/app/components/ProductCard";
import { useProductContext } from "@/contextapi/ProductContex";
import Filter from "@/app/components/Filter";
import React, { useEffect, useState } from "react";
import { useBlueprintContext } from "@/contextapi/blueprintContext";
import SearchBar from "./(components)/SearchBar";
import { FilterIcon } from "lucide-react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import AddProducts from "@/app/components/AddProducts";
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
const page = ({ setfilter, filter }: { setfilter: any; filter :any}) => {
  // const [products, setProducts] = useState([]);
  const { setShowfilter, showProducts } = useBlueprintContext();

  const { products }: ProductListProps = useProductContext();
  console.log(products);
  // if (products.length === 0) {
  //   return (
  //     <>
  //       <p>No products available.</p>
  //     </>
  //   );
  // }
  return (
    <>
      <div className="flex w-full  h-full">
        {/* <div className="flex flex-wrap justify-center overflow-y-scroll scrollbar  flex-1 mt-4 gap-5 px-3 mb-10">
          {products &&
            products.map((product: Product, index: number) => (
              <ProductCard
                key={index}
                image={product.itemImage}
                name={product.name}
                price={product.price}
                filepath={product.filepath}
              />
            ))}
        </div> */}
      </div>
      <div className="fixed bottom-4  flex justify-center w-full gap-5 items-center ">
        <HiOutlineAdjustmentsHorizontal
          className="text-[40px] bg-white rounded-full p-1 shadow"
          onClick={() =>
            setShowfilter((prev: boolean) => {
              return !prev;
            })
          }
        />
        <SearchBar />
      </div>
      <div>{showProducts?<AddProducts/>:null}</div>
    </>
  );
};

export default page;
