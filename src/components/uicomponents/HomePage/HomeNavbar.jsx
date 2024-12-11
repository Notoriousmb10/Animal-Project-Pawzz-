"use client";

import paw from "../../../../public/paw.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { UiButton } from "../Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DropDownOptions from "../DropDownMenu";
import { User } from "lucide-react";
const HomeNavbar = () => {
  const router = useRouter();
  const { user } = useUser();
  const [loggedInUser, setLoggedInUser] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect( () => {
    setLoggedInUser(user);
  }, [user]);
  return (
    <div className="flex flex-row justify-between items-center px-20 py-6">
      <div className="flex items-center gap-2 cursor-pointer"  onClick={()=> router.push("/home")}>
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
          className={"rounded-full bg-blue-500 hover:bg-blue-600"}
          // onClick={handleLogout}
          link="/api/auth/logout"
        />

       
        <DropDownOptions user={loggedInUser} />
      </div>
    </div>
  );
};

export default HomeNavbar;
