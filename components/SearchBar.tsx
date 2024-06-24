import { useProductContext } from '@/contextapi/ProductContex';
import { SearchIcon } from 'lucide-react'
import { NextApiRequest, NextApiResponse } from 'next';
import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState<string>('');

    const { setProducts } = useProductContext();

    const handelSubmit = async (e:any) => {
        e.preventDefault();
     const response = await handler({
       query: search,
       openai_api_key: process.env.NEXT_PUBLIC_OPENAPI_SECRETKEY,
     });
      console.log(response)
        setProducts(response)
        console.log(response)
    }
  return (
    <div className="w-[30%]    bg-white flex items-center p-2 rounded-full border">
      <form onSubmit={handelSubmit} className="flex items-center w-full">
        <input
          type="text"
          placeholder="Chat with AI"
          className="w-full px-2 py mr-2 outline-none border-none "
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
type Data = {
    query: String,
    openai_api_key:String|any,
};


async function handler(query: Data) {
    try {
        
        const response = await fetch("http://23.20.122.223:8000/productSearch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
        });
        
        const data = await response.json();
        return data.products;
    } catch (err) {
        return err;
    }
   
  
}

export default SearchBar
