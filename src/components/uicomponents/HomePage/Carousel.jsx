import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Image from "next/image";
import AnimalHelp1 from "../../../../public/AnimalHelp1.jpg";
import AnimalHelp2 from "../../../../public/AnimalHelp2.jpg";
import AnimalHelp3 from "../../../../public/AnimalHelp3.jpg";
import AnimalHelp4 from "../../../../public/AnimalHelp4.jpg";

const HomeCarousel = () => {
  return (
    <Carousel className="ml-10">
      <CarouselContent className="">
        <CarouselItem>
          <Image
            src={AnimalHelp1}
            alt="Animal Help 1"
            objectFit="cover"
            className="rounded-[50px] h-[400px] w-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={AnimalHelp2}
            alt="Animal Help 2"
            objectFit="cover"
            className="rounded-[50px] h-[400px] w-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={AnimalHelp3}
            alt="Animal Help 3"
            objectFit="cover"
            className="rounded-[50px] h-[400px] w-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={AnimalHelp4}
            alt="Animal Help 4"
            objectFit="cover"
            className="rounded-[50px] h-[400px] w-[600px]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute hidden left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute hidden right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
};

export default HomeCarousel;
