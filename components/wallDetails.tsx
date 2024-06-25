import { useBlueprintContext } from "@/contextapi/blueprintContext";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import WallForm from "./WallForm";

const WallDetails = ({ props }: any) => {
  console.log(props);
  const { setwalldetails } = useBlueprintContext();
  return (
    <div className="w-full h-full fixed flex items-center justify-center top-0 left-0 bg-[#00000063] z-[10] backdrop-blur-sm">
      <div className=" w-[25vw] h-[50vh] z-[1000]  bg-white scrollbar  border relative  rounded-md">
        <h1 className="font-bold text-2xl ml-3 mt-3 sticky top-0 bg-white py-2 flex  justify-between">
          Wall Properties
          <RxCross2
            className="text-3xl shadow rounded-full p-1  bg-[#ffffff93] backdrop-blur-sm absolute -top-7 -right-4 "
            onClick={() => setwalldetails(false)}
          />
        </h1>
        <h3>
          <span className="font-bold ml-4">length</span>:{props.length}
        </h3>
        {props?.sharedRoom?.length == 1 ? (
          <div>
            <h3 className="font-bold ml-4">
              <span></span> Shared Room Name:{props.sharedRoom[0].RoomName}
            </h3>
            <h3 className="font-bold ml-4">
              <span></span> Shared Room Id:{props.sharedRoom[0].roomId}
            </h3>
          </div>
        ) : null}
        <WallForm wallId={props?.wallId} />
      </div>
    </div>
  );
};

export default WallDetails;
