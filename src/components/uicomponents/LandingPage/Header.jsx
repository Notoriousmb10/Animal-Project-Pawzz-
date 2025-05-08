import React from "react";
import { UiButton } from "../Button"; // Adjust the import path as necessary
import Image from "next/image"; // Assuming you are using Next.js
import LandingImage from "../../../../public/LandingImage.jpg"; // Adjust the import path as necessary

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center pl-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-6xl">
          Protecting <br /> Every Paw <br /> and Claw
        </h1>
        <p className="font-medium pt-2 text-slate-500">
          "Join Us in Our Mission to Safeguard Animal Welfare"
        </p>
        <div className="flex flex-row gap-2 pt-2">
          <UiButton
            className={"bg-green-500 text-white hover:bg-green-700 shadow-md"}
            label={"Join Now"}
          />
          <UiButton
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
        <Image height={900} width={900} src={LandingImage} alt="s" />
      </div>
    </div>
  );
};

export default Header;
