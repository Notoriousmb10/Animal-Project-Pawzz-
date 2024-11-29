import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const MyPets = ({ petList }) => {
  const [petArray, setPetArray] = useState([]);

  useEffect(() => {
    if (petList) {
      setPetArray(petList);
      console.log("Pet List: ", petList);
    }
  }, [petList]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-left px-52 py-4">Your Paws</h2>
      <div className="flex flex-col px-12 rounded-[50px] py-10 bg-slate-50 w-max">
        <div className="grid grid-cols-3 gap-32 mt-4">
          {petArray.map((pet, index) => (
            <div key={index} className="h-[200px] w-[200px] border rounded-[50px]">
              <div className="flex items-center justify-end relative right-4 top-4">
                <Pencil className="text-slate-400 hover:bg-slate-300 cursor-pointer rounded-md" />
              </div>
              <div className="h-[60px] w-[200px] rounded-b-[50px] bg-slate-200 relative top-24 flex items-center justify-center">
                <h3>{pet.name}</h3>
              </div>
              {pet.photo && (
                <img
                  src={pet.photo}
                  alt={pet.name}
                  className="h-[140px] w-[200px] object-cover rounded-t-[50px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPets;