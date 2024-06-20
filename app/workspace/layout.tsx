"use client"
import React, { cloneElement, ReactElement, useState } from "react";
import Filter from "../components/Filter";
import { Navbar } from "../components/NavBar";
import RoomDetails from "../components/RoomDetails";
import Sidebar from "../components/sidebar";
import { Button } from "@/components/ui/button";
import { FcLeft } from "react-icons/fc";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useBlueprintContext } from "@/contextapi/blueprintContext";

const workspacelayout = ({ children }: { children: React.ReactNode }) => {
  const { showFilter,setShowfilter } = useBlueprintContext();
  const [sidebar, setSidebar] = useState<Boolean>(true)
  const [roomDetails, setroomDetails] = useState<Boolean>(false)
  const [ShowProduct, setShowProduct] = useState<Boolean>(false);
    return (
      <div className="h-[100vh] overflow-y-hidden ">
        <Navbar setShowProduct={setShowProduct} ShowProduct={ShowProduct} />
        <div className="flex h-full overflow_hidden relative">
          {sidebar ? <Sidebar /> : <></>}
          {showFilter ? <Filter setfilter={setShowfilter} /> : null}
          {children}

          {roomDetails ? (
            <RoomDetails setroomDetails={setroomDetails} />
          ) : (
            <>
              <div
                className="absolute right-3 top-2 p-2 border rounded-full"
                onClick={() => setroomDetails(true)}>
                <FcLeft />
              </div>
            </>
          )}
        </div>
      </div>
    );
}
export default workspacelayout;