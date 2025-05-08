import React, { useEffect } from "react";
import MyPets from "../../../../public/MyPets.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import DropDown from "../../../components/uicomponents/Select";
import { ImageUp } from "lucide-react";
import { useRef } from "react";
import { UiButton } from "../../../components/uicomponents/Button";
import { dogList, catList, birdList, animalList } from "@/app/dataArray";
import { useUserStore } from "@/app/Store/useStore";
const AddPets = ({ loadPets }) => {
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = React.useState(null);
  const [animal, setAnimal] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [petName, setPetName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isPhoto, setIsPhoto] = React.useState(false);
  const { userId } = useUserStore();

  const createPet = async () => {
    if (!petName || !animal || !breed || !description || !photo) {
      alert("Please fill all the fields");
      return;
    } else {
      try {
        const resp = await fetch("/api/create-Pet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ petName, animal, breed, description, userId }),
        });

        sessionStorage.setItem(`${petName}`, JSON.stringify(photo));

        const data = await resp.json();
        console.log(data);
        if (resp.ok) {
          setPhoto(null);
          setAnimal("");
          setBreed("");
          setPetName("");
          setDescription("");
          setIsPhoto(false);
          fileInputRef.current.value = "";
          loadPets();
        } else {
          console.error("Failed to create appointment: ", data);
        }
      } catch (error) {
        console.error("Failed to create appointment: ", error);
      }
    }
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
        setIsPhoto(true);
        console.log("Selected file : ", file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-20 ">
      <div className="flex flex-row gap-16  justify-center items-center">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <Image
            src={MyPets}
            alt="Your Paws"
            className="rounded-[50] w-64 h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60 rounded-[50]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white z-10 font-bold text-3xl">My Pets</h1>
          </div>
        </div>
        <div className="flex flex-row shadow-lg justify-between p-6 bg-[#f0f8ff] rounded-[50]  max-w-lg w-full">
          {/* Form */}
          <div className="flex flex-col gap-2 max-w-lg ">
            <Input
              placeholder="Name"
              className="bg-white border-2 border-slate-300"
              onChange={(e) => {
                setPetName(e.target.value);
              }}
            />

            <DropDown
              placeholder={"Select Animal"}
              onChange={(value) => setAnimal(value)}
              data={animalList}
              className={"border-2 border-slate-300"}
            />
            <DropDown
              placeholder={"Select Breed"}
              onChange={(value) => setBreed(value)}
              data={
                animal === "Dog"
                  ? dogList
                  : animal === "Cat"
                    ? catList
                    : birdList
              }
            />
            <textarea
              placeholder="Short And Sweet Description"
              className=" p-2 text-sm rounded-lg border-2 border-slate-300 resize-none"
              rows="3"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="">
            <div className="flex flex-col items-center mb-4 ">
              <div
                className="h-[200] w-[200] border rounded-[40] bg-slate-100
                hover:bg-slate-200 cursor-pointer"
                onClick={handleDivClick}
              >
                {!isPhoto ? (
                  <div className="flex items-center justify-center relative top-14">
                    <ImageUp className="h-10 w-10" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center relative top-0">
                    <Image
                      src={photo}
                      alt="Uploaded"
                      className="h-[200] w-[200] object-cover  rounded-[40px]"
                    />
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <div className="flex items-center gap-4">
              <UiButton
                className="bg-blue-500 text-white px-16 py-2 rounded-[40] hover:bg-blue-600"
                label={"Add"}
                onClick={createPet}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <div className="border w-[1000] border-blue-500"></div>
      </div>
    </div>
  );
};

export default AddPets;
