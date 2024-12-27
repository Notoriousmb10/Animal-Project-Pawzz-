import React, { useState } from "react";
import DragAndDropUpload from "../DragAndDrop";
import { Input } from "@/components/ui/input";
import { animalList, animalGender } from "@/app/dataArray";
import Select from "../../uicomponents/Select";

const AnimalUpload = () => {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault();
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="h-[700px] w-[1400px] border-2 rounded-[20] shadow-lg mx-12 my-6">
      <div className="flex flex-col relative ml-4 my-4 w-[350px]">
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
            />
            <Select
              label="Type"
              placeholder="Gender"
              data={animalGender}
              other={true}
              className="w-[170px] text-[10px]"
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
    </div>
  );
};

export default AnimalUpload;
