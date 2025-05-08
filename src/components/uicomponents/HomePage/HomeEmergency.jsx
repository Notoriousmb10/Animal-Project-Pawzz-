import React from "react";
import DogEmergency from "../../../../public/DogEmergency.png";
import Image from "next/image";
import { UiButton } from "../Button";
import { MoveRight } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import DogDonation from "../../../../public/dogDonation.png";
const HomeEmergency = () => {
  const router = useRouter();
  return (
    <div className="flex gap-20 justify-center">
      <div className="h-[400] w-[600] border overflow-hidden bg-[#EFF6FF] rounded-[50]">
        <div className="relative z-20 ml-10 pt-2">
          <div>
            <h1 className="font-bold text-2xl text-left pt-2">
              Emergency Assistance
            </h1>
            <p className=" italic text-left pt-2  text-md ">
              Immediate Assistance for Animals in Need
            </p>
          </div>
          <div className="flex flex-col w-max gap-4 relative top-[130]">
            <UiButton
              label={"Report Injured Animal"}
              className="rounded-sm"
              link="/emergency/report"
            />
            <UiButton
              label={"First Aid Instructions"}
              icon={<MoveRight size={32} color="#ffffff" />}
              className="rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 h-[300] w-[400] left-48 bottom-[111] relative z-10">
          <Image src={DogEmergency} />
        </div>
      </div>

      <div className="h-[400] w-[600] relative border rounded-[50] bg-[#fafaf6] flex justify-start gap-10  flex-col overflow-hidden">
        <div className="absolute h-60 w-56 -right-4 bottom-0">
          <Image src={DogDonation} />
        </div>
        <div className="relative left-4 top-4">
          <h1 className="font-bold text-xl ml-7 text-left">
            Animals for Adoption And Much More
          </h1>
        </div>
        <div className="flex justify-start px-10 gap-6 mt-2 flex-col">
          <div
            className="w-[300] h-[40] relative bg-white shadow-lg hover:bg-slate-100 cursor-pointer rounded-[20]"
            onClick={() => router.push("/post-animal")}
          >
            <MoveUpRight
              size={20}
              color="#000000"
              className="absolute right-2 top-2 "
            />
            <p className="text-[24px] mx-4">Post Animals</p>
          </div>
          <div
            className="w-[300] h-[40] relative bg-white shadow-lg hover:bg-slate-100 cursor-pointer rounded-[20] "
            onClick={() => router.push("/browse-animals")}
          >
            <MoveUpRight
              size={20}
              color="#000000"
              className="absolute right-2 top-2 "
            />
            <p className="text-[24px] mx-4">Browse Animals</p>
          </div>
          <div
            className="w-[300] h-[40] relative bg-white shadow-lg hover:bg-slate-100 cursor-pointer rounded-[20]"
            onClick={() => router.push("/adopt-animal")}
          >
            <MoveUpRight
              size={20}
              color="#000000"
              className="absolute right-2 top-2 "
            />
            <p className="text-[24px] mx-4">Adopt</p>
          </div>
          <div
            className="w-[300] h-[40] relative bg-white shadow-lg hover:bg-slate-100 cursor-pointer rounded-[20]"
            onClick={() => router.push("/donate")}
          >
            <MoveUpRight
              size={20}
              color="#000000"
              className="absolute right-2 top-2 "
            />
            <p className="text-[24px] mx-4">Donate</p>
          </div>
        </div>
        {/* <div className="flex flex-shrink-0 h-[200] w-[350] left-28 bottom-[50] relative z-10">
          <Image src={DogAdoption} />
        </div> */}
      </div>
    </div>
  );
};

export default HomeEmergency;
