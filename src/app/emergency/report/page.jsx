'use client'

import React from "react";
import { tabs } from "@/app/dataArray";
import { UiButton } from "@/components/uicomponents/Button";
import { HeartHandshake } from 'lucide-react';

const Page = () => {
  const [selectedTab, setSelectedTab] = React.useState('Report Details');

  const handleClick = (label) => {
    setSelectedTab(label);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="h-[700px] w-[900px] border-2 rounded-[20] shadow-lg">
        <div className="flex flex-col justify-center ">
          <div className="m-10 max-w-[300px] flex flex-col gap-4">
            <h1 className="text-sm font-medium text-left flex items-center gap-2">
              <HeartHandshake /> Report an Emergency
            </h1>
            <p className="text-[14px] font-semibold text-slate-400">
              Quickly report an injured or distressed animal in your area to
              connect with local shelters, clinics, and NGOs for immediate
              assistance
            </p>
          </div>
          <div className="flex flex-col gap-4 ml-10">
            {tabs.map((tab, index) => (
              <UiButton
                key={index}
                icon={tab.icon}
                label={tab.label}
                className={`w-[250px] h-[40px] hover:bg-white ${tab.label === selectedTab ? 'bg-[#EFF0F1]' : 'bg-white'} text-[#3B3B3B]
                   border-[#D9D9D9] text-[14px] flex justify-start pl-4 shadow-none`}
                onClick={() => handleClick(tab.label)} // Pass function reference
              >
                {tab.label}
              </UiButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;