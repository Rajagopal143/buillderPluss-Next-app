import { useBlueprintContext } from '@/contextapi/blueprintContext';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import floorplan from './floorplan';
const ProductCard = (product: Object | any) => {
  
  const [floorplandata, setfloorplan] = useState<object>();
const updateItemModelUrl = (itemType: Number = 8, newModelUrl: string) => {
  setfloorplan((prevData: Object | any) => {
    const updatedItems = prevData.items.map((item: Object | any) =>
      item.item_type === itemType ? { ...item, model_url: newModelUrl } : item
    );
    return { ...prevData, items: updatedItems };
  });
};

const handleChangeUrl = (url: string) => {
  updateItemModelUrl(8, String(url));
  console.log(JSON.stringify(floorplandata));
  };
  

  return (
    <div className="max-w-72 h-80 rounded  shadow-lg p-1 ">
      <Image
        className="w-full h-[60%] object-cover mx-auto"
        src={product.image}
        alt={product.name}
        width={100}
        height={0}
      />
      <div className="px-2 pt-2">
        <div className="font-bold text-[12px] ">{product.name}</div>
      </div>
      <span>color</span>-<span>white</span>
      <div className="px-2 flex items-center justify-between pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-2 py-2 text-[12px] font-semibold text-gray-700 mr-2 ">
          ${product.price}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-1 py-1 rounded"
          onClick={() => handleChangeUrl(product.filepath)}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default ProductCard
