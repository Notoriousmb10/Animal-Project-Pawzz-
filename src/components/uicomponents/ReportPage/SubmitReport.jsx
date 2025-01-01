import React, { useEffect } from "react";
import NormalButton from "@/components/uicomponents/NormalButton";
import AppDrawer from "@/components/uicomponents/Drawer";
import { useDetailsStore } from "@/app/Store/useStore";
import { ArrowUpFromDot } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useUser } from "@auth0/nextjs-auth0/client";
import { toast } from "sonner";

const SubmitReport = () => {
  const { user } = useUser();
  const { details, setDetails } = useDetailsStore();
  const [drawerState, setDrawerState] = React.useState(false);
  const [displayData, setDisplayData] = React.useState({});
  const [submitState, setSubmitState] = React.useState();

  const handleDetailsClick = () => {
    setDisplayData(details);
    setDrawerState(true);
    console.log(displayData);
  };

  const handleCloseDrawer = () => {
    setDrawerState(false);
  };

  useEffect(() => {
    setDetails({
      reportDetails: {
        ...details.reportDetails,
        contact: user?.email,
      },
    });
  }, []);

  const handleSubmission = async () => {
    setSubmitState(true);
    try {
      if (
        !displayData.reportDetails.description ||
        !displayData.reportDetails.animal ||
        !displayData.reportDetails.severity ||
        !displayData.reportDetails.location ||
        !displayData.reportDetails.contact ||
        !displayData.scheduledPickup.date ||
        !displayData.scheduledPickup.time ||
        !displayData.advanceOptions.methodOfContact ||
        !displayData.advanceOptions.shelterPref
      ) {
        alert("Please fill in all the required fields.");
        setSubmitState(false);
        return;
      }

      const resp = await fetch(
        "http://localhost:3000/api/create-EmergencyReport",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(displayData),
        }
      );
      const data = await resp.json();
      
      console.log(data);
      setTimeout(() => {
        setSubmitState(false);
        Sonner();
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };


  const Sonner = async () => {
    toast("Animal Report Submitted Successfully", {
      className: "bg-green-500",
      description: ``,
      action: {
        label: "Okay",
        onClick: () => console.log("Okay"),
      },
    });
  };

  return (
    <div className="flex flex-col gap-32 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
          Report Submission
        </h1>
        <h1 className="text-[14px] italic font-bold text-slate-500">
          Please Review All The Details Related To The Incident
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-full italic text-[16px] justify-center items-center">
        <p>Submit Once You Are Done Reviewing The Details</p>

        <NormalButton
          label={"Details"}
          className={"rounded-[6] h-7 w hover:bg-blue-700 bg-blue-500"}
          onClick={() => handleDetailsClick()}
          icon={<ArrowUpFromDot />}
        />
      </div>

      <div>
        <h1 className="text-[16px] italic font-medium text-center flex items-center gap-2 ">
          Every report you submit brings hope and care to an animal in need.
          Thank you for making a difference!
        </h1>
      </div>

      <AppDrawer
        isOpen={drawerState}
        onClose={handleCloseDrawer}
        displayData={displayData}
      />
      <div className="absolute bottom-14 right-[360px]">
        {submitState ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <NormalButton
            label={"Submit"}
            className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8  bg-blue-500"
            onClick={handleSubmission}
          />
        )}
      </div>
    </div>
  );
};

export default SubmitReport;
