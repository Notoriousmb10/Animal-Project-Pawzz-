"use client";

import paw from "../../../../public/paw.png";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { UiButton } from "../Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import DropDownOptions from "../DropDownMenu";
import { useRouter } from "next/navigation";
const HomeNavbar = () => {
  const router = useRouter();

  const { user } = useUser();

  return (
    <div className="flex flex-row justify-between items-center px-20 py-6">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/home")}
      >
        <Image src={paw} height={48} width={48} alt="s" />

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
          label={"Logout"}
          className={"rounded-full bg-blue-500 hover:bg-blue-600"}
          // onClick={handleLogout}
          link="/api/auth/logout"
        />

        <DropDownOptions user={user} />
      </div>
    </div>
  );
};

export default HomeNavbar;
