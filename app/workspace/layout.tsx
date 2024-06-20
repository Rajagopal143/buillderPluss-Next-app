"use client"
import { useState } from "react";
import Filter from "../components/Filter";
import { Navbar } from "../components/NavBar";
import RoomDetails from "../components/RoomDetails";
import Sidebar from "../components/sidebar";
import { Button } from "@/components/ui/button";
import { FcLeft } from "react-icons/fc";

const workspacelayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebar,setSidebar]= useState<Boolean>(true)
  const [filter,setfilter]= useState<Boolean>(false)
  const [roomDetails, setroomDetails] = useState<Boolean>(false)
  const [ShowProduct, setShowProduct] = useState<Boolean>(false);
    return (
      <div className="h-[100vh] overflow-y-hidden ">
        <Navbar setShowProduct={setShowProduct} ShowProduct={ShowProduct} />
        <div className="flex h-full overflow_hidden relative">
          {sidebar ? <Sidebar /> : <></>}
          {filter ? (
            <Filter setfilter={setfilter} />
          ) : (
            <>
              <div
                className="absolute left-[250px] bottom-[100px]"
                onClick={() => setfilter(true)}>
                <Button>Filter</Button>
              </div>
            </>
          )}
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