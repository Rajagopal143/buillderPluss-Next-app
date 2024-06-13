"use client"
import { useProductContext } from "@/contextapi/ProductContex";
import React, { useEffect, useState } from "react";



const Filter = () => {

  const { filterProducts } = useProductContext();
   const [data,setData]=useState<any>(null||{})
   const [Loading,setLoading]=useState<Boolean>(false)
  const [selectedFilters, setSelectedFilters] = useState<any>({});
  const [openCategories, setOpenCategories] = useState<any>({});
    const [responseData, setResponseData] = useState<any>(null);

    useEffect(() => {
        fetch("http://23.20.122.223:4000/api/product/Showfilter")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
              setData(data);
            //   const files = {}
            //   Object.keys(data).forEach(key => {
            //       files[key] = [];
            //   })
            //   setSelectedFilters(files);
              console.log(data);
            setLoading(false);
          })
          .catch((error) => {
              console.log(error);
            setLoading(false);
          });



    }, []);
    const handleFilterChange = (category: string, option: string) => {
        setSelectedFilters((prevData: any) => {
            prevData[category] = Array.isArray(prevData[category]) ? prevData[category] : [];
            const newCategoryFilters = prevData[category]?.includes(option)
            ? prevData[category].filter((item:string) => item !== option)
            : [...prevData[category], option];
            
            prevData[category] = prevData[category].length < 1 ? '' : prevData[category];
           return {
             ...prevData,
             [category]: newCategoryFilters,
           };
         });
      
  };

  const toggleCategory = (category:string) => {
    setOpenCategories((prevState:object|any) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  function removeEmptyArrays(obj:any) {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => !Array.isArray(value) || value.length > 0
      )
    );
  }

    const QueryFilter =async () => {
      try {
        const data =removeEmptyArrays(selectedFilters);
        await  filterProducts(data)
         } catch (error) {
           console.error("Error:", error);
         }
    }
  return (
    <div className="p-4 w-full h-[80vh]  ">
      <div className="h-[90%] overflow-y-scroll overflow-x-hidden">

      {Object.keys(data).map((category: any) => (
        <div key={category} className="mb-4">
          <button
            className="text-lg font-semibold bg-gray-200 px-4 py-2 w-56 rounded-md text-left"
            onClick={() => toggleCategory(category)}>
            {category}
          </button>
          {openCategories[category] && (
            <div className="mt-2 bg-gray-100 rounded-md p-4 w-56">
              {data[category].map((option: string) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`${category}-${option}`}
                    checked={
                      selectedFilters[category]?.includes(option) || false
                    }
                    onChange={() => handleFilterChange(category, option)}
                    className="mr-2"
                    />
                  <label
                    htmlFor={`${category}-${option}`}
                    className="text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
          <button onClick={QueryFilter} className="bg-blue-700 px-3 py-2 rounded-md text-white capitalize">filter</button>
    </div>
  );
};

export default Filter;
