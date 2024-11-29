import React from "react";
import MyPets from "../../../public/MyPets.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import DropDown from "../../components/uicomponents/Select";
import { ImageUp } from "lucide-react";
import { Pencil } from "lucide-react";

import { UiButton } from "../../components/uicomponents/Button";
const MyPetsPage = () => {
  return (
    <div className="p-20">
      {/* Header Section */}
      <div className="flex flex-row gap-8  justify-center items-center">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src={MyPets}
            alt="Your Paws"
            className="rounded-[50] w-64 h-64 object-cover"
          />
        </div>
        <div className="flex flex-row bg-gray-100 justify-between p-6 rounded-[50] shadow-md  max-w-lg w-full">
          {/* Form */}
          <div className="flex flex-col gap-6 max-w-lg">
            <Input placeholder="Name" className="bg-white" />
            <DropDown placeholder={"Select Animal"}/>
            <DropDown placeholder={'Select Breed'}/>
            <textarea
              placeholder="Description"
              className="border p-2 rounded-lg  resize-none"
              rows="3"
            ></textarea>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[200] w-[200] border rounded-[40] bg-slate-100 hover:bg-slate-200 cursor-pointer">
              <div className="flex items-center justify-center relative top-14">
                <ImageUp className="h-10 w-10" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UiButton
                className="bg-blue-500 text-white px-16 py-2 rounded-[40] hover:bg-blue-600"
                label={"Add"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center px-40 py-10">
        <h2 className="mt-8 text-2xl font-semibold text-left pb-10">Your Paws</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-32 mt-4">
          {[1, 2, 3].map((pet) => (
            <div key={pet} className="h-[200] w-[200] border rounded-[50]">
              <div className="flex items-center justify-end relative right-4 top-4 ">
                <Pencil className="text-slate-400 hover:bg-slate-300 cursor-pointer rounded-md"/>
              </div>

              <div className="h-[60] w-[200] rounded-b-[50] bg-slate-200 relative top-24  flex items-center justify-center">
                <h3>Name</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPetsPage;
