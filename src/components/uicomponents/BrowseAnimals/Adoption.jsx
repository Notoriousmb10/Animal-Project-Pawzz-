import React from 'react'
import Image from 'next/image'
import { upForAdoptions } from '@/app/dataArray'


const Adoption = () => {
  return (
    <div className="grid grid-cols-4 gap-6 justify-center ml-20 cursor-pointer">
    {upForAdoptions.map((pet) => (
      <div key={pet.id} className="gap-4">
        <Image
          src={pet.image}
          className="h-[200px] w-[200px] rounded-lg object-cover  hover:opacity-70"
        />
        <p className="text-center italic font-bold text-blue-500 text-lg">{pet.petName}</p>
      </div>
    ))}
  </div>
  )
}

export default Adoption