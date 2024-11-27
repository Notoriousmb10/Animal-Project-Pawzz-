"use client";

import React from "react";
import Image from "next/image";
import paw from "../../../public/paw.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { UiButton } from "../../components/uicomponents/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSidebar } from "../../components/uicomponents/HomePage/Sidebar";
import HomeCarousel from "../../components/uicomponents/HomePage/Carousel";
import HomeDrawer from "@/components/uicomponents/HomePage/Drawer";
import { Import, MoveRight } from "lucide-react";
import NgoDogs from "../../../public/NgoDogs.jpg";
import PetaNGO from "../../../public/PetaNGO.png";
import UnkNGO from "../../../public/UnkNGO.png";
import UnkNGO2 from "../../../public/UnkNGO2.jpeg";
import { Search } from "lucide-react";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [LoadNGo, setLoadNGo] = useState(false);
  const [LoadMoreButton, setLoadMoreButton] = useState(true);
  const [HideMoreButton, setHideMoreButton] = useState(false);

  const loadMoreHandler = () => {
    setLoadMoreButton(false);
    setHideMoreButton(true);
    setLoadNGo(true);
  };

  const loadLessHandler = () => {
    setHideMoreButton(false);
    setLoadNGo(false);
    setLoadMoreButton(true);
  };

  const selectedOptionHandler = (option) => {
    setSelectedOption(option);
  };
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

      <div className=" px-20 py-6 ">
        <div
          className="h-[400px] w-[1320px] bg-[#ffffff] border rounded-[50px] 
        flex flex-row justify-between  hover:shadow-lg cursor-pointer"
        >
          <div className="flex flex-col  justify-between items-center p-4 ">
            <h1 className="relative  text-3xl font-semibold">
              Emergency Assistance
            </h1>
            <div className="flex flex-row gap-16">
              <div className="flex flex-col gap-6">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    selectedOption === "Report Injured Animal"
                      ? `bg-black text-white`
                      : `bg-slate-200 text-slate-500`
                  } `}
                  onClick={() => setSelectedOption("Report Injured Animal")}
                >
                  Report Injured Animal
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    selectedOption === "Find Nearby Help"
                      ? `bg-black text-white`
                      : `bg-slate-200 text-slate-500`
                  } `}
                  onClick={() => setSelectedOption("Find Nearby Help")}
                >
                  Find Nearby Help
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    selectedOption === "Request Emergency Help"
                      ? `bg-black text-white`
                      : `bg-slate-200 text-slate-500`
                  } `}
                  onClick={() => setSelectedOption("Request Emergency Help")}
                >
                  Request Emergency Help
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    selectedOption === "First Aid Instructions"
                      ? `bg-black text-white`
                      : `bg-slate-200 text-slate-500`
                  } `}
                  onClick={() => setSelectedOption("First Aid Instructions")}
                >
                  First Aid Instructions
                </button>
              </div>
            </div>
            <div>
              <HomeDrawer
                selectedOption={selectedOption}
                label={<MoveRight />}
                className={
                  "border w-max px-3 py-2 rounded-full bg-blue-200 text-slate-500"
                }
              />
            </div>
          </div>
          <div className="max-w-lg rounded-[50px]">
            <HomeCarousel />
          </div>
        </div>
      </div>

      {/* animal ngo */}

      <div className="flex justify-center items-center my-20 flex-col">
        <div className="h-[300px] w-[800px] p-10 flex items-center flex-col ">
          <Image src={NgoDogs} />
          <input
            type="text"
            placeholder="Search for animal NGOs"
            className="px-32 pt-2 pb-6 border-b-4 rounded-b-[50] focus:outline-none"
          />
          <Search />
        </div>

        <div className="mt-10">
          <h1>
            Top <br /> <span className="font-light text-slate-500">NGO's</span>
          </h1>

          <div className="flex flex-row justify-center items-center border-2 p-2 rounded-[50] mt-10">
            <div className="flex flex-row items-center justify-center gap-4">
              <Image src={PetaNGO} className="h-[200px] w-[200px]" />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">NGO NAME</h1>
                <p className="max-w-lg font-light text-[16px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat necessitatibus perferendis ipsam quam quidem illum
                  blanditiis aspernatur voluptate doloremque illo sunt esse,
                  vero fugit inventore sed, nam explicabo odio placeat.
                </p>
                <div className="flex flex-row gap-4">
                  <UiButton
                    label={"View"}
                    className={"rounded-sm hover:bg-blue-400 bg-blue-500 "}
                  />
                  <UiButton
                    label={"Contact"}
                    className={"rounded-sm hover:bg-blue-400 bg-blue-500"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`rounded-sm ${
                LoadMoreButton ? "flex" : "hidden"
              } hover:bg-blue-400 bg-blue-300 p-1 text-white text-[16px]`}
              onClick={() => loadMoreHandler()}
            >
              Load More
            </button>
          </div>

          <div
            className={` ${
              LoadNGo ? "flex" : "hidden"
            }  flex-row justify-center items-center border-2 p-2 rounded-[50] mt-10`}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <Image src={UnkNGO} className="h-[200px] w-[200px]" />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">Hope for Paws</h1>
                <p className="max-w-lg font-light text-[16px]">
                  Hope for Paws is dedicated to rescuing stray animals and
                  providing them with immediate medical care and shelter. They
                  focus on giving abandoned pets a second chance at life.
                </p>
                <div className="flex flex-row gap-4">
                  <UiButton
                    label={"View"}
                    className={"rounded-sm hover:bg-blue-400 bg-blue-500 "}
                  />
                  <UiButton
                    label={"Contact"}
                    className={"rounded-sm hover:bg-blue-400 bg-blue-500"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={` ${
              LoadNGo ? "flex" : "hidden"
            }  flex-row justify-center items-center border-2 p-2 rounded-[50] mt-10`}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <Image src={UnkNGO2} className="h-[200px] w-[200px]" />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">Stewarts Aid Unlimited</h1>
                <p className="max-w-lg font-light text-[16px]">
                  Animal Aid Unlimited works tirelessly to provide medical aid
                  and rescue services for injured street animals. Their mission
                  is to inspire a compassionate world for all living beings.
                </p>
                <div className="flex flex-row gap-4">
                  <UiButton
                    label={"View"}
                    className={"rounded-sm hover:bg-blue-400 bg-blue-500 "}
                  />
                  <UiButton
                    label={"Contact"}
                    className={"rounded-sm hover:bg-blue-400 bg-blue-500"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`rounded-sm ${
                HideMoreButton ? "flex" : "hidden"
              } hover:bg-blue-400 bg-blue-300 p-1 text-white text-[16px]`}
              onClick={() => loadLessHandler()}
            >
              Show Less
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
