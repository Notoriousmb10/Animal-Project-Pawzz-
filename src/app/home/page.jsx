import React from "react";
import Image from "next/image";
import paw from "../../../public/paw.png";
import { Input } from "@/components/ui/input";
import { UiButton } from "../../components/uicomponents/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSidebar } from "../../components/uicomponents/HomePage/Sidebar";

const Home = () => {
  return (
    <div className="">
      {/* navbar */}
      <div className="flex flex-row justify-between items-center px-20 py-6">
        <div className="flex items-center gap-2 ">
          <Image src={paw} height={48} width={48} alt="" />
          <h1 className="text-2xl font-bold">Pawzz</h1>
        </div>
        <div>
          <Input
            className="rounded-lg bg-blue-50"
            placeholder="Search for NGOs/Adoption Center etc."
          />
        </div>
        <div className="flex items-center gap-3">
          <UiButton
            label={"Profile"}
            className={"rounded-full bg-blue-500"}
            link="profile"
          />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* homeheader */}
      <div className="px-20 py-10 flex flex-row gap-6">
        <div
          className="h-[400px] w-[900px] rounded-[50px] bg-center bg-cover"
          style={{
            backgroundImage: `url('/HomeDogHeader.jpg')`,
          }}
        >
          <h1 className="relative top-10 left-10 text-4xl font-semibold">
            Welcome Yash!
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="h-[194px] w-[400px] border rounded-[50px] bg-center bg-cover hover:shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url('/HomeMyPets.jpg')`,
            }}
          >
            <h1 className="relative top-24 left-10 text-3xl font-semibold">
              My Pets
            </h1>
          </div>
          <div
            className="h-[194px] w-[400px] border rounded-[50px] bg-center bg-cover hover:shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url('/HomeAppointment.jpg')`,
            }}
          >
            <h1 className="relative top-24 left-10 text-3xl font-semibold">
            Schedules
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
