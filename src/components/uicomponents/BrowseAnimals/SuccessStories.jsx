import React from "react";
import Image from "next/image";
import { successStories } from "@/app/dataArray";

const SuccessStories = () => {
  return (
    <div>
      <div className="text-left font-bold text-lg  ml-12">
        <h1>Success Stories</h1>
      </div>

      <div className="flex flex-row gap-2 relative justify-center  ">
        {successStories.map((story) => (
          <div
            key={story.id}
            className="w-[250px] h-[350px] border-2 relative rounded-[30] mt-10 hover:shadow-lg ease-in-out  "
            style={{
              transform: "translateY(0)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-40px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <Image
              src={story.image}
              alt={story.title}
              layout="fill"
              objectFit="cover"
              className="rounded-[30]  cursor-pointer z-20"
            />
            <p className="absolute top-80 left-24 z-40 text-[20px] font-bold text-white">
              {story.petName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
