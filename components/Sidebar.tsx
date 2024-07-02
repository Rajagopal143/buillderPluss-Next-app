"use client";
import { FormEvent, useEffect, useState } from "react";
import Dropzone from "./Dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import Link from "next/link";
import { useBlueprintContext } from "@/contextapi/blueprintContext";


type roomData={
  name: string,
  length: Number,
  breath: Number,
  height:Number
}
const roomTypeData: any = {

};

const Sidebar = () => {
  const { refresh, setrefresh } = useBlueprintContext();
  const [rooms, setRooms] = useState<any>([]);
  const [roomName, setroomName] = useState<string>("");
  const [length, setlength] = useState<number>(0);
  const [breath, setbreath] = useState<number>( 0);
  const [height, setheight] = useState<number>(3);
  const [file, setFile] = useState<File | null | any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showCanvas, setShowCanvas] = useState<Boolean | null>(false);
  const [canvasurl, setCanvasurl] = useState<number | any>(null);
  const [selectedRoomType, setSelectedRoomType] = useState(
    Object.keys(roomTypeData)[0]
  );
  
  const handleDrop = (acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);
    // Create a preview URL for the imag
    const previewUrl = URL.createObjectURL(uploadedFile);
    setPreview(previewUrl);
  };
  useEffect(() => {
    // console.log(file)
    if (preview) {
      const base64Data = preview.split(",")[1];
      const reader = new FileReader();

      reader.onload = function (event: any) {
        const base64Data = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    }
    if (file?.name.startsWith("0")) {
      setCanvasurl(0);
    }
    if (file?.name.startsWith("1")) {
      setCanvasurl(1);
    }
  }, []);
  const generateFloorplan = async () => {
    const roomData = {
      name: roomName,
      length: length,
      breadth: breath,
      height: height,
    };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/bpfile/modifyroom`,
          {
            method: "POST", // Set the request method to POST
            headers: { "Content-Type": "application/json" }, // Set the content type
            body: JSON.stringify(roomData), // Convert room data to JSON string for body
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
          
        console.log(data);
          setCanvasurl(
            `${
              process.env.NEXT_PUBLIC_IP_ADDRESS
            }:10001/index.html?search=${Math.random()}`
          );
          // Handle successful response (e.g., display success message)
          console.log("Room modified successfully!");
        } catch (error) {
        setCanvasurl(`error`);
        console.error("Error:", error);
        // Handle errors (e.g., display error message)
      }
    console.log(canvasurl)
    setShowCanvas(true);
  };
  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoomType = event.target.value;
    const filteredRooms = rooms.filter(
      (room: any) => room["Room name"] === selectedRoomType
    );
 console.log(filteredRooms);
    if (selectedRoomType) {
      setroomName(filteredRooms[0]["Room name"]);
      setlength(filteredRooms[0]["length"]);
      setbreath(filteredRooms[0]["breadth"]);
      setheight(filteredRooms.height);
    } else {
      // Handle cases where no room type is selected (optional)
      setroomName("");
      setlength(0);
      setbreath(0);
    }
  };
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      if (!file) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("example", `"Give All Room with details as like below in json " Room name : Bedroom Dimension : 10' x 9' length:10 breath:9 wall:[ length : 10',Door : "Yes",Window:"No" length : 9',Door : "No",Window:"No" length : 10',Door : "No",Window:"Yes" length : 9',Door : "No",Window:"No"]`);

      try {
        const response = await fetch("http://23.20.122.223:8000/roomDetails/", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const rooms:any = {
          
        }
        data.rooms.forEach((room:any) => {
      
        rooms[room["Room name"]] = {
            name:room["Room name"],
            length: room.length,
            breath: room.breadth,
            height:3,
          };
        })
        setRooms(data.rooms);
        console.log(data.rooms);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

  return (
    <aside
      className={`h-[93vh]  border-r-2  flex  ${
        showCanvas ? "w-full " : "w-52"
      } `}>
      <div className=" h-full w-52 flex flex-col items-center justify-between  bg-white relative">
        <FaChevronRight
          className="absolute bg-white text-2xl rounded-full border p-1 right-1 top-2"
          onClick={() => {
            setShowCanvas(!showCanvas);
            setCanvasurl(`${process.env.NEXT_PUBLIC_IP_ADDRESS}:10001/`);
          }}
        />
        <div className="w-full h-fit flex flex-col items-center  pb-5 rounded-b-md">
          {preview == null ? (
            <Dropzone onDrop={handleDrop} />
          ) : (
            <div className="w-full ">
              <Image
                width="100"
                height="100"
                src={preview}
                alt="previewImage"
                className="w-full h-40 object-contain p-3"
              />
              <div className="flex items-center justify-around">
                <Button className="bg-black " onClick={() => setPreview(null)}>
                  Change
                </Button>
                <Button className="bg-black  " onClick={(e) => handleSubmit(e)}>
                  Upload
                </Button>
              </div>
            </div>
          )}
          <p>----------OR---------</p>
          <div className="w-full px-2">
            <h1 className="text-1xl font-bold">Room</h1>
            <label htmlFor="name">Room Type:</label>
            <select
              id="Roomname"
              name="Roomname"
              className="border-2 w-full border-black py-1 rounded "
              onChange={handleRoomChange}
              disabled={rooms.length == 0}>
              {rooms &&
                rooms.map((room:any, index:number) => (
                  <option key={index} value={room["Room name"]}>
                    {room["Room name"]}
                  </option>
                ))}
            </select>
            <label htmlFor="name">Room Name:</label>
            <input
              type="text"
              id="Roomname"
              name="Roomname"
              className="border-2 w-full border-black py-1 rounded "
              value={roomName}
              placeholder="Room Name"
              disabled={rooms.length == 0}
              onChange={(e) => setroomName(e.target.value)}
            />
            <label htmlFor="Length">Length:</label>
            <input
              type="number"
              id="Length"
              name="Length"
              className="border-2 w-full border-black py-1 rounded"
              placeholder="Length"
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label htmlFor="Breath">Breath:</label>
            <input
              type="number"
              id="Breath"
              name="Breath"
              className="border-2 w-full border-black py-1 rounded"
              placeholder="Breath"
              value={breath}
              onChange={(e) => setbreath(Number(e.target.value))}
            />
            <label htmlFor="Height">Height:</label>
            <input
              type="number"
              id="Height"
              name="Height"
              className="border-2 w-full border-black py-1 rounded"
              placeholder="Height"
              value={height}
              onChange={(e) => setheight(Number(e.target.value))}
            />
          </div>
        </div>
        <Button className="mb-3" onClick={generateFloorplan}>
          Generate
        </Button>
      </div>
      {showCanvas ? (
        <div
          className={` ${
            showCanvas ? "left-52" : "left-[-500px]"
          } z-[0] w-full h-full bg-red-200  `}>
          <div className="w-full h-full">
            {/* <a
              href={`http://23.20.122.223:10001/index.html?image=${canvasurl}`}
              target="blank">
              <BsFullscreen className="absolute w-10 h-10 bg-black text-white p-2 z-20 rounded-lg opacity-50 hover:opacity-100 cursor-pointer right-4 top-3" />
            </a> */}
            <iframe
              src={canvasurl}
              name={refresh}
              className="w-full h-full z-10"></iframe>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
