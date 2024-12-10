import React from "react";
import Image from "next/image";
import GoofyDog from "../../../../public/GoofyDog1.png";
import { MoveRight } from "lucide-react";

import { UiButton } from "../../uicomponents/Button";
const HomeAdoption = () => {
  return (
    <div className="flex justify-left items-center relative my-20 mx-20 gap-20">
      <div className="h-[700px] w-[600px] shadow-md bg-gradient-to-br from-white to-blue-50 rounded-md">
        <div>
          <h1 className="italic font-bold text-4xl relative left-10 top-10">
            A New Beginning
          </h1>
          <p className="text-xl relative left-10 top-20 italic ">
            Adopt a pet and embrace a <br /> journey of unconditional love,{" "}
            <br /> where every wag, purr, <br /> and paw-step fills <br /> your
            heart with <span className="text-pink-500 font-bold">joy</span>.
          </p>
          <div className="relative top-40 left-10 font-bold italic flex flex-col gap-2">
            <p className="bg-pink-200 w-max px-2 text-black">
              2K+ Pets Adopted
            </p>
            <p className="bg-pink-200 w-max px-2 text-black">
              100+ Adoption Centers
            </p>
            <p className="bg-pink-200 w-max px-2 text-black">
              5+ Years of Experience
            </p>
          </div>
        </div>
        <div className="relative top-52 left-10  ">
          <UiButton
            label={"Adoption Centers"}
            icon={<MoveRight size={32} color="#ffffff" />}
          />
        </div>
        <div className="h-[600] absolute left-[300] bottom-0">
          <Image src={GoofyDog} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="h-[700px] w-[650px]   bg-gradient-to-bl from-white to-red-50  rounded-md shadow-md">
        <div>
          <h1 className="italic font-bold text-4xl right-16 relative text-right top-10 text-black">
            Together for Their <br /> Tomorrow
          </h1>
          <p className="text-xl relative right-16 top-20 text-right italic text-black ">
            Support an NGO and be a part of <br />
            a movement of compassion, <br />
            where every effort, rescue, <br />
            and care transforms lives <br />
            and inspires <span className="font-bold text-blue-500">hope</span>.
          </p>
          <div className="relative top-32 right-16 font-bold italic flex flex-col gap-2 items-end">
            <p className="bg-blue-200 w-max px-2 text-black text-right">
              500+ NGOs Listed
            </p>
            <p className="bg-blue-200 w-max px-2 text-black text-right">
              200K+ Animals Rescued
            </p>
            <p className="bg-blue-200 w-max px-2 text-black text-right">
              10+ Years of Impact
            </p>
          </div>
        </div>
        <div className="relative top-[206px] left-72  ">
          <UiButton
            label={"NGO Centers"}
            icon={<MoveRight size={32} color="#ffffff" />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAdoption;
