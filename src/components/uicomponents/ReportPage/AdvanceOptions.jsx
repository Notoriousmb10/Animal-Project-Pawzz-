import React from 'react';
import DropDown from '@/components/uicomponents/Select';
import { contactMethods } from '@/app/dataArray';

const AdvanceOptions = () => {
  const [advancedOptions, setAdvancedOptions] = React.useState({
    methodOfContact: "",
    team: "",
  });
  
  return (
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
  );
}


export default AdvanceOptions;