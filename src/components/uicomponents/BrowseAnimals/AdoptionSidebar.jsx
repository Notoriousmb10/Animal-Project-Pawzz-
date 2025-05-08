import React, { useState } from "react";
import { browseAnimalSections } from "@/app/dataArray";
import NormalButton from "@/components/uicomponents/NormalButton";
const AdoptionSidebar = ({ currentTab }) => {
  const [selectedTab, setSelectedTab] = useState("Adoptions");
  const handleClick = (tab) => {
    setSelectedTab(tab);
    currentTab(tab);
  };
  return (
    <div className="w-[220px]  sticky top-0">
      <div className="flex flex-col gap-4 justify-between">
        <h1 className=" text-left flex items-center gap-2 font-bold text-[19px] ml-12 ">
          Adoption Section
        </h1>
        {browseAnimalSections.map((tab, index) => (
          <NormalButton
            key={index}
            icon={tab.icon}
            label={tab.label}
            className={`w-[250px] h-[40px] hover:bg-white ${
              tab.label === selectedTab ? "bg-[#EFF0F1]" : "bg-white"
            } text-[#3B3B3B]
              border-[#D9D9D9] text-[14px] flex justify-start pl-4 shadow-none`}
            onClick={() => handleClick(tab.label)}
          >
            {tab.label}
          </NormalButton>
        ))}
      </div>
    </div>
  );
};

export default AdoptionSidebar;
