"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ProductContext = createContext<any>({});

export const ProductProvider = ({ children }:{children:ReactNode}) => {
  const [products, setProducts] = useState<Array<Object>|any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);

  const fetchProducts = async (
    filters = null,
    url = `${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/product/allProducts`
  ) => {
    try {
      console.log(filters, url);
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Initially, no filters applied or filtered data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const queryFilter = async(data:Object) => {
    try {
      console.log(data);
       const response = await fetch(
         `${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/product/filter`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
         }
       );
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
      const res = await response.json();
      console.log(res);
       setProducts(res);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProducts = async (criteria: Object | any) => {
    if (Object.keys(criteria).length === 0) {
      fetchProducts();
      return;
    }
      await queryFilter(criteria);
  };

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, filterProducts,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};