"use client";
import { useEffect, useState } from "react";
import Dropzone from "./Dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import Link from "next/link";
import { useBlueprintContext } from "@/contextapi/blueprintContext";


interface roomData{
  name: string,
  length: Number,
  breath: Number,
  height:Number
}

const Sidebar = () => {
  const { refresh, setrefresh } = useBlueprintContext();
  const [roomName, setroomName] = useState<string>('');
  const [length, setlength] = useState<number>(0);
  const [breath, setbreath] = useState<number>(0);
  const [height, setheight] = useState<number>(0);
  const [file, setFile] = useState<File | null | any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showCanvas, setShowCanvas] = useState<Boolean | null>(false);
  const [canvasurl, setCanvasurl] = useState<number | any>(null);

  const roomTypeData: any = {
    kitchen: {
      name: "kitchen",
      length: 8,
      breath: 6,
      height: 5,
    },
    BedRoom: {
      name: "BedRoom",
      length: 5,
      breath: 6,
      height: 4,
    },
    Hall: {
      name: "Hall",
      length: 5,
      breath: 10,
      height: 6,
    },
    Bathroom: {
      name: "Bathroom",
      length: 4,
      breath: 4,
      height: 5,
    },
  };
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
          "http://23.20.122.223:4000/api/bpfile/modifyroom",
          {
            method: "POST", // Set the request method to POST
            headers: { "Content-Type": "application/json" }, // Set the content type
            body: JSON.stringify(roomData), // Convert room data to JSON string for body
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setrefresh(Math.random())
          setCanvasurl(
            `http://23.20.122.223:10001/index.html?number=${refresh}`
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

    if (selectedRoomType) {
      setroomName(roomTypeData[selectedRoomType].name);
      setlength(roomTypeData[selectedRoomType].length);
      setbreath(roomTypeData[selectedRoomType].breath);
      setheight(roomTypeData[selectedRoomType].height);
    } else {
      // Handle cases where no room type is selected (optional)
      setroomName("");
      setlength(0);
      setbreath(0);
      setheight(0);
    }
  };
  return (
    <aside
      className={`h-[90vh]  border-r-2  flex  ${
        showCanvas ? "w-full " : "w-52"
      } `}>
      <div className=" h-full w-52 flex flex-col items-center justify-between z-10 bg-white">
        <div className="w-full h-fit flex flex-col items-center  pb-5 rounded-b-md">
          {preview == null ? (
            <Dropzone onDrop={handleDrop} />
          ) : (
            <div className="w-full relative">
              <FaChevronRight
                className="absolute right-1 top-2"
                onClick={() => setShowCanvas(!showCanvas)}
              />
              <Image
                width="100"
                height="100"
                src={preview}
                alt="previewImage"
                className="w-full h-40 object-contain p-3"
              />
              <Button
                className="bg-black mx-auto"
                onClick={() => setPreview(null)}>
                Change Image
              </Button>
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
              onChange={handleRoomChange}>
              {roomTypeData &&
                Object.keys(roomTypeData).map((key, index) => (
                  <option key={index} value={key}>
                    {key}
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
          } z-[0] w-full h-[80vh] bg-red-200  `}>
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
