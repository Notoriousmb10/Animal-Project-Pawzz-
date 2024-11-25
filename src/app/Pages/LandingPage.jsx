import React from "react";
import { UiButton as Button } from "../../components/uicomponents/Button";
import Image from "next/image";
import LandingImage from "../../../public/LandingImage.jpg";
import AnimalDoc from "../../../public/AnimalDoc.jpg";
import AnimalLove from "../../../public/AnimalLove.jpg";
import AnimalShelter from "../../../public/AnimalShelter.jpg";
import StrayDogs from "../../../public/StrayDogs.jpeg";
import Ngo1 from "../../../public/Ngo1.jpeg";
import Ngo2 from "../../../public/Ngo2.png";
import Ngo3 from "../../../public/Ngo3.jpeg";
import Ngo4 from "../../../public/Ngo4.png";
import Ngo6 from "../../../public/Ngo6.jpeg";
import Ngo7 from "../../../public/Ngo7.png";
import paw from "../../../public/paw.png";
import AnimalAdopt from "../../../public/AnimalAdopt.png";
import AnimalFamily from "../../../public/AnimalFamily.png";

const LandingPage = () => {
  return (
    <>
      /* landing header
      <div className="flex flex-row justify-between p-10">
        <div className="flex items-center gap-2">
          <Image src={paw} height={48} width={48} alt="" />
          <h1 className="text-2xl font-bold">Pawzz</h1>
        </div>
        <Button
          className={"bg-white text-black hover:bg-slate-50 shadow-md"}
          label={"Login"}
        />
      </div>
      <div className="flex flex-row justify-center items-center pl-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-6xl">
            Protecting <br /> Every Paw <br /> and Claw
          </h1>
          <p className="font-medium pt-2 text-slate-500">
            "Join Us in Our Mission to Safeguard Animal Welfare"
          </p>
          <div className="flex flex-row gap-2 pt-2">
            <Button
              className={"bg-green-500 text-white hover:bg-green-700 shadow-md"}
              label={"Join Now"}
            />
            <Button
              className={
                "bg-green-100 text-green-500 hover:bg-green-700 shadow-md"
              }
              label={"Discover More"}
            />
          </div>
          <p className="font-bold text-green-500">
            Loved by Animal Advocates Worldwide 🐾
          </p>
        </div>
        <div>
          <Image height={900} width={900} src={LandingImage} alt="" />
        </div>
      </div>


      {/* adoption sec */}
      <div className="mt-20 py-20 flex flex-row gap-20 items-center justify-between px-28 bg-slate-50">
        <div className="overflow-visible">
          <Image
            src={AnimalFamily}
            height={1200}
            width={1200}
            alt="Adoptable Animal"
            className="w-[400vw] h-[40vh] object-cover transform scale-150"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-20">
          <h1 className="font-bold text-5xl gap-4 flex flex-col justify-center items-center whitespace-nowrap">
            "Because every tail deserves to <br />
            <p className="text-pink-500 rounded-lg px-2 w-max text-center">
              wag
            </p>
          </h1>

          <div className="flex flex-row gap-20">
            <div className="flex flex-col gap-20">
              <div className="text-center">
                <h1 className="font-bold text-3xl">
                  1500<span className="text-green-500">+</span> <br />
                  <span className="text-2xl"> Animals Rescued</span>
                </h1>
                <p className="font-medium pt-2 text-slate-500">
                  "Be a part of our <br /> rescue missions."
                </p>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-3xl">
                  600<span className="text-green-500">+</span> <br />
                  <span className="text-2xl whitespace-nowrap">
                    Volunteers Engaged
                  </span>
                </h1>
                <p className="font-medium pt-2 text-slate-500">
                  "Join our dedicated <br /> team of volunteers."
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-20">
              <div className="text-center">
                <h1 className="font-bold text-3xl">
                  120<span className="text-green-500">+</span> <br />
                  <span className="text-2xl whitespace-nowrap">
                    Events Organized
                  </span>
                </h1>
                <p className="font-medium pt-2 text-slate-500">
                  "Participate in our events <br /> to support animal welfare."
                </p>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-3xl">
                  50<span className="text-green-500">+</span> <br />
                  <span className="text-2xl whitespace-nowrap">
                    Partnerships Formed
                  </span>
                </h1>
                <p className="font-medium pt-2 text-slate-500">
                  "Collaborating with organizations <br /> for a greater
                  impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* landing mid section */}
      <div className="pt-20">
        <div className="flex justify-between items-center px-36">
          <div>
            <h1 className="font-bold text-5xl">Our Services</h1>
            <p className="font-medium pt-2">
              Supporting Animals,{" "}
              <span className="bg-blue-100 p-1 rounded-md underline">
                Empowering
              </span>{" "}
              Communities
            </p>
          </div>
          <div className="grid grid-cols-2 p-10 gap-10">
            <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-br-3xl p-4 flex flex-col items-center gap-2">
              <Image
                height={250}
                width={250}
                src={AnimalDoc}
                className="rounded-full shadow-lg"
              />
              <h1 className="font-medium text-xl text-center">
                Book Veterinary <br /> Appointments
              </h1>
            </div>
            <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-bl-3xl p-4 flex flex-col items-center gap-2">
              <Image
                height={250}
                width={250}
                src={AnimalLove}
                className="rounded-full shadow-lg"
              />
              <h1 className="font-medium text-xl text-center pt-3">
                Find Nearby Animal <br /> Shelters and NGOs
              </h1>
            </div>
            <div className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-tr-3xl p-4 flex flex-col items-center gap-2">
              <Image
                height={250}
                width={250}
                src={StrayDogs}
                className="rounded-full shadow-lg"
              />
              <h1 className="font-medium text-xl"> Support Stray Animals</h1>
            </div>

            <div
              className="border border-blue-100 shadow-md hover:shadow-lg bg-blue-50 rounded-tl-3xl p-4 flex flex-col 
                            items-center gap-2 "
            >
              <Image
                height={300}
                width={250}
                src={AnimalShelter}
                className="rounded-full shadow-lg"
              />
              <h1 className="font-medium text-xl text-center max-w-40 pt-3">
                Rescue/Adoption Resources
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 bg-blue-50  pt-20">
        <div className="flex justify-center flex-col items-center px-36">
          <div className="pb-20">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-5xl text-center">
                "Our Trusted Pawtners"
              </h1>
              <Image src={paw} height={42} width={42} className="ml-2" alt="" />
            </div>
            <p className="font-medium pt-6">
              We collaborate with leading{" "}
              <span className="bg-blue-200 text-black p-2 rounded-md ">
                NGOs
              </span>
              shelters, and veterinarians to provide the best care for animals.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-12 py-10">
            <Image src={Ngo1} className="rounded-full shadow-lg" />
            <Image src={Ngo2} className="rounded-full shadow-lg" />
            <Image src={Ngo3} className="rounded-full shadow-lg" />
            <Image src={Ngo4} className="rounded-full shadow-lg" />
          </div>
          <div className="grid grid-cols-2 gap-12 mt-4">
            <Image src={Ngo7} className="rounded-full shadow-lg" />
            <Image src={Ngo6} className="rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
