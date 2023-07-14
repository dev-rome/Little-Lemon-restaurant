import React from "react";
import Image from "next/image";
import Link from "next/link";
import { karla, markaziText } from "@/app/fonts";

import Nav from "@/components/layout/Nav";
import Button from "../Button";

import HeaderImage from "@/public/images/restauranfood.jpg";

const HeaderContent = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row md:justify-evenly gap-5">
        <div>
          <h1 className={`text-56 ${markaziText.className} font-bold`}>
            Little Lemon
          </h1>
          <span className={`text-32 ${markaziText.className}`}>New York</span>
          <p
            className={`max-w-2xl md:max-w-lg text-20 ${karla.className} mb-5`}
          >
            Experience culinary bliss at Little Lemon, where taste meets
            artistry. Immerse yourself in a world of exquisite flavors,
            carefully crafted from the finest ingredients.
          </p>
          <Button className="text-18 bg-primary-yellow text-black rounded px-6 py-3 mb-10">
            <Link href="/reserve">Reserve a Table</Link>
          </Button>
        </div>
        <div className="self-center">
          <Image
            src={HeaderImage}
            alt="restaurant food being served"
            width={300}
            height={100}
            className="object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="bg-primary-darkGreen h-[75vh] md:h-[50vh]">
        <div className="max-w-[80rem] mx-auto p-4">
          <HeaderContent />
        </div>
      </div>
    </header>
  );
};

export default Header;
