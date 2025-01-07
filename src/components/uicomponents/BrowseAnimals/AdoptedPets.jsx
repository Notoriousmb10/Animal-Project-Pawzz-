import React from 'react'
import Image from 'next/image'
import { adoptedPets } from '@/app/dataArray'

const AdoptedPets = () => {
  return (
    <div className="justify-center ml-16  cursor-pointer flex flex-col gap-4">
          {adoptedPets.map((pet) => (
            <div
              key={pet.id}
              className=" w-[800px] h-[250px] bg-green-50 rounded-lg flex items-center p-2"
            >
              <Image
                src={pet.image}
                className="h-[200px] w-[200px] rounded-lg object-cover  hover:opacity-70"
              />
              <div className="ml-2 flex flex-col gap-4">
                <p className="text-left italic font-bold text-blue-500 text-lg">
                  {pet.petName}
                </p>
                <p className="text-leftitalic font-bold text-blue-500 text-[12px]">
                  {pet.description}
                  </p>
                <p className=" italic font-bold text-[12px] w-[500px]">  
                  {pet.adoptionStory}
                </p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default AdoptedPets