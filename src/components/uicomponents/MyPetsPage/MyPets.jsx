import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const MyPets = ({myPets}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-40 ">
      <h2 className="text-2xl font-semibold text-left px-52 py-4">Your Paws</h2>
      <div className="flex flex-col px-12 rounded-[50px] py-10  w-max bg-[#f0f8ff]">
        <div className="grid grid-cols-3 gap-32 mt-4">
          {myPets.map((pet, index) => (
            <div
              key={index}
              className="h-[200px] w-[200px] border rounded-[50px]"
            >
              <div className="flex items-center justify-end relative right-4 z- top-4">
                <Pencil className="text-slate-400 hover:bg-slate-300 z-20 bg-white p-1 cursor-pointer rounded-md" />
              </div>
              <img
                src={pet.photo} 
                alt={pet.petName}
                className="h-[200px] w-[200px] object-cover relative hover:opacity-70 cursor-pointer bottom-5 rounded-[50px]"
              />
              <div className="h-[60px] w-[200px] rounded-b-[50px] bottom-16 right-0 bg-slate-200 relative  flex items-center justify-center">
                <h3>{pet.petName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPets;
