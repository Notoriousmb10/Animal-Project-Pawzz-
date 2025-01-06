"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { successStories } from "../dataArray";

const page = () => {
  return (
    <div className="mx-20 my-20">
      <div className="text-left font-bold text-lg ">
        <h1>Success Stories</h1>
      </div>

      <div className="flex flex-row gap-2">
        {successStories.map((story) => (
          <div
            key={story.id}
            className="w-[250px] h-[350px] border-2 relative rounded-[30] mt-10"
          >
            <Image
              src={story.image}
              alt={story.title}
              layout="fill"
              objectFit="cover"
              className="rounded-[30]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
