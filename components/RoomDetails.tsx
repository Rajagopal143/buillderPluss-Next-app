"use client";
import { Button } from "@/components/ui/button";
import { useBlueprintContext } from "@/contextapi/blueprintContext";
import React, {  useEffect, useState } from "react";

import { MdAddCircle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import AddProducts from "./AddProducts";
import Loading from "./Loading";
import { useRouter } from "next/navigation";
import { BiAddToQueue } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";

const RoomDetails = ({ setroomDetails }: { setroomDetails: any }) => {
  const [rooms, setRooms] = useState<Array<Object>>([]);
  const [clickedRoom, setClickedRoom] = useState<String>("");
  const [showProducts, setShowProducts] = useState<Boolean>(false);
  const { setwalldetails } = useBlueprintContext();
 


  useEffect(() => {
    // Fetch the data from the API (assuming the data is available at the given endpoint)
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/getgraph");
      const data = await response.json();
      console.log(data);
      setRooms(data);
    };

    fetchData();
  }, []);

  const showproduct = (name: string) => {
    console.log("hi");
    setShowProducts(true);
    setClickedRoom(name);
  };
  return (
    <div className="w-[350px] overflow-y-scroll scrollbar shadow-lg rounded-xl h-[90vh] z-[10] fixed right-4 bg-white px-3 py-4 top-20">
      <div className="flex items-center justify-between mx-3 ">
        <RxCross2
          className="p-2 box-content rounded-full bg-gray-100"
          onClick={() => setroomDetails(false)}
        />
        <Button>Clear</Button>
      </div>
      <h1 className="font-bold text-2xl"> Room Details</h1>
      {rooms &&
        rooms.map((room: any, index) => (
          <div key={index} className="shadow-lg mx-2 my-4 rounded-lg w-[90%] ">
            <h1
              className="text-1xl font-bold px-2 py-3 bg-slate-700 text-white rounded-lg w-full flex justify-between"
              onClick={() =>
                setClickedRoom((prev) => (prev == room.name ? "" : room.name))
              }>
              Name:{room.name}{" "}
              <MdAddCircle
                className="text-2xl"
                onClick={() => setShowProducts(true)}
              />
            </h1>
            {clickedRoom == room.name ? (
              <div className="relative">
                {showProducts ? (
                  <AddProducts
                    roomName={room.name}
                    setShowProducts={setShowProducts}
                    clickedRoom={clickedRoom}
                    selectedProduct={room["products"]}
                  />
                ) : null}

                <div className="w-full flex items-center justify-between ">
                  <h2 className="font-bold text-1xl">Area:{room.area}</h2>
                  <span>total wall:{room.Walls.length}</span>
                </div>
                <h1 className="font-bold text-1xl">Products:</h1>
                {room["products"] &&
                  room["products"].map((product: any, index: any) => {
                    const name = product.name;
                    return (
                      <div key={index} className="ml-5">
                        {name.slice(0, 20)}
                      </div>
                    );
                  })}
                <p className="inline-flex font-bold text-1xl">Exposed Wall:</p>
                {room["ExposedWall"].length == 0 ? (
                  <span className="inline-flex">Nill</span>
                ) : (
                  room["ExposedWall"].map((expWall: any, index:number) => (
                    <div className="mx-4 flex items-center justify-between">
                      <div>
                        Wall length {index + 1} :{expWall.length}
                      </div>
                      <CgAdd
                        className="text-[20px] cursor-pointer"
                        onClick={() => setwalldetails(expWall)}
                      />
                    </div>
                  ))
                )}
                <p className="font-bold text-1xl">Shared Wall:</p>
                {room["SharedWalls"].length == 0 ? (
                  <span className="inline-flex">Nill</span>
                ) : (
                  room["SharedWalls"].map((shareWall: any, index:number) => (
                    <div className="ml-4 shadow-md border w-[80%] my-3 p-2 flex items-center justify-between">
                      <div>
                        <div>
                          Wall length {index + 1} :{shareWall.length}
                        </div>
                        <div>
                          Shared Room:
                          <br />
                          {shareWall["sharedRoom"][0]["RoomName"]}
                        </div>
                      </div>
                      <CgAdd
                        className="text-[20px] cursor-pointer"
                        onClick={() => setwalldetails(shareWall)}
                      />
                    </div>
                  ))
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
    </div>
  );
};

export default RoomDetails;
