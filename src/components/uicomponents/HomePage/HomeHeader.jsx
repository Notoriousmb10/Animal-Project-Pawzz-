"use client";

import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Noty from "@/components/ui/notification";
import { useRouter } from "next/navigation";
import { useScheduleCountStore } from "@/app/Store/useStore";
import { useUserStore } from "@/app/Store/useStore";
const HomeHeader = () => {
  const { user } = useUser();
  const router = useRouter();
  const {setUser, loadUser} = useUserStore();
  const { scheduleCount } = useScheduleCountStore();

  useEffect(() => {

    const createUser = async () => {
      if (user) {
        try {
          const resp = await fetch("/api/create-User", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user }),
          });
          const data = await resp.json();
          await setUser(user.sub);
          console.log(user.sub)
          
          return data;
        } catch (err) {
          console.error(err);
        }
      }
    };
    createUser();

  }, [user, setUser]);



  return (
    <div className="px-20 py-10 flex flex-row gap-6">
      <div
        className="h-[400px] w-[900px] rounded-[50px] bg-center bg-cover"
        style={{
          backgroundImage: `url('/HomeDogHeader.jpg')`,
        }}
      >
        <div>
          <h1 className="relative top-10 left-10 text-4xl font-semibold">
            Welcome {user ? user.given_name : "Guest"}!
          </h1>

          <div></div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="h-[194px] w-[400px] border rounded-[50px] bg-center bg-cover hover:shadow-lg cursor-pointer"
          style={{
            backgroundImage: `url('/HomeMyPets.jpg')`,
          }}
          onClick={() => router.push("/mypets")}
        >
          <h1 className="relative top-24 left-10 text-3xl font-semibold">
            My Pets
          </h1>
        </div>
        <div
          className="h-[194px] w-[400px] relative border rounded-[50px] bg-center bg-cover hover:shadow-lg cursor-pointer"
          style={{
            backgroundImage: `url('/HomeAppointment.jpg')`,
          }}
          onClick={() => router.push("/schedules")}
        >
          <Noty
            width="32"
            color="rgb(29, 161, 242)"
            count={scheduleCount}
            className=" w-max absolute right-4 top-4"
          />
          <h1 className="relative top-24 left-10 text-3xl font-semibold">
            Schedules
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
