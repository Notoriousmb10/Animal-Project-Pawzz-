import React, { useEffect, useRef } from "react";
import NormalButton from "@/components/uicomponents/NormalButton";
import { ImageUp } from "lucide-react";
import { useRouter } from "next/router";
import DragAndDropUpload from "@/components/uicomponents/DragAndDrop";
import { useProgressStore } from "@/app/Store/useStore";
const UploadImage = () => {
  const { setProgress } = useProgressStore();
  const [images, setImages] = React.useState(
    JSON.parse(sessionStorage.getItem("images")) || []
  );
  const [photoRemoval, setPhotoRemoval] = React.useState(false);
  const fileInputRef = useRef(null);


  useEffect(() => {
    setProgress(50);
  }, []);


  const handleNavigation = () => {
    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    sessionStorage.setItem("selectedTab", "Schedule Pickup");
    window.location.reload();
    setProgress(75);
  };

  const handleUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);

    // Check if new uploads exceed the maximum of 6 photos
    if (images.length + uploadedFiles.length > 6) {
      alert("You can upload a maximum of 6 photos.");
      return;
    }

    // Convert files to Base64 and update state
    const fileReaders = uploadedFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result); // Get Base64 string
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders).then((base64Images) => {
      const updatedImages = [...images, ...base64Images];
      const limitedImages = updatedImages.slice(0, 6); // Ensure no more than 6 images
      setImages(limitedImages);
      // Save updated images to sessionStorage
      sessionStorage.setItem("images", JSON.stringify(limitedImages));
    });
  };

  useEffect(() => {
    // If no images exist in sessionStorage, set `photoRemoval` to false
    if (!sessionStorage.getItem("images")) {
      setPhotoRemoval(false);
    }
  }, []);

  return (
    <div className="flex flex-col justify-between gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 px-4 py-3">
          <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
            Upload Images
          </h1>
          <p className="font-bold text-left text-[12px] flex items-center text-slate-400 ">
            "Attach clear images of the injured animal and its surroundings.{" "}
            <br /> This will allow our team to assess the situation accurately
            and take appropriate actions.
          </p>
        </div>
        <div
          className="flex items-center justify-center flex-col gap-4"
          title="Upload from device"
        >
          <NormalButton
            icon={<ImageUp />}
            className={
              "bg-[#EFF0F1] h-[38] w-[300] text-[#3B3B3B] border-[#D9D9D9] text-[12px] shadow-sm border hover:bg-white"
            }
            label={"Supporting Images"}
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            multiple
            ref={fileInputRef}
            accept="image/*"
            onChange={handleUpload} // Use onChange instead of onClick for file input
          />
        </div>
        <div>
          <DragAndDropUpload
            photoRemovalStatus={photoRemoval}
            setPhotoRemovalStatus={(value) => setPhotoRemoval(value)}
            images={images}
          />
        </div>
      </div>
      <div className="absolute bottom-14 right-[330px] flex gap-52  ">
        <NormalButton
          label={"Delete Photos"}
          onClick={() => {
            setImages([]);
            sessionStorage.removeItem("images"); // Remove images from sessionStorage
          }}
          className="text-[14px] rounded-[5] h-8 bg-blue-300 hover:bg-blue-500"
        />
        <NormalButton
          label={"Next"}
          className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8 bg-blue-500"
          onClick={handleNavigation}
        />
      </div>
    </div>
  );
};

export default UploadImage;
