import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File|null|any>(null);

  const handleFileChange = (event:any) => {
    setFile(event?.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://23.20.122.223:3000/api/product/csv", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("File uploaded successfully");
    } else {
      console.error("File upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
