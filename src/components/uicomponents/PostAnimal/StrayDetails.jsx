import React from "react";
import DropDown from '../../uicomponents/Select';
import {
  vaccinationStatus,
  spayNeuterStatus,
  vetCheckStatus,
  identificationStatus,
  behaviorStatus,
  injuryStatus
} from '../../../app/dataArray';

const StrayDetails = () => {
  return (
    <div className="h-[700px] w-[1000px] border-2 rounded-[20] shadow-lg mx-12 my-6 flex flex-row gap-6 ">
      <div className="m-6">
        <div className="flex flex-row gap-4 items-center mt-4">
          <p className="text-[14px] font-semibold w-[300px]">Has the Dog Received Any Vaccinations?</p>
          <DropDown
            placeholder="Select vaccination status"
            data={vaccinationStatus}
            className="w-48"
          />
        </div>

        <div className="flex flex-row gap-4 items-center mt-4">
          <p className="text-[14px] font-semibold w-[300px]">Has the Dog Been Spayed or Neutered?</p>
          <DropDown
            placeholder="Select spay/neuter status"
            data={spayNeuterStatus}
            className="w-48"
          />
        </div>

        <div className="flex flex-row gap-4 items-center mt-4">
          <p className="text-[14px] font-semibold w-[300px]">Has the Dog Been Checked by a Veterinarian?</p>
          <DropDown
            placeholder="Select vet check status"
            data={vetCheckStatus}
            className="w-48"
          />
        </div>

        <div className="flex flex-row gap-4 items-center mt-4">
          <p className="text-[14px] font-semibold w-[300px]">Does the Dog Have Any Identification (e.g., Collar or Tag)?</p>
          <DropDown
            placeholder="Select identification status"
            data={identificationStatus}
            className="w-48"
          />
        </div>

        <div className="flex flex-row gap-4 items-center mt-4">
          <p className="text-[14px] font-semibold w-[300px]">How is the Dog's Behavior Around People?</p>
          <DropDown
            placeholder="Select behavior status"
            data={behaviorStatus}
            className="w-48"
          />
        </div>

        <div className="flex flex-row gap-4 items-center mt-4">
          <p className="text-[14px] font-semibold w-[300px]">Does the Dog Have Any Visible Injuries?</p>
          <DropDown
            placeholder="Select injury status"
            data={injuryStatus}
            className="w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default StrayDetails;
