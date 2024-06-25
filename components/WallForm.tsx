import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from './ui/button';
import { toast } from 'sonner';
const WallForm = ({ wallId }:{wallId:number}) => {
  const [window, setWindow] = useState<string | null>("");
  const [door, setdoor] = useState<string | null>("");

  const addwall = async (formdata: any) => {
    const direction = formdata.get("direction");
      let windowwidth;
      let windowheight;
      let windowtype
      if (window == "yes") {
          windowtype = formdata.get("windowtype");
          windowwidth = formdata.get("windowwidth");
          windowheight = formdata.get("windowheight");
        }
        let doorwidth;
      let doorheight;
      let doortype;
        if (door == "yes") {
           doortype = formdata.get("doortype");
           doorwidth = formdata.get("doorwidth");
           doorheight = formdata.get("doorheight");
        }

    try {
      const response = await fetch("http://localhost:4000/api/addwallprops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            direction,
            doortype,
            windowtype,
          windowwidth,
          windowheight,
          doorwidth,
          doorheight,
          wallId,
        }),
      });
      const data = await response.json();
      toast(`Succss: ${data.message}`);
    } catch (err: any) {
      toast(`Error:${err.message}`);
    }
  };
  return (
    <div className="flex flex-col px-5 w-full h-full">
      <form action={addwall} className="flex flex-col gap-3 mt-4">
        <h3 className="font-bold text-1xl">Directions</h3>
        <Select name="direction">
          <SelectTrigger className="w-[180px] ">
            <SelectValue placeholder="Select Direction" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Directions</SelectLabel>
              <SelectItem value="North">North</SelectItem>
              <SelectItem value="South">South</SelectItem>
              <SelectItem value="East">East</SelectItem>
              <SelectItem value="West">West</SelectItem>
              <SelectItem value="North-East">North-East</SelectItem>
              <SelectItem value="North-West">North-West</SelectItem>
              <SelectItem value="South-East">South-East</SelectItem>
              <SelectItem value="South-West">South-West</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex gap-8    ">
          <h3 className="font-bold text-1xl inline">Window</h3>
          <RadioGroup
            defaultValue="no"
            className="flex"
            name="window"
            onValueChange={(e: string) => setWindow(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="r1" />
              <Label htmlFor="r1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="r2" />
              <Label htmlFor="r2">NO</Label>
            </div>
          </RadioGroup>
        </div>
        {window == "yes" ? (
          <>
            <div className="flex gap-3  ">
              <Select name="windowtype">
                <SelectTrigger className="w-[180px] ">
                  <SelectValue placeholder="Select Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Window Type</SelectLabel>
                    <SelectItem value="type1">type1</SelectItem>
                    <SelectItem value="type2">type2</SelectItem>
                    <SelectItem value="type3">type3</SelectItem>
                    <SelectItem value="type4">type4</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input
                type="number"
                placeholder="width"
                name="windowwidth"
                className="w-full border-2 border-black rounded"
              />
              <input
                type="number"
                placeholder="height"
                name="windowheight"
                className="w-full border-2 border-black rounded"
              />
            </div>
          </>
        ) : null}
        <div className="flex gap-14">
          <h3 className="font-bold text-1xl">Door</h3>
          <RadioGroup
            defaultValue="no"
            className="flex"
            name="door"
            onValueChange={(e: string) => setdoor(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="r3" />
              <Label htmlFor="r3">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="r4" />
              <Label htmlFor="r4">NO</Label>
            </div>
          </RadioGroup>
        </div>
        {door == "yes" ? (
          <>
            <div className="flex gap-3">
              <Select name="doortype">
                <SelectTrigger className="w-[180px] ">
                  <SelectValue placeholder="Select Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Door Type</SelectLabel>
                    <SelectItem value="type1">type1</SelectItem>
                    <SelectItem value="type2">type2</SelectItem>
                    <SelectItem value="type3">type3</SelectItem>
                    <SelectItem value="type4">type4</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input
                type="number"
                placeholder="width"
                name="doorwidth"
                className="w-full border-2 border-black rounded"
              />
              <input
                type="number"
                placeholder="height"
                name="doorheight"
                className="w-full border-2 border-black rounded"
              />
            </div>
          </>
        ) : null}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default WallForm
