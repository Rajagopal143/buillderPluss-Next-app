"use client";
import { useEffect, useState } from "react";
import Dropzone from "./Dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import Link from "next/link";
const Sidebar = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showCanvas, setShowCanvas] = useState<Boolean | null>(false);
  const [canvasurl, setCanvasurl] = useState<number | null>(null);

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
    if (file?.name.startsWith('0')) {
      setCanvasurl(0)
    }
    if (file?.name.startsWith('1')) {
      setCanvasurl(1)
    }
    console.log(canvasurl);
  }, [file]);
  return (
    <aside className={`h-[90vh]  border-r-2 flex  ${showCanvas?"w-[75%] ":"w-52"} `}>
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
            </div>
          )}
          {preview != null ? (
            <Button className="bg-black  " onClick={() => setPreview(null)}>
              Change Image
            </Button>
          ) : null}
        </div>
        <Button className="mb-3">Generate</Button>
      </div>
      {showCanvas ? (
        <div
          className={`  ${
            showCanvas ? "left-52" : "left-[-500px]"
          } z-[0] w-full h-[90vh] bg-red-200  `}>
          <div className="w-full h-full">
            {/* <a
              href={`http://localhost:10001/index.html?image=${canvasurl}`}
              target="blank">
              <BsFullscreen className="absolute w-10 h-10 bg-black text-white p-2 z-20 rounded-lg opacity-50 hover:opacity-100 cursor-pointer right-4 top-3" />
            </a> */}
            <iframe
              src={`http://localhost:10001/index.html?image=${canvasurl}`}
              className="w-full h-full z-10"></iframe>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
