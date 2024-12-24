"use client";
import { use, useEffect, useState } from "react";
import ReportSidebar from "@/components/uicomponents/ReportPage/ReportSidebar";
import ReportDetails from "@/components/uicomponents/ReportPage/ReportDetails";
import UploadImages from "@/components/uicomponents/ReportPage/UploadImages";
import SchedulePickup from "@/components/uicomponents/ReportPage/SchedulePickup";
import AdvanceOptions from "@/components/uicomponents/ReportPage/AdvanceOptions";
import SubmitReport from "@/components/uicomponents/ReportPage/SubmitReport";
const Page = () => {
  const [selectedTab, setSelectedTab] = useState(
    localStorage.getItem("selectedTab") || "Report Details"
  );

  useEffect(() => {
    const tab = localStorage.getItem("selectedTab");
    if (tab) {
      setSelectedTab(tab);
    }
  }, []);

  const handleClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem("selectedTab", tab);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen min-w-screen">
        <div className="h-[700px] w-[900px] border-2 rounded-[20] shadow-lg justify-center items-center flex flex-row gap-10">
          <ReportSidebar handleClick={handleClick} selectedTab={selectedTab} />
          <div className="h-[680px] w-[510px] border-2 rounded-[20] flex flex-col gap-16">
            {selectedTab === "Report Details" ? (
              <ReportDetails />
            ) : selectedTab === "Upload Images" ? (
              <UploadImages />
            ) : selectedTab === "Schedule Pickup" ? (
              <SchedulePickup />
            ) : selectedTab === "Advance Options" ? (
              <AdvanceOptions />
            ) : selectedTab === "Submit Report" ? (
              <SubmitReport />
            ) : null}
          </div>
        </div>
      </div>
    s</>
  );
};

export default Page;
