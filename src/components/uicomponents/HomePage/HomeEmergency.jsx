import React from "react";
import DogEmergency from "../../../../public/DogEmergency.png";
import DogAdoption from "../../../../public/DogAdoption.png";
import Image from "next/image";
import { UiButton } from "../Button";
import { MoveRight } from "lucide-react";
import Select from "../Select";
import { ImageUp } from "lucide-react";
import {adoptionReasons} from "../../../app/dataArray"
const HomeEmergency = () => {
  return (
    <div className="flex gap-20 justify-center">
      <div className="h-[400] w-[600] border overflow-hidden bg-[#EFF6FF] rounded-[50]">
        <div className="relative z-20 ml-10 pt-2">
          <div>
            <h1 className="font-bold text-2xl text-left pt-2">
              Emergency Assistance
            </h1>
            <p className=" italic text-left pt-2  text-md ">
              Immediate Assistance for Animals in Need
            </p>
          </div>
          <div className="flex flex-col w-max gap-4 relative top-32">
            <UiButton
              label={"Report Injured Animal"}
              className="rounded-sm"
            />
            <UiButton
              label={"First Aid Instructions"}
              icon={<MoveRight size={32} color="#ffffff" />}
              className="rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 h-[300] w-[400] left-48 bottom-[111] relative z-10">
          <Image src={DogEmergency} />
        </div>
      </div>

      <div className="h-[400] w-[600] border rounded-[50] bg-[#fafaf6] overflow-hidden flex justify-center items-center flex-col">
        <div className="relative bottom-10">
          <h1 className="font-bold text-2xl text-center">
            Help a Lost Soul Find a Loving Home
          </h1>
        </div>
        <div className="flex justify-center items-center px-10 gap-6 mt-4">
          <div className="h-[200] w-[200] bg-white rounded-lg border flex justify-center items-center">
            <ImageUp size={50} />
          </div>
          <div className="flex-grow flex gap-2 flex-col">
            <p className="text-[14px]">Looking For?</p>
            {/* Allow this div to grow */}
            <Select
              data={adoptionReasons}
              placeholder={"Select An Option.."}
              className="w-full" // Ensure the Select takes full width of its container
            />
            <UiButton label={"Proceed "} className="w-full rounded-sm"/>
          </div>
        </div>
        {/* <div className="flex flex-shrink-0 h-[200] w-[350] left-28 bottom-[50] relative z-10">
          <Image src={DogAdoption} />
        </div> */}
      </div>

    </div>
  );
};

export default HomeEmergency;
