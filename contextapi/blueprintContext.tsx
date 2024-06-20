

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

    const [showFilter, setShowfilter] = useState<boolean>(false);
 
      return (
        <BlueprintContext.Provider
          value={{ showFilter, setShowfilter}}>
          {children}
        </BlueprintContext.Provider>
      );
};






export function useBlueprintContext() {
    return useContext(BlueprintContext);
}

