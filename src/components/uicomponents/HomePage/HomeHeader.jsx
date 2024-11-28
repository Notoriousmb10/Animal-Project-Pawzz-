import React from "react";

const HomeHeader = () => {
  return (
    <div className="px-20 py-10 flex flex-row gap-6">
      <div
        className="h-[400px] w-[900px] rounded-[50px] bg-center bg-cover"
        style={{
          backgroundImage: `url('/HomeDogHeader.jpg')`,
        }}
      >
        <h1 className="relative top-10 left-10 text-4xl font-semibold">
          Welcome Yash!
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="h-[194px] w-[400px] border rounded-[50px] bg-center bg-cover hover:shadow-lg cursor-pointer"
          style={{
            backgroundImage: `url('/HomeMyPets.jpg')`,
          }}
        >
          <h1 className="relative top-24 left-10 text-3xl font-semibold">
            My Pets
          </h1>
        </div>
        <div
          className="h-[194px] w-[400px] border rounded-[50px] bg-center bg-cover hover:shadow-lg cursor-pointer"
          style={{
            backgroundImage: `url('/HomeAppointment.jpg')`,
          }}
        >
          <h1 className="relative top-24 left-10 text-3xl font-semibold">
            Schedules
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
