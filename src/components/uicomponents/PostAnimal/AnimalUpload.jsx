import React, { use, useState } from "react";
import DragAndDropUpload from "../DragAndDrop";
import { Input } from "@/components/ui/input";
import { animalList, animalGender } from "@/app/dataArray";
import Select from "../../uicomponents/Select";
import GetLocation from "../LocationFetch";
import { healthStatus, adoptionUrgency } from "@/app/dataArray";
import { useAdoptionStore } from "@/app/Store/useStore";
import NormalButton from "../NormalButton";
import { toast } from "sonner";
import { CheckboxWithText } from "../../uicomponents/CheckBox";
import { ArrowDown, ArrowRight } from "lucide-react";
import StrayDetails from "./StrayDetails";

const AnimalUpload = () => {
  const { adoptionDetails, setAdoptionDetails } = useAdoptionStore();
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [strayCheck, setStrayCheck] = useState(false);
  const [strayDetails, setStrayDetails] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault();
      setTags([...tags, currentTag.trim()]);
      setAdoptionDetails({
        ...adoptionDetails,
        tags: [...tags, currentTag.trim()],
      });
      setCurrentTag("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleTypeChange = (value) => {
    setAdoptionDetails({
      ...adoptionDetails,
      type: value,
    });
  };

  const handleGenderChange = (value) => {
    setAdoptionDetails({
      ...adoptionDetails,
      gender: value,
    });
  };

  const handleUrgencyChange = (value) => {
    setAdoptionDetails({
      ...adoptionDetails,
      urgency: value,
    });
  };

  const handleHealthChange = (value) => {
    setAdoptionDetails({
      ...adoptionDetails,
      healthStatus: value,
    });
  };

  const handleStrayDetails = () => {
    setStrayDetails(true);
  };

  const handleAdoptionSubmit = async () => {
    try {
      const resp = await fetch(
        "http://localhost:3000/api/post-AnimalForAdoption",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adoptionDetails),
        }
      );
      const data = await resp.json();
      console.log(data);
      Sonner();
    } catch (err) {
      console.log(err);
    }
  };

  const Sonner = async () => {
    toast("Animal Posted For Adoption", {
      className: "bg-green-500",
      description: `❤️`,
      action: {
        label: "Okay",
        onClick: () => console.log("Okay"),
      },
    });
  };

  return (
    <div>
      <div
        className={`${
          strayDetails ? "hidden" : "block"
        } h-[700px] w-[1000px] border-2 rounded-[20] shadow-lg mx-12 my-6 flex flex-row gap-6 justify-center`}
      >
        <div className="flex flex-col relative ml-4 my-4 w-[350px] ">
          <div>
            <h1 className="font-bold">Post An Adoptable Animal</h1>
            <p className="text-[16px] text-slate-500">
              Drag and drop images or videos of the animal
            </p>
          </div>
          <div className="absolute left-0 top-20 hover:bg-slate-50 cursor-pointer">
            <DragAndDropUpload
              route="/post-animal"
              className="w-[350px] h-[220px] pt-4"
              label="Upload An Image Or Video"
            />
          </div>

          <div className="relative top-60">
            <h1 className="font-bold text-[16px]">Animal Information</h1>
            <div className="flex flex-row my-4 gap-2">
              <Select
                label="Type"
                placeholder="Animal"
                data={animalList}
                other={true}
                className="w-[170px] text-[10px]"
                onChange={handleTypeChange}
              />
              <Select
                label="Type"
                placeholder="Gender"
                data={animalGender}
                other={true}
                className="w-[170px] text-[10px]"
                onChange={handleGenderChange}
              />
            </div>
            <div>
              <h2 className="font-medium text-[14px] mb-2">Tags</h2>
              <div className="border p-2 rounded-md min-h-[80px] max-h-[120px] overflow-y-auto flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 text-sm rounded-[10px] px-2  text-[10px]"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(index)}
                      className="ml-2 text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <Input
                  defaultValue={adoptionDetails.tags}
                  className="border-none focus:border-none focus:outline-none outline-none text-[12px] flex-grow"
                  placeholder="Add Relevant Tags, eg - playful, angry bird"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-2 ">
          <div className="h-[600px] border-dashed border-2 "></div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex flex-col gap-4 m">
            <p className="text-[14px] font-semibold mt-2">Enter Name</p>
            <Input
              className="border focus:border-none focus:outline-none outline-none text-[12px]  w-[500px]"
              placeholder="Enter Animal Name"
              value={currentTag}
            />
            <GetLocation
              label="Enter Animal Location"
              onLocationChange={(value) =>
                setAdoptionDetails({
                  ...adoptionDetails,
                  location: value.latitude + ", " + value.longitude,
                })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-[14px] ">Enter Age</p>

            <Input
              type="number"
              className="border rounded-md p-2 text-[12px]"
              placeholder="Enter a number"
              min="0"
              onChange={(e) =>
                setAdoptionDetails({
                  ...adoptionDetails,
                  age: e.target.value,
                })
              }
            />
          </div>
          <div>
            <p className="font-medium text-[14px] mb-2">Health Status</p>
            <Select
              data={healthStatus}
              placeholder="Enter  Health Status"
              className="text-[12px]"
              onChange={handleHealthChange}
            />
          </div>

          <div>
            <p className="font-medium text-[14px] mb-2">Describe Shortly</p>
            <textarea
              className="focus:outline-none border-[#94A3B8] text-[16px] rounded-[10] px-2 w-[480px] max-h-[80px] h-[100px] min-h-[100px]  shadow-md border resize-y"
              placeholder="Description"
              onChange={(e) =>
                setAdoptionDetails({
                  ...adoptionDetails,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div>
            <p className="font-medium text-[14px] mb-2">Adoption Urgency</p>
            <Select
              data={adoptionUrgency}
              placeholder="Enter  Health Status"
              className="text-[12px]"
              onChange={handleUrgencyChange}
            />
          </div>
        </div>
        <div className="absolute bottom-14 right-[300px] flex flex-row gap-32">
          <div>
            <CheckboxWithText
              label="Check If The Animal Is A Stray?"
              description="This will help us in further processing"
              onChange={(checked) => {
                setStrayCheck(checked);
              }}
            />
          </div>
          {!strayCheck ? (
            <NormalButton
              label={"Submit"}
              className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8 bg-blue-500"
              onClick={handleAdoptionSubmit}
            />
          ) : (
            <NormalButton
              label={"Next"}
              icon={<ArrowDown />}
              className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8 bg-blue-500"
              onClick={handleStrayDetails}
            />
          )}
        </div>
      </div>
      {strayDetails ? ( <StrayDetails/> ) : null }
    </div>
  );
};

export default AnimalUpload;
