import React, { useEffect } from "react";
import NormalButton from "@/components/uicomponents/NormalButton";
import AppDrawer from "@/components/uicomponents/Drawer";
import { useDetailsStore } from "@/app/Store/useStore";
import { sections } from "@/app/dataArray";
const SubmitReport = () => {
  const { details } = useDetailsStore();
  const [drawerState, setDrawerState] = React.useState(false);
  const [displayData, setDisplayData] = React.useState({});
  const handleDetailsClick = (section) => {
    if (section === "Report Details") {
      setDisplayData(details.reportDetails);
    } else if (section === "Uploaded Images") {
      setDisplayData(details.uploadedImages);
    } else if (section === "Scheduled Pickup") {
      setDisplayData(details.scheduledPickup);
    } else if (section === "Advanced Options") {
      setDisplayData(details.advancedOptions);
    }

    setDrawerState(true);
  };

  useEffect(() => {
    console.log(details);

  }, []);

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
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 justify-between items-center"
          >
            <h1>{section}</h1>
            <NormalButton
              label={"Details"}
              className={"rounded-[2] h-7"}
              onClick={() => handleDetailsClick(section)}
            />
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-[16px] italic font-medium text-left flex items-center gap-2 ">
          Every report you submit brings hope and care to an animal in need.
          Thank you for making a difference!
        </h1>
      </div>

      <AppDrawer isOpen={drawerState} onClose={handleCloseDrawer} displayData={displayData}/>
    </div>
  );
};

export default SubmitReport;
