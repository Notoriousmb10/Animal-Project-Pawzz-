"use client";

import Image from "next/image";
import { UiButton } from "../Button"; // Adjust the import path as necessary
import paw from "../../../../public/paw.png"; // Adjust the import path as necessary
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { user } = useUser();
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  useEffect(() => {
    if (user && !hasLoggedIn) {
      setHasLoggedIn(true);
      window.location.href = "/home";
    }
    // const user = null;
  }, [user, hasLoggedIn]);

  return (
    <div className="flex flex-row justify-between p-10">
      <div className="flex items-center gap-2">
        <Image src={paw} height={48} width={48} alt="" />
        <h1 className="text-2xl font-bold">Pawzz</h1>
      </div>

      <UiButton
        className={"bg-white text-black hover:bg-slate-50 shadow-md"}
        label={"Login"}
        link="/api/auth/login"
      />

      {/* <UiButton
            className={"bg-white text-black hover:bg-slate-50 shadow-md"}
            label={"Logout"}
            link="/api/auth/logout"
          /> */}
    </div>
  );
};

export default NavBar;
