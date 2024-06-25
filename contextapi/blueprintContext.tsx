

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
  const [walldetails, setwalldetails] = useState<object | null>(null);
  const [roomProps, setRoomProps] = useState<object | null>(null);
      return (
        <BlueprintContext.Provider
          value={{ showFilter, setShowfilter, walldetails, setwalldetails, roomProps, setRoomProps}}>
          {children}
        </BlueprintContext.Provider>
      );
};






export function useBlueprintContext() {
    return useContext(BlueprintContext);
}

