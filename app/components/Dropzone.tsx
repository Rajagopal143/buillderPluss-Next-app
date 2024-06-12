"use client"
import { Button } from "@/components/ui/button";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileImage } from "react-icons/fa";
interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  accept?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
  const onDropAccepted = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({onDropAccepted});
 const errorMessage = isDragReject ? (
   <p className="text-red-600">Unsupported file type</p>
 ) : null;
  return (
    <div
      {...getRootProps()}
      className="w-[95%] m-2 border border-dashed border-black rounded flex flex-col items-center justify-center font-serif pt-5 text-[15px]">
      <FaFileImage className="w-8 h-8" />
      <p>Drag & drop an image here</p>
      <br />
      <p>or</p>
      <br />
      <input type="file" className="hidden" id="file" {...getInputProps()} />
      <Button variant="link">
        <label htmlFor="file">Upload a file</label>
      </Button>
      {errorMessage}
    </div>
  );
};

const styles = {
  dropzone: {
    border: "2px dashed #cccccc",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  },
};

export default Dropzone;
