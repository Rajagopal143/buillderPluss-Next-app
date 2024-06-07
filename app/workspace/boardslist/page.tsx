"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import ProductCard from '@/app/components/ProductCard';
import { useProductContext } from '@/contextapi/ProductContex';
import React, { useEffect, useState } from 'react'

const page = () => {
      // const [products, setProducts] = useState([]);

      const { products } = useProductContext();
    //  const fetchProducts = async (
    //    filters = null,
    //    url = "http://localhost:3000/api/product/allProducts"
    //  ) => {
    //    try {
    //      const response = await fetch(url, {
    //        method: filters ? "POST" : "GET",
    //        headers: {
    //          "Content-Type": "application/json",
    //        },
    //        body: filters ? JSON.stringify(filters) : null,
    //      });
    //      const data = await response.json();
    //      setProducts(data);
    //    } catch (error) {
    //      console.error("Error fetching products:", error);
    //    }
    //  };

    // useEffect(() => {
    //   fetchProducts();
    // }, []);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-scroll">
        {products.map((product: Object | any) => (
          <ProductCard
            key={product.No}
            image={product.itemImage}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    );
}

export default page
