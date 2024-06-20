

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

    const [refresh, setrefresh] = useState<Object | null | any>();
  
 
      return (
        <BlueprintContext.Provider value={{ refresh, setrefresh }}>
          {children}
        </BlueprintContext.Provider>
      );
};






export function useBlueprintContext() {
    return useContext(BlueprintContext);
}

