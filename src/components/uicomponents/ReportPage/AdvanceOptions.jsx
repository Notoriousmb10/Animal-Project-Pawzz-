import React, {useEffect} from "react";
import DropDown from "@/components/uicomponents/Select";
import { contactMethods } from "@/app/dataArray";
import { useDetailsStore } from "../../../app/Store/useStore";
import NormalButton from "../NormalButton";
import { useProgressStore } from "../../../app/Store/useStore";

const AdvanceOptions = () => {
  const { details, setDetails } = useDetailsStore();
  const { setProgress } = useProgressStore();
  useEffect(() => {
    setProgress(90);
  }, [setProgress]);

  const handleMethodOfContactChange = (value) => {
    setDetails({
      advanceOptions: {
        ...details.advanceOptions,
        methodOfContact: value,
      },
    });
  };

  const handleShelterPrefChange = (event) => {
    setDetails({
      advanceOptions: {
        ...details.advanceOptions,
        shelterPref: event.target.value,
      },
    });
  };

  const handleNavigation = () => {
    if (details.advanceOptions.methodOfContact === "") {
      alert("Please select a method of contact.");
      return;
    }
    sessionStorage.setItem("selectedTab", "Submit Report");
    window.location.reload();
    setProgress(100);
  };

  return (
    <>
      <div className="px-4 py-3 flex flex-col gap-12 justify-evenly">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
            Advance Options
          </h1>
          <p className="font-bold text-left text-[12px] flex items-center text-slate-400 ">
            Take control of your submission with advanced options to ensure a
            more precise and effective response. Explore the following features
            to tailor your request
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
                className={"text-[14px] w-[200px]"}
                data={contactMethods}
                onChange={handleMethodOfContactChange}
                defaultValue={details.advanceOptions.methodOfContact}
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
              Select a specific rescue or shelter team if you have a preference
              or recommendation.
            </p>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 h-6 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Pawzz Rescue Team, Borivali"
              onChange={handleShelterPrefChange}
              value={details.advanceOptions.shelterPref}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 right-[360px]">
        <NormalButton
          label={"Next"}
          className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8 bg-blue-500"
          onClick={handleNavigation}
        />
      </div>
    </>
  );
};

export default AdvanceOptions;
