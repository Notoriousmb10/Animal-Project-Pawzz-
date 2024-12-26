"use client";
import { useEffect, useState } from "react";
import ReportSidebar from "@/components/uicomponents/ReportPage/ReportSidebar";
import ReportDetails from "@/components/uicomponents/ReportPage/ReportDetails";
import UploadImages from "@/components/uicomponents/ReportPage/UploadImages";
import SchedulePickup from "@/components/uicomponents/ReportPage/SchedulePickup";
import AdvanceOptions from "@/components/uicomponents/ReportPage/AdvanceOptions";
import SubmitReport from "@/components/uicomponents/ReportPage/SubmitReport";
const Page = () => {
  const [selectedTab, setSelectedTab] = useState(
    sessionStorage.getItem("selectedTab") || "Report Details"
  );

  useEffect(() => {
    const tab = sessionStorage.getItem("selectedTab");
    if (tab) {
      setSelectedTab(tab);
    }
  }, []);

  const handleClick = (tab) => {
    setSelectedTab(tab);
    sessionStorage.setItem("selectedTab", tab);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen ">
      <div className="h-[700px] w-[900px] border-2 rounded-[20] shadow-lg justify-center items-center flex flex-row gap-10 ">
        
          <ReportSidebar handleClick={handleClick} selectedTab={selectedTab} />
        
        <div className="h-[680px] w-[510px] border-2 rounded-[20] flex flex-col gap-16 shadow-lg" >
          {selectedTab === "Report Details" && <ReportDetails />}
          {selectedTab === "Upload Images" && <UploadImages />}
          {selectedTab === "Schedule Pickup" && <SchedulePickup />}
          {selectedTab === "Advance Options" && <AdvanceOptions />}
          {selectedTab === "Submit Report" && <SubmitReport />}
        </div>
      </div>
    </div>
  );
};

export default Page;
