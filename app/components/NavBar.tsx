"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/builder pluss ai file 2.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { IoIosAdd } from "react-icons/io";
import Link from "next/link";

export const Navbar = ({
  setShowProduct,
  ShowProduct,
}: {
  setShowProduct: any;
  ShowProduct:any}) => {
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (event: any) => {
    setFile(event?.target.files[0]);
    handleSubmit();
  };

  const handleSubmit = async () => {
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
    <nav className="border-b-2">
      <div className="flex justify-between items-center px-5 py-2">
        <div className="bg-[#000000b4]  rounded-md">
          <Image src={logo} alt="logo" className="w-36  object-cover" />
        </div>
        <div className="flex gap-3 items-center">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Projects</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Project 1</MenubarItem>
                <MenubarItem> Project 2</MenubarItem>
                <MenubarItem> Project 13</MenubarItem>
                <MenubarItem>
                  <IoIosAdd />
                  Add project
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Menubar>
            <MenubarMenu>
              <Link href="/workspace/productlist">
                <MenubarTrigger
                  className="cursor-pointer"
                  onClick={() => setShowProduct(!ShowProduct)}>
                  Products
                </MenubarTrigger>
              </Link>
              {/* <MenubarContent> */}
              {/* <Link href='/workspace/productlist'>
                <MenubarItem>View Products</MenubarItem>
                </Link>
                <MenubarItem>
                  <input
                    className="hidden"
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="fileUpload">Add Products</label> */}
              {/* </MenubarItem> */}
              {/* </MenubarContent> */}
            </MenubarMenu>
          </Menubar>
          <Link href="/workspace/boardlist">
            <h3 className="cursor-pointer">Boards</h3>
          </Link>

          <Button className="cursor-pointer">balajik.mti</Button>
        </div>
      </div>
    </nav>
  );
};

