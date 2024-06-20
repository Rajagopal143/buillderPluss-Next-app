import { useProductContext } from '@/contextapi/ProductContex';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { RxCross2 } from 'react-icons/rx';
import { useBlueprintContext } from '@/contextapi/blueprintContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
const AddProducts = ({
  roomName,
  setShowProducts,
  clickedRoom,
}: {
  roomName: string;
  setShowProducts: any;
  clickedRoom:any
}) => {
  const { products }: ProductListProps = useProductContext();

  const [seletedList, setSelectedList] = useState<Product[]>([]);

    useEffect(() => {
        console.log(seletedList);
        setSelectedList([]);
        console.log(seletedList);
    }, [clickedRoom]);
  const handelSubmitProduct = async () => {
    const data = { roomName, products };

    try {
      const response = await fetch("http://localhost:4000/api/productoroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed w-[50vw] h-[80vh] z-[1000] left-[22%] top-[100px] bg-white overflow-y-scroll scrollbar  border">
      <h1>{name}</h1>
      <RxCross2
        className="text-2xl border rounded-full p-1 absolute right-0"
        onClick={() => setShowProducts(false)}
      />
      <div className="flex flex-wrap justify-start overflow-y-scroll scrollbar  flex-1 mt-4 gap-5 px-3 mb-10">
        {products &&
          products.map((product: Product, index: number) => (
            <ProductCard
              key={index}
              product={product}
              image={product.itemImage}
              name={product.name}
              price={product.price}
              filepath={product.filepath}
              setSelectedList={setSelectedList}
              seletedList={seletedList}
            />
          ))}
      </div>
      <div className="w-full h-[80px] bg-red-200 sticky bottom-[-1px] flex justify-between items-center px-3  ">
        <div className="flex overflow-x-scroll scrollbar">
          {seletedList &&
            seletedList.map((product: Product, index: any) => (
              <div key={index} className="relative w-20 h-18">
                <RxCross2 className="text-2xl border rounded-full p-1 absolute right-[-3px] top-[-3px] bg-[#ffffff80]" />
                <Image
                  src={product.itemImage}
                  alt={product.name}
                  width={20}
                  height={20}
                  className="p-1 w-[60px] h-[60px] rounded-lg "
                />
              </div>
            ))}
        </div>
        <Button
          className=" right-3 top-3"
          onClick={() => handelSubmitProduct()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddProducts
