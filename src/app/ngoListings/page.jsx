"use client";
import Image from "next/image";
import { useState } from "react";
import { UiButton } from "../../components/uicomponents/Button";
import NgoDogs from "../../..//public/NgoDogs.jpg";
import PetaNGO from "../../../public/PetaNGO.png";
import UnkNGO from "../../../public/UnkNGO.png";
import UnkNGO2 from "../../../public/UnkNGO2.jpeg";
import { Search } from "lucide-react";

const HomeNgo = () => {
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

  return (
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                necessitatibus perferendis ipsam quam quidem illum blanditiis
                aspernatur voluptate doloremque illo sunt esse, vero fugit
                inventore sed, nam explicabo odio placeat.
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
                Animal Aid Unlimited works tirelessly to provide medical aid and
                rescue services for injured street animals. Their mission is to
                inspire a compassionate world for all living beings.
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
  );
};

export default HomeNgo;
