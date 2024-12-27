import React from "react";
import DragAndDropUpload from "../DragAndDrop";
const AnimalUpload = () => {
    console.log("AnimalUpload");
  return (
    <div className="h-[700px] w-[1400px] border-2 rounded-[20] shadow-lg  mx-12 my-6">
      <div className="ml-3">
        <h1 className="font-bold">Post An Adoptable Animal</h1>
        <p className="text-[16px]  text-slate-500">Drag and drop images or videos of the animal</p>
      </div>
      <div>
        <DragAndDropUpload route="/post-animal" />
      </div>
    </div>
  );
};

export default AnimalUpload;
