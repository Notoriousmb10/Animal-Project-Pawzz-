"use client";

import React, { useEffect } from "react";
import { tabs } from "@/app/dataArray";
import NormalButton from "@/components/uicomponents/NormalButton";
import { HeartHandshake } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import DropDown from "../../../components/uicomponents/Select";
import { injurySeverityScale, emergencyAnimalList } from "@/app/dataArray";
import { ImageUp } from "lucide-react";
import Tab from "@/components/uicomponents/Tabs";
import GetLocation from "@/components/uicomponents/LocationFetch";
import imageicon from "../../../../public/imageicon.png";
import DragAndDropUpload from "@/components/uicomponents/DragAndDrop";
import Image from "next/image";
const Page = () => {
  const [selectedTab, setSelectedTab] = React.useState("Report Details");
  const [photoRemoval, setPhotoRemoval] = React.useState(false);
  const [images, setImages] = React.useState(localStorage.getItem('images')); 
  const handleClick = (label) => {
    setSelectedTab(label);
  };

  const deletePhotos = () => {
    setPhotoRemoval(true);
  };

  useEffect(() => {
    if(localStorage.getItem('images') === null) {
     setPhotoRemoval(false);
    }else {
      return;
    }
  }, []);


  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="h-[700px] w-[900px] border-2 rounded-[20] shadow-lg justify-evenly items-center flex flex-row gap-10">
        <div className="flex flex-col m-10 max-w-[220px] justify-center itmes-center gap-6">
          <div className=" flex flex-col gap-4">
            <h1 className="text-sm font-medium text-left flex items-center gap-2">
              <HeartHandshake /> Report an Emergency
            </h1>
            <p className="text-[14px] font-semibold text-slate-400">
              Quickly report an injured or distressed animal in your area to
              connect with local shelters, clinics, and NGOs for immediate
              assistance
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {tabs.map((tab, index) => (
              <NormalButton
                key={index}
                icon={tab.icon}
                label={tab.label}
                className={`w-[250px] h-[40px] hover:bg-white ${
                  tab.label === selectedTab ? "bg-[#EFF0F1]" : "bg-white"
                } text-[#3B3B3B]
                   border-[#D9D9D9] text-[14px] flex justify-start pl-4 shadow-none`}
                onClick={() => handleClick(tab.label)} // Pass function reference
              >
                {tab.label}
              </NormalButton>
            ))}
          </div>
          <div className=" max-w-[200px] flex flex-col gap-2">
            <p className="text-[12px]">Step 1 of 7</p>
            <Progress value={33} />
          </div>
        </div>
        <div className="h-[680px] w-[510px] border-2 rounded-[20] flex flex-col gap-20">
          {selectedTab === "Report Details" ? (
            <div className="flex flex-col justify-evenly items-start gap-4 px-4 py-4">
              <div className="text-sm font-medium text-left flex items-center gap-2">
                <h2>Report Details & Injury Description</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[14px] font-medium text-left flex items-center gap-2">
                  Describe the animal's condition
                </h2>
                <textarea
                  className="focus:outline-none border-[#94A3B8] text-[16px] rounded-[10] px-2 w-[480px] max-h-[80px] h-[100px]  shadow-md border resize-y"
                  placeholder="Describe"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <DropDown
                  placeholder={"Select Animal"}
                  className={"text-[14px]  w-[150px]"}
                  data={emergencyAnimalList}
                  other={true}
                />
                <div className="h-[40px] w-[320px] rounded-[10] flex flex-row gap-4  items-center pl-2 justify-between">
                  <DropDown
                    placeholder={"Mention Severity"}
                    className={"text-[14px] w-[320px]"}
                    data={injurySeverityScale}
                  />
                </div>
              </div>
              <div className="text-[14px] font-medium flex-col flex gap-2 mt-32">
                <h1>Location Information</h1>
                <Tab
                  className={"text=[10px]"}
                  tab1={"Manually enter location"}
                  tab2={"Share Location"}
                  tab1Content={
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-[12px] font-medium text-gray-700"
                      >
                        Enter your location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 h-6 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="e.g. Mumbai"
                      />
                    </div>
                  }
                  tab2Content={<GetLocation />}
                />
              </div>
              <div className="relative left-[400px] top-4">
                <NormalButton
                  label={"Next"}
                  className="text-[14px] rounded-[5] h-8"
                />
              </div>
            </div>
          ) : selectedTab === "Upload Images" ? (
            <div>
              <div className="flex flex-col gap-4 px-4 py-3">
                <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
                  Upload Images
                </h1>
                <p className="font-bold text-left text-[12px]  flex items-center text-slate-400 ">
                  "Attach clear images of the injured animal and its
                  surroundings. <br /> This will allow our team to assess the
                  situation accurately and take appropriate actions.
                </p>
              </div>
              <div className="flex items-center justify-center flex-col gap-4">
                <NormalButton
                  icon={<ImageUp />}
                  className={
                    "bg-[#EFF0F1] h-[38] w-[300] text-[#3B3B3B] border-[#D9D9D9] text-[12px] shadow-sm border hover:bg-white"
                  }
                  label={"Supporting Images"}
                />
              </div>
              <DragAndDropUpload photoRemovalStatus={photoRemoval}  />

              <div>
                <NormalButton
                  label={"Delete Photos"}
                  className="text-[14px] rounded-[5] h-8"
                  onClick={() => deletePhotos()}
                />
              </div>
              <div className="relative left-[400px] top-4">
                <NormalButton
                  label={"Next"}
                  className="text-[14px] rounded-[5] h-8"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
