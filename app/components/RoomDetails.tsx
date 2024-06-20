"use client";
import { Button } from "@/components/ui/button";
import { useBlueprintContext } from "@/contextapi/blueprintContext";
import React, { useEffect, useState } from "react";

import { MdAddCircle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import AddProducts from "./AddProducts";

const RoomDetails = ({ setroomDetails }: { setroomDetails: any }) => {
  const [rooms, setRooms] = useState<Array<Object>>([]);
  const [clickedRoom, setClickedRoom] = useState<String>("");
  const [showProducts, setShowProducts] = useState<Boolean>(false);

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
    <div className="w-[350px] overflow-y-scroll scrollbar shadow-lg rounded-xl h-[90vh] fixed right-4 bg-white px-3 py-4 top-20">
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
                onClick={() => showproduct(true)}
              />
            </h1>
            {clickedRoom == room.name ? (
              <>
                {showProducts ? (
                  <AddProducts
                    roomName={room.name}
                    setShowProducts={setShowProducts}
                    clickedRoom={clickedRoom}
                  />
                ) : null}

                <h2>Area:{room.area}</h2>
                <p className="inline-flex">Exposed Wall:</p>
                {room["ExposedWall"].length == 0 ? (
                  <span className="inline-flex">Nill</span>
                ) : (
                  room["ExposedWall"].map((expWall: any, index) => (
                    <div className="ml-4">
                      <div>
                        Wall length {index + 1} :{expWall.length}
                      </div>
                    </div>
                  ))
                )}
                <p className="">Shared Wall:</p>
                {room["SharedWalls"].length == 0 ? (
                  <span className="inline-flex">Nill</span>
                ) : (
                  room["SharedWalls"].map((shareWall: any, index) => (
                    <div className="ml-4 shadow-md border w-[80%] my-3 p-2">
                      <div>
                        Wall length {index + 1} :{shareWall.length}
                      </div>
                      <div>
                        Shared Room:
                        <br />
                        {shareWall["sharedRoom"][0]["RoomName"]}
                      </div>
                    </div>
                  ))
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
    </div>
  );
};

export default RoomDetails;
