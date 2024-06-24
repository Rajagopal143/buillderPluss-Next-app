import Image from "next/image";
import { useState } from "react";
const ProductCard = ({
  product,
  image,
  name,
  price,
  filepath,
  setSelectedList,
  seletedList,
}:any) => {
  const [floorplandata, setfloorplan] = useState<object>();
  

  const handleChangeUrl = (url: string,product:any) => {
    setSelectedList((prev:Array<object>) => {
      if (prev== null) {
        return [product]
      } else {
        return  [...prev, product]
        
      }
    })
  };

  return (
    <div className="max-w-72 h-80 rounded  shadow-lg p-1 ">
      <Image
        className="w-full h-[60%] object-cover mx-auto"
        src={image}
        alt={name}
        width={100}
        height={0}
      />
      <div className="px-2 pt-2">
        <div className="font-bold text-[12px] ">{name}</div>
      </div>
      <span>color</span>-<span>white</span>
      <div className="px-2 flex items-center justify-between pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-2 py-2 text-[12px] font-semibold text-gray-700 mr-2 ">
          ${price}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-1 py-1 rounded"
          onClick={() => handleChangeUrl(filepath, product)}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
