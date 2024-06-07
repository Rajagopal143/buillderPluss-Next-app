"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ProductContext = createContext({});

export const ProductProvider = ({ children }:{children:ReactNode}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async (
    filters = null,
    url = "http://localhost:3000/api/product/allProducts"
  ) => {
    try {
      console.log(filters, url);
      const response = await fetch(
        url
      );
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
         "http://localhost:3000/api/product/filter",
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

  const filterProducts = async (criteria: Object | null) => {
    if (Object.keys(criteria).length === 0) {
      fetchProducts();
      return;
    }
      await queryFilter(criteria);
  };

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, filterProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
 return useContext(ProductContext);
}