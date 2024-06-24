"use client"
import React, { cloneElement, ReactElement, Suspense, useState } from "react";

import { FcLeft } from "react-icons/fc";
import { useBlueprintContext } from "@/contextapi/blueprintContext";
import WallDetails from "@/components/wallDetails";
import { Navbar } from "@/components/NavBar";
import Filter from "@/components/Filter";
import RoomDetails from "@/components/RoomDetails";
import Sidebar from "@/components/Sidebar";

const workspacelayout = ({ children }: { children: React.ReactNode }) => {
  const { showFilter, setShowfilter, walldetails } = useBlueprintContext();
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
        {walldetails ? <WallDetails props={walldetails} /> : null}
      </div>
    </div>
  );
}
export default workspacelayout;