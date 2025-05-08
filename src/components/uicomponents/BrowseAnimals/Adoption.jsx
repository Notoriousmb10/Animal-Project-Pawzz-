import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { upForAdoptions } from "@/app/dataArray";
import { fetchAnimalForAdoption } from "@/app/serverfetching";

const Adoption = () => {
  const [upForAdoptions, setUpForAdoptions] = useState([]);

  const loadAdoption = async () => {
    try {
      const response = await fetchAnimalForAdoption();
      console.log(response);
      setUpForAdoptions(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAdoption();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 justify-center ml-20 cursor-pointer">
      {upForAdoptions.map((pet) => (
        <div key={pet._id} className="gap-4">
          <Image
            src={pet.image}
            className="h-[200px] w-[200px] rounded-lg object-cover  hover:opacity-70"
          />
          <p className="text-center italic font-bold text-blue-500 text-lg">
            {pet.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Adoption;
