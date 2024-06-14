"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import ProductCard from '@/app/components/ProductCard';
import { useProductContext } from '@/contextapi/ProductContex';
import Filter from '@/app/components/Filter';
import React, { useEffect, useState } from 'react'
import { useBlueprintContext } from '@/contextapi/blueprintContext';
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
  // const [products, setProducts] = useState([]);

      const { products }: ProductListProps   = useProductContext();
  console.log(products)
    if (products.length === 0) {
      return (
        <>
          <p>No products available.</p>
          <div className="h-fit w-[25%]  ">
            <Filter />
          </div>
        </>
      );
  }
  return (
    <div className="flex w-full  h-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll  flex-1 mt-4 gap-5 px-3 mb-10">
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
      </div>
      <div className="h-full  ">
        <Filter />
      </div>
    </div>
  );
}

export default page
