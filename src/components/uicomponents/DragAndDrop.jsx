import { use, useState } from "react";
import Image from "next/image";
import { ImageUp } from "lucide-react";
import { useEffect } from "react";
import { useImagesStore } from "@/app/Store/useStore";
const DragAndDropUpload = () => {
  const { images, setImages } = useImagesStore();
  const [savedImages, setSavedImages] = useState(
    JSON.parse(sessionStorage.getItem("images")) || []
  );

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
              setImages(newImages);
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
      style={{
        border: "2px dashed #aaa",
        borderRadius: "10px",
        padding: "40px",
        textAlign: "center",
        width: "480px",
        maxWidth: "500px",
        margin: "auto",
        maxHeight: "300px",
      }}
    >
      {images.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <h3 className="italic font-thin text-center">
            Drag and Drop Images Here
          </h3>
          <ImageUp size={128} className="opacity-20" />
        </div>
      )}

      {/* Display images inside the grid */}
      <div className="grid grid-cols-3 gap-10 w-full relative">
        {images.slice(0, 6).map((img, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] bg-white flex items-center justify-center"
          >
            <Image
              src={img}
              alt={`Uploaded Image ${index + 1}`}
              className="object-cover h-full w-full opacity-30"
              width={20} // Adjust width as necessary
              height={20} // Adjust height as necessary
            />
          </div>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const files = e.target.files;
          const newImages = [];

          if (files) {
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  newImages.push(reader.result);
                  if (newImages.length === files.length) {
                    savedImages((prevImages) =>
                      [...prevImages, ...newImages].slice(0, 6)
                    ); // Limit to 6 images
                  }
                };
                reader.readAsDataURL(file);
              } else {
                alert("Please upload only image files.");
              }
            }
          }
        }}
      />
    </div>
  );
};

export default DragAndDropUpload;
