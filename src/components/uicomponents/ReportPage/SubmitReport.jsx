import React from "react";
import NormalButton from "@/components/uicomponents/NormalButton";
import AppDrawer from "@/components/uicomponents/Drawer";

const SubmitReport = () => {
  const [drawerState, setDrawerState] = React.useState(false);

  const handleDetailsClick = () => {
    setDrawerState(true);
  };

  const handleCloseDrawer = () => {
    setDrawerState(false);
  };
  return (
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
          <NormalButton label={"Details"} className={"rounded-[2] h-7"} />
        </div>
        <div className="flex flex-row gap-4 justify-between items-center">
          <h1>Scheduled Pickup</h1>
          <NormalButton label={"Details"} className={"rounded-[2] h-7"} />
        </div>
        <div className="flex flex-row gap-4 justify-between items-center">
          <h1>Advanced Options</h1>
          <NormalButton label={"Details"} className={"rounded-[2] h-7"} />
        </div>
      </div>

      <div>
        <h1 className="text-[16px] italic font-medium text-left flex items-center gap-2 ">
          Every report you submit brings hope and care to an animal in need.
          Thank you for making a difference!
        </h1>
      </div>

      <AppDrawer isOpen={drawerState} onClose={handleCloseDrawer} />
    </div>
  );
};

export default SubmitReport;
