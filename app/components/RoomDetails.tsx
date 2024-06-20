"use client"
import React, { useEffect, useState } from 'react'
import { BiRightArrow } from 'react-icons/bi';

const RoomDetails = ({setroomDetails}:{setroomDetails:any}) => {
      const [rooms, setRooms] = useState<Array<Object>>([]);
      const [clickedRoom,setClickedRoom]= useState<String>('')
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
  return (
    <div className="w-[400px] overflow-scroll h-[90vh] ">
      <BiRightArrow
        className="p-2 box-content rounded-full bg-gray-100"
        onClick={() => setroomDetails(false)}
      />
      <h1 className='font-bold text-2xl'> Room Details</h1>
      {rooms &&
        rooms.map((room: any, index) => (
          <div key={index} className="shadow-lg mx-2 my-4 rounded-lg w-[90%] ">
            <h1
              className="text-1xl font-bold px-2 py-3 bg-slate-700 text-white rounded-lg w-full"
              onClick={() => setClickedRoom(room.name)}>
              Name:{room.name}
            </h1>
            {clickedRoom == room.name ? (
              <>
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
}

export default RoomDetails
