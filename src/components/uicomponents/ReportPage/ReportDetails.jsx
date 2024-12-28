import React, { useEffect } from "react";
import DropDown from "@/components/uicomponents/Select";
import { emergencyAnimalList, injurySeverityScale } from "@/app/dataArray";
import Tab from "../Tabs";
import GetLocation from "../LocationFetch";
import NormalButton from "../NormalButton";
import { useDetailsStore, useProgressStore } from "@/app/Store/useStore";
import { useRouter } from "next/navigation";

const details = () => {
  const router = useRouter();
  const { progress, setProgress } = useProgressStore();
  useEffect(() => {
    setProgress(25);
  }, []);

  const { details, setDetails } = useDetailsStore();
  const handleAnimalChange = (value) => {
    setDetails({
      reportDetails: {
        ...details.reportDetails,
        animal: value,
      },
    });
  };

  const handleSeverityChange = (value) => {
    setDetails({
      reportDetails: {
        ...details.reportDetails,
        severity: value,
      },
    });
  };

  const handleNavigation = () => {
    if (
      details.reportDetails.description !== "" ||
      details.reportDetails.location !== "" ||
      details.reportDetails.animal !== "" ||
      details.reportDetails.severity !== ""
    ) {
      sessionStorage.setItem("selectedTab", "Upload Images");
      window.location.reload();
      setProgress(50);
    } else {
      alert("Please fill in all the details");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-evenly items-start gap-4 px-4 py-4">
        <div className="text-sm font-medium text-left flex items-center gap-2">
          <h2>Report Details & Injury Description</h2>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[14px] font-medium text-left mb-2  italic">
              Describe the animal's condition
            </h2>
            <textarea
              className="focus:outline-none border-[#94A3B8] text-[16px] rounded-[10] px-2 w-[480px] max-h-[80px] h-[100px]  shadow-md border resize-y"
              placeholder="Describe"
              value={details.reportDetails.description}
              onChange={(e) =>
                setDetails({
                  reportDetails: {
                    ...details.reportDetails,
                    description: e.target.value,
                  },
                })
              }
            />

            <div className="flex flex-row items-center gap-2">
              <DropDown
                placeholder={"Select Animal"}
                className={"text-[14px]  w-[150px]"}
                data={emergencyAnimalList}
                other={true}
                onChange={handleAnimalChange}
                defaultValue={details.reportDetails.animal}
              />
              <div className="h-[40px] w-[320px] rounded-[10] flex flex-row gap-4  items-center pl-2 justify-between">
                <DropDown
                  placeholder={"Mention Severity"}
                  className={"text-[14px] w-[320px]"}
                  data={injurySeverityScale}
                  onChange={handleSeverityChange}
                  defaultValue={details.reportDetails.severity}
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
                    onChange={(e) =>
                      setDetails({
                        reportDetails: {
                          ...details.reportDetails,
                          location: e.target.value,
                        },
                      })
                    }
                    value={details.reportDetails.location}
                  />
                </div>
              }
              tab2Content={
                <GetLocation
                  label="Get Location"
                  onLocationChange={(value) =>
                    setDetails({
                      reportDetails: {
                        ...details.reportDetails,
                        location: value.latitude + ", " + value.longitude,
                      },
                    })
                  }
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 right-[330px]">
        <NormalButton
          label={"Next"}
          className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8 bg-blue-500"
          onClick={handleNavigation}
        />
      </div>
    </>
  );
};

export default details;
