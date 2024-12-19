"use client";

import React, { useEffect } from "react";
import { tabs } from "@/app/dataArray";
import NormalButton from "@/components/uicomponents/NormalButton";
import { HeartHandshake } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import AppDrawer from "../../../components/uicomponents/Drawer";
import DropDown from "../../../components/uicomponents/Select";
import {
  injurySeverityScale,
  emergencyAnimalList,
  contactMethods,
} from "@/app/dataArray";
import { ImageUp } from "lucide-react";
import Tab from "@/components/uicomponents/Tabs";
import GetLocation from "@/components/uicomponents/LocationFetch";
import imageicon from "../../../../public/imageicon.png";
import DragAndDropUpload from "@/components/uicomponents/DragAndDrop";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { CalendarForm } from "@/components/uicomponents/Calendar";
const Page = () => {
  const [selectedTab, setSelectedTab] = React.useState(
    localStorage.getItem("tab")
  );
  const [photoRemoval, setPhotoRemoval] = React.useState(false);
  const [drawerState, setDrawerState] = React.useState(false);
  const [reportDetails, setReportDetails] = React.useState({
    description: "",
    animal: "",
    severity: "",
    location: "",
    contact: null,
  });

  const [uploadedImages, setUploadedImages] = React.useState([]);
  const [schedulePickup, setSchedulePickup] = React.useState({
    date: "",
    time: "",
  });

  const [advancedOptions, setAdvancedOptions] = React.useState({
    methodOfContact: "",
    team: "",
  });

  const [images, setImages] = React.useState(localStorage.getItem("images"));
  const handleClick = (label) => {
    setSelectedTab(label);
    localStorage.setItem("tab", label);
  };

  const deletePhotos = () => {
    setPhotoRemoval(true);
  };

  useEffect(() => {
    if (localStorage.getItem("images") === null) {
      setPhotoRemoval(false);
    } else {
      return;
    }
  }, []);

  const handleDetailsClick = () => {
    setDrawerState(true);
  };

  const handleCloseDrawer = () => {
    setDrawerState(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="h-[700px] w-[900px] border-2 rounded-[20] shadow-lg justify-center items-center flex flex-row gap-10">
        <div className="flex flex-col m-10 max-w-[220px] justify-evenly itmes-center gap-16">
          <div className=" flex flex-col gap-4 justify-between">
            <h1 className="text-sm font-medium text-left flex items-center gap-2">
              <HeartHandshake /> Report an Emergency
            </h1>
            <p className="text-[14px] font-semibold text-slate-400">
              Quickly report an injured or distressed animal in your area to
              connect with local shelters, clinics, and NGOs for immediate
              assistance
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-between">
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
            <p className="text-[12px]">Step 1 of 5</p>
            <Progress value={20} />
          </div>
        </div>

        <div className="h-[680px] w-[510px] border-2 rounded-[20] flex flex-col gap-16">
          {selectedTab === "Report Details" ? (
            <div className="flex flex-col justify-evenly items-start gap-4 px-4 py-4">
              <div className="text-sm font-medium text-left flex items-center gap-2">
                <h2>Report Details & Injury Description</h2>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="text-[14px] font-medium text-left  italic">
                    Describe the animal's condition
                  </h2>
                  <textarea
                    className="focus:outline-none border-[#94A3B8] text-[16px] rounded-[10] px-2 w-[480px] max-h-[80px] h-[100px]  shadow-md border resize-y"
                    placeholder="Describe"
                  />

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
                </div>
                <div className="text-[14px] font-medium flex-col flex gap-2 italic">
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
              </div>
              <div className="relative left-[400px] top-36">
                <NormalButton
                  label={"Next"}
                  className="text-[14px] rounded-[5] h-8"
                />
              </div>
            </div>
          ) : selectedTab === "Upload Images" ? (
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
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
                <div
                  className="flex items-center justify-center flex-col gap-4"
                  title="Upload from device"
                >
                  <NormalButton
                    icon={<ImageUp />}
                    className={
                      "bg-[#EFF0F1] h-[38] w-[300] text-[#3B3B3B] border-[#D9D9D9] text-[12px] shadow-sm border hover:bg-white"
                    }
                    label={"Supporting Images"}
                  />
                </div>
                <div>
                  <DragAndDropUpload photoRemovalStatus={photoRemoval} setPhotoRemovalStatus={(value)=> setPhotoRemoval(value)} />

                </div>
              </div>
              <div className="relative left-[400px] top-16">
                <NormalButton
                  label={"Delete Photos"}
                  onClick={deletePhotos}
                  className="text-[14px] rounded-[5] h-8"
                />
                <NormalButton
                  label={"Next"}
                  className="text-[14px] rounded-[5] h-8"
                />
              </div>
            </div>
          ) : selectedTab === "Schedule Pickup" ? (
            <div className="px-4 py-3 flex flex-col gap-4 justify-evenly">
              <div className="flex flex-col gap-4 ">
                <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
                  Schedule Pickup
                </h1>

                <p className="font-bold text-left text-[12px]  flex items-center text-slate-400 ">
                  Share your current location to help responders reach the site
                  quickly. <br /> You can also manually add the location where
                  the animal was found
                </p>
              </div>

              <div className="text-[16px] text-slate-500 flex flex-col gap-8">
                <h3 className="text-black">
                  Choose when responders can arrive.
                </h3>
                <div className="max-w-[250px] flex flex-col gap-4 ">
                  <CalendarForm label={"Schedule Date"} />
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="time"
                      className="block text-[16px] font-medium text-slate-500"
                    >
                      Select Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="mt-1  block w-full px-3 hover:bg-gray-100 cursor-pointer    py-2 border border-gray-300 h-9 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="text-[12px] text-red-500">
                  <p>
                    A rescue team will contact you shortly. Please remain
                    available to guide them upon arrival.
                  </p>
                </div>
                <div className="relative left-[380px] top-28">
                  <NormalButton
                    label={"Next"}
                    className="text-[14px] rounded-[5] w-16 h-8"
                  />
                </div>
              </div>
            </div>
          ) : selectedTab === "Advanced Options" ? (
            <div className="px-4 py-3 flex flex-col gap-12 justify-evenly">
              <div className="flex flex-col gap-4 ">
                <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
                  Advance Options
                </h1>

                <p className="font-bold text-left text-[12px]  flex items-center text-slate-400 ">
                  Take control of your submission with advanced options to
                  ensure a more precise and effective response. Explore the
                  following features to tailor your request
                </p>
              </div>

              <div className="text-[16px] text-slate-500 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-black text-[16px] italic">
                    Choose how responders should contact.
                  </h3>
                  <div className="max-w-[250px] flex flex-col gap-4 ">
                    <DropDown
                      placeholder={"Method of Contact"}
                      className={"text-[14px]  w-[200px]"}
                      data={contactMethods}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="block text-[16px] font-medium text-gray-700 italic"
                  >
                    Team Assignment
                  </label>
                  <p className="text-[12px]">
                    Select a specific rescue or shelter team if you have a
                    preference or recommendation.
                  </p>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 h-6 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Pawzz Rescue Team, Borivali"
                  />
                </div>

                {/* <div className="relative left-[380px] top-28">
                    <NormalButton
                      label={"Next"}
                      className="text-[14px] rounded-[5] w-16 h-8"
                    />
                  </div> */}
              </div>
            </div>
          ) : selectedTab === "Submit Report" ? (
            <div className="flex flex-col gap-32 p-4 justify-between items-start">
              <div className="flex flex-col gap-4">
                <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
                  Report Submission
                </h1>
                <h1 className="text-[14px] italic font-bold text-slate-500">
                  Please Review All The Details Related To The Incident
                </h1>
              </div>
              <div className="flex flex-col gap-4 w-[300px] italic text-[16px]">
                <div className="flex flex-row gap-4 justify-between items-center">
                  <h1>Report Details</h1>
                  <NormalButton
                    label={"Details"}
                    className={"rounded-[2] h-7"}
                    onClick={handleDetailsClick}
                  />
                </div>
                <div className="flex flex-row gap-4 justify-between items-center">
                  <h1>Uploaded Images</h1>
                  <NormalButton
                    label={"Details"}
                    className={"rounded-[2] h-7"}
                  />
                </div>
                <div className="flex flex-row gap-4 justify-between items-center">
                  <h1>Scheduled Pickup</h1>
                  <NormalButton
                    label={"Details"}
                    className={"rounded-[2] h-7"}
                  />
                </div>
                <div className="flex flex-row gap-4 justify-between items-center">
                  <h1>Advanced Options</h1>
                  <NormalButton
                    label={"Details"}
                    className={"rounded-[2] h-7"}
                  />
                </div>
              </div>

              <div>
                <h1 className="text-[16px] italic font-medium text-left flex items-center gap-2 ">
                  Every report you submit brings hope and care to an animal in
                  need. Thank you for making a difference!
                </h1>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <AppDrawer isOpen={drawerState} onClose={handleCloseDrawer} />
    </div>
  );
};

export default Page;
