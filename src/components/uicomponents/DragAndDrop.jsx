import React, { useState } from "react";
import Image from "next/image";
import { ImageUp } from "lucide-react";
import { useImagesStore } from "@/app/Store/useStore";

const DragAndDropUpload = ({ route, className, label }) => {
  const { getImages, setImages } = useImagesStore(); // Access store functions
  const images = getImages(route); // Get images for the current route

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.style.border = "2px dashed #00f";
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.style.border = "2px dashed #aaa";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.style.border = "2px dashed #aaa";

    const files = event.dataTransfer.files;
    const newImages = [];
    if (files) {
      let filesProcessed = 0;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => {
            newImages.push(reader.result);
            filesProcessed++;

            if (filesProcessed === files.length) {
              setImages(route, [...images, ...newImages].slice(0, 6)); // Limit to 6 images
            }
          };
          reader.readAsDataURL(file);
        } else {
          alert("Please upload only image files.");
        }
      }
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={className}
      style={{
        border: "2px dashed #aaa",
        borderRadius: "10px",
        textAlign: "center",
        
       
        margin: "auto",
        maxHeight: "300px",
      }}
    >
      {images.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <h3 className="italic font-thin text-center">
            {label}
          </h3>
          <ImageUp size={100} className="opacity-20" />
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 w-full relative">
        {images.slice(0, 6).map((img, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] bg-white flex items-center justify-center"
          >
            <Image
              src={img}
              alt={`Uploaded Image ${index + 1}`}
              className="object-cover h-[80px] w-[80px]"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropUpload;
