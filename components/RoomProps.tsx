import { useBlueprintContext } from '@/contextapi/blueprintContext'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { revalidatePath } from 'next/cache';
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Button } from './ui/button';
import { toast } from 'sonner';

const RoomProps = ({ room }:{room:any}) => {
  const [spaceCode, setspaceCode] = useState<string>(room.spaceCode);
  const [usagetype, setusagetype] = useState<string>();
  const [ahuZone, setahuZone] = useState<string|null>();
  const [ahuZonelist, setahuZonelist] = useState<Array|null>();
  const { setRoomProps } = useBlueprintContext();

  useEffect(() => {
  fetch(
    `${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/listahu`
  ).then(res => {
    const data = res.json();
    return data;
  }).then(list => {
      
    setahuZonelist(list.data);
    })
},[])
  const handelSubmit = async() => {
    const values = {
    roomname:room.name,spaceCode,usagetype,ahuZone
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/addroomprop`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setRoomProps(null);
      toast(`Succss: ${data.message}`);
    } catch (err: any) {
      toast(`Error:${err.message}`);
    }
  }
  return (
    <div className="w-full h-full fixed flex items-center justify-center top-0 left-0 bg-[#00000063] z-[20] backdrop-blur-sm select-none">
      <div className=" w-[25vw] h-fit px-4  py-4 bg-white scrollbar  border relative  rounded-md *:mb-3">
        <h1 className="font-bold text-2xl   sticky top-0 bg-white  flex  justify-between">
          Room Properties
          <RxCross2
            className="text-3xl shadow rounded-full p-1  bg-[#ffffff93] backdrop-blur-sm absolute -top-7 -right-8 "
            onClick={() => {
              setRoomProps(null);
            }}
          />
        </h1>
        <h2>
          <span>Name:</span>
          <span>{room.name}</span>
        </h2>
        <h2>
          <span>Area:</span>
          <span>{room.area}</span>
        </h2>
        <label htmlFor="spaceCode" className="my-3">
          Space Code:
        </label>
        <input
          type="text"
          id="spaceCode"
          placeholder="Space Code"
          value={room.spaceCode}
          disabled
          onChange={(e) => setspaceCode(e.target.value)}
          className="py-2 border-2 border-gray ml-5  rounded-md pl-2 "
        />{" "}
        <br />
        <label htmlFor="usagetype" className="inline-flex">
          Usage Type:
        </label>
        <Select
          name="direction"
          onValueChange={(e) => {
            setusagetype(e);
          }}>
          <SelectTrigger
            className="w-[180px]  inline-flex ml-6  "
            id="usagetype">
            <SelectValue placeholder="Usage Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Usage Type</SelectLabel>
              <SelectItem value="type1">type1</SelectItem>
              <SelectItem value="type2">type2</SelectItem>
              <SelectItem value="type3">type3</SelectItem>
              <SelectItem value="AHU">AHU</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
        <br />
        {usagetype != "AHU" ? (
          <>
            {" "}
            <label htmlFor="ahuzone" className="inline-flex">
              AHU Zone:
            </label>
            <Select name="direction" onValueChange={(e) => setahuZone(e)}>
              <SelectTrigger
                className="w-[180px]  inline-flex ml-10"
                id="ahuzone">
                <SelectValue placeholder="AHU Zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ahuZonelist &&
                    ahuZonelist.map((item: string, index: number) => (
                      <SelectItem key={index + 1} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
          </>
        ) : null}
        <br />
        <Button className="w-full mt-2" onClick={handelSubmit}>
          submit
        </Button>
      </div>
    </div>
  );
}

export default RoomProps
