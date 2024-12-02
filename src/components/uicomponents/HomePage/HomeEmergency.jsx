'use client'

import { useState } from "react";
import HomeCarousel from "../../../components/uicomponents/HomePage/Carousel";
import HomeDrawer from "@/components/uicomponents/HomePage/Drawer";
import { MoveRight } from "lucide-react";



const HomeEmergency = () => {
    const [selectedOption, setSelectedOption] = useState(false);
    
return (
<div className=" px-20 py-6 flex  ">
<div
  className="h-[400px] w-[1320px] bg-[#ffffff] border rounded-[50px] 
flex flex-row justify-between  hover:shadow-lg cursor-pointer"
>
  <div className="flex flex-col  justify-between items-center p-4 ">
    <h1 className="relative  text-3xl font-semibold">
      Emergency Assistance
    </h1>
    <div className="flex flex-row gap-16">
      <div className="flex flex-col gap-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedOption === "Report Injured Animal"
              ? `bg-black text-white`
              : `bg-slate-200 text-slate-500`
          } `}
          onClick={() => setSelectedOption("Report Injured Animal")}
        >
          Report Injured Animal
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedOption === "Find Nearby Help"
              ? `bg-black text-white`
              : `bg-slate-200 text-slate-500`
          } `}
          onClick={() => setSelectedOption("Find Nearby Help")}
        >
          Find Nearby Help
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedOption === "Request Emergency Help"
              ? `bg-black text-white`
              : `bg-slate-200 text-slate-500`
          } `}
          onClick={() => setSelectedOption("Request Emergency Help")}
        >
          Request Emergency Help
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedOption === "First Aid Instructions"
              ? `bg-black text-white`
              : `bg-slate-200 text-slate-500`
          } `}
          onClick={() => setSelectedOption("First Aid Instructions")}
        >
          First Aid Instructions
        </button>
      </div>
    </div>
    <div>
      <HomeDrawer
        selectedOption={selectedOption}
        label={<MoveRight />}
        className={
          "border w-max px-3 py-2 rounded-full bg-blue-200 text-slate-500"
        }
      />
    </div>
  </div>
  <div className="max-w-lg rounded-[50px]">
    <HomeCarousel />
  </div>
</div>
</div>
)
};




export default HomeEmergency;