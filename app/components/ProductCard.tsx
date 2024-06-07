import Image from 'next/image'
import React from 'react'

const ProductCard = (product:Object|any) => {
  return (
    <div className="max-w-60  h-96 rounded overflow-hidden shadow-lg p-1">
      <Image className="w-full h-52 object-contain mx-auto" src={product.image} alt={product.name} width={100} height={50} />
      <div className="px-2 pt-2">
        <div className="font-bold text-[12px] ">{product.name}</div>
          </div>
          <span>color</span>-<span>white</span>
      <div className="px-2 flex items-center justify-center pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-2 py-2 text-[12px] font-semibold text-gray-700 mr-2 ">
          ${product.price}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-1 py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard
