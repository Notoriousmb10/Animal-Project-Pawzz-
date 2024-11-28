'use client'

import paw from "../../../../public/paw.png";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import  Image  from "next/image";
import { UiButton } from "../Button";
import { useUser } from '@auth0/nextjs-auth0/client';
const HomeNavbar = () => {
  const {user, logout} = useUser();

  const handleLogout = async() => {
    await logout();
    window.location.href = "/api/auth/logout";
  }
  return (
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
          label={"Logout"}
          className={"rounded-full bg-blue-500"}
          onClick={handleLogout}
        />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default HomeNavbar;
