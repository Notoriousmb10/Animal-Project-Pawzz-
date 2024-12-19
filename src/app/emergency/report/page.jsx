"use client";

import React, { use, useEffect } from "react";
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
import { set } from "mongoose";
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

  useEffect(() => {
    console.log(reportDetails.location);
  }, [reportDetails]);

  const handleAnimalChange = (value) => {
    setReportDetails({ ...reportDetails, animal: value });
  };

  const handleSeverityChange = (value) => {
    setReportDetails({ ...reportDetails, severity: value });
  }


  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="h-[700px] w-[900px] border-2 rounded-[20] shadow-lg justify-center items-center flex flex-row gap-10">
     

        <div className="h-[680px] w-[510px] border-2 rounded-[20] flex flex-col gap-16">
          {selectedTab === "Report Details" ? (
           
          ) : selectedTab === "Upload Images" ? (
            
          ) : selectedTab === "Schedule Pickup" ? (
            
          ) : selectedTab === "Advanced Options" ? (
           
          ) : selectedTab === "Submit Report" ? (
           
          ) : null}
        </div>
      </div>

       />
    </div>
  );
};

export default Page;
