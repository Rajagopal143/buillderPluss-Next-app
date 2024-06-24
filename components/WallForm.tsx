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
const WallForm = () => {
    

    const addwall = async (formdata: any) => {
          const direction=  formdata.get("direction");
      const window = formdata.get("window");
        const door = formdata.get("door");
        try {
            
            const response = await fetch(
                "http://localhost:4000/api/addwallprops",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        direction,
                        window,
                        door,
                    }),
                }
            );
            const data = await response.json();
        } catch (err:any) { 
            toast(`Error:${err.message}`)
        }
        
    }
  return (
    <div className="flex flex-col items-center justify-center w-full ">
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
        <h3 className="font-bold text-1xl">Window</h3>
        <RadioGroup defaultValue="no" className="flex" name="window">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="r1" />
            <Label htmlFor="r1">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="r2" />
            <Label htmlFor="r2">NO</Label>
          </div>
        </RadioGroup>
        <h3 className="font-bold text-1xl">Door</h3>
        <RadioGroup defaultValue="no" className="flex" name="door">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="r3" />
            <Label htmlFor="r3">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="r4" />
            <Label htmlFor="r4">NO</Label>
          </div>
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default WallForm
