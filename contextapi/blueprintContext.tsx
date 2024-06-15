

"use client"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";



const BlueprintContext = createContext<object | any>({});


export const BlueprintProvider = ({ children }: { children: ReactNode }) => {

  console.log(localStorage.getItem("blueprintData"));
    const [blueprintData, setBluePrintData] = useState<Object|null|any>(
      JSON.parse(localStorage.getItem("blueprintData"))
    );
    const updateItemModelUrl = (itemType:Number=8, newModelUrl:string) => {
      setBluePrintData((prevData:Object|any) => {
        const updatedItems = prevData.items.map((item:Object|any) =>
          item.item_type === itemType
            ? { ...item, model_url: newModelUrl }
            : item
          );
          return { ...prevData, items: updatedItems };
        });
  };
  useEffect(() => {
    setBluePrintData(blueprintData)
    
  }, [blueprintData]);
      return (
        <BlueprintContext.Provider
          value={{ blueprintData, updateItemModelUrl }}>
          {children}
        </BlueprintContext.Provider>
      );
};






export function useBlueprintContext() {
    return useContext(BlueprintContext);
}

