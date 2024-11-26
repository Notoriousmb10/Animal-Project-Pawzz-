import React from "react";
import Image from "next/image";
import AnimalDoc from "../../../../public/AnimalDoc.jpg";
import AnimalLove from "../../../../public/AnimalLove.jpg";
import StrayDogs from "../../../../public/StrayDogs.jpeg";
import AnimalShelter from "../../../../public/AnimalShelter.jpg";

const OurServices = () => {
  return (
    <div className="pt-20">
      <div className="flex justify-between items-center px-36">
        <div>
          <h1 className="font-bold text-5xl">Our Services</h1>
          <p className="font-medium pt-2">
            Supporting Animals,{" "}
            <span className="bg-blue-100 p-1 rounded-md underline">
              Empowering
            </span>{" "}
            Communities
          </p>
        </div>
        <div className="grid grid-cols-2 p-10 gap-10">
        <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-br-3xl p-4 flex flex-col items-center gap-2">
          <Image
            height={250}
            width={250}
            src={AnimalDoc}
            className="rounded-full shadow-lg"
          />
          <h1 className="font-medium text-xl text-center">
            Book Veterinary <br /> Appointments
          </h1>
        </div>
        <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-bl-3xl p-4 flex flex-col items-center gap-2">
          <Image
            height={250}
            width={250}
            src={AnimalLove}
            className="rounded-full shadow-lg"
          />
          <h1 className="font-medium text-xl text-center pt-3">
            Find Nearby Animal <br /> Shelters and NGOs
          </h1>
        </div>
        <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-tr-3xl p-4 flex flex-col items-center gap-2">
          <Image
            height={250}
            width={250}
            src={StrayDogs}
            className="rounded-full shadow-lg"
          />
          <h1 className="font-medium text-xl"> Support Stray Animals</h1>
        </div>
        <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-tl-3xl p-4 flex flex-col items-center gap-2">
          <Image
            height={300}
            width={250}
            src={AnimalShelter}
            className="rounded-full shadow-lg"
          />
          <h1 className="font-medium text-xl text-center max-w-40 pt-3">
            Rescue/Adoption Resources
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurServices;
