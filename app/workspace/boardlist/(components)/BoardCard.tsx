import Image from 'next/image'
import React from 'react'

const BoardCard = ({img1,img2,img3}:{img1:string,img2:string,img3:string}) => {
  return (
    <div className="w-60 h-56 rounded overflow-hidden shadow-md p-1 mt-3">
      <div className="w-full h-[74%] flex items-center justify-center overflow-hidden ">
        <Image
          className=" h-full object-cover "
          src={img1}
          alt="name"
          width={100}
          height={100}
        />
        <div>
          
        <Image
          className="flex-1 h-full object-cover "
          src={img2}
          alt="name"
          width={100}
          height={100}
          />
        <Image
          className="flex-1 h-full object-cover "
          src={img3}
          alt="name"
          width={100}
          height={100}
          />
          </div>
      </div>
      <div className="flex justify-between m-2 items-center ">
        <div>
          <h5 className="text-[12px]">Board Name</h5>
          <h3>Project Name</h3>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 h-8 rounded">
          Apply
        </button>
      </div>
    </div>
  );
}

export default BoardCard
