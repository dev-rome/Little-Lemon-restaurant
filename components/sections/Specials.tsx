import React from "react";
import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";

import { markaziText } from "@/app/fonts";
import { specialsData } from "@/constants/specials";
import { SpecialCardProps } from "@/types";
import Button from "../Button";

const SpecialsCard = ({ special }: SpecialCardProps) => {
  const { image, title, price, description } = special;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-9">
          <h3 className={`text-24 font-medium ${markaziText.className}`}>
            {title}
          </h3>
          <span className="font-bold text-secondary-lightPeach">{price}</span>
        </div>
        <p className="mb-4">{description}</p>
      </div>
      <div className="p-6 mt-auto">
        <Button className="text-16 font-bold bg-none text-black">
          Order a delivery
          <RiEBike2Fill className="inline-block ml-2" />
        </Button>
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <section className="py-24">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-start-1 md:col-span-12 flex justify-between items-center mb-11">
            <h2
              className={`text-40 font-bold text-center tracking-wide ${markaziText.className}`}
            >
              Specials
            </h2>
            <Button className="text-18 bg-primary-yellow text-black rounded px-6 py-3">
              Online Menu
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialsData.map((special) => (
            <SpecialsCard key={special.id} special={special} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
