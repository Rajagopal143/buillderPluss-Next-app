import { useProductContext } from "@/contextapi/ProductContex";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { RxCross2 } from "react-icons/rx";
import { useBlueprintContext } from "@/contextapi/blueprintContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { revalidatePath } from "next/cache";
import SearchBar from "./SearchBar";

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
  spaceCode,
  setShowProducts,
  clickedRoom,
  selectedProduct=[],
}: {
  spaceCode: string;
  setShowProducts: any;
  clickedRoom: any;
    selectedProduct: any;
}) => {
  const { products }: ProductListProps = useProductContext();
  const { setShowfilter } = useBlueprintContext();  
    const [seletedList, setSelectedList] = useState<Product[]>([]);
  

  useEffect(() => {
    setSelectedList(selectedProduct);
  }, [clickedRoom]);
  const handelSubmitProduct = async () => {
    const data = { spaceCode: spaceCode, products: seletedList };
    console.log(data);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/productoroom`,
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

      const result = await response.json();

      setShowProducts(false);
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const removeProduct = (productName: string) => {
    const updatedProducts = seletedList.filter(
      (product) => product.name !== productName
    );
    setSelectedList(updatedProducts);
  };

  return (
    <div className="w-full h-full fixed flex items-center justify-center top-0 left-0 bg-[#00000063]  backdrop-blur-sm">
      <div className=" w-[50vw] h-[80vh] relative  bg-white overflow-y-scroll    border  rounded-md">
        <h1 className="font-bold text-2xl ml-3 mt-3 sticky top-0 bg-white py-2 flex  justify-between">
          {clickedRoom}
          <div className="static z-50 top-0 right-1">
            <RxCross2
              className="text-3xl shadow rounded-full p-1  bg-[#ffffff93] backdrop-blur-sm "
              onClick={() => setShowProducts(false)}
            />
          </div>
        </h1>

        <div className="flex flex-wrap items-start  md:justify-center   flex-1 mt-4 gap-5  mb-10">
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
          <div className="w-full h-[80px] fixed bg-white select-none bottom-[-1px] flex justify-between items-center px-3  ">
            <div className="flex  ">
              {seletedList &&
                seletedList.map((product: Product, index: any) => (
                  <div key={index} className="relative w-20 h-18">
                    <RxCross2
                      className="text-2xl border rounded-full p-1 absolute right-[-3px] top-[-3px] bg-[#ffffff80]"
                      onClick={() => removeProduct(product.name)}
                    />
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
            <div className="absolute bottom-24  flex justify-center w-full gap-5 items-center ">
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
            <Button
              className="absolute right-3 top-3"
              onClick={() => handelSubmitProduct()}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
