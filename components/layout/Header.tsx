import React from "react";
import Image from "next/image";
import Link from "next/link";

import { karla, markaziText } from "@/app/fonts";
import Button from "../Button";
import HeaderImage from "../public/images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="bg-primary-darkGreen py-10">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-12 items-center">
          <div className="col-span-4 md:col-start-1 md:col-span-12 flex flex-col md:justify-evenly md:flex-row gap-5">
            <div className="text-white">
              <h1
                className={`text-56 ${markaziText.className} font-bold`}
                aria-label="Restaurant Name"
              >
                Little Lemon
              </h1>
              <span
                className={`text-32 ${markaziText.className}`}
                aria-label="Location"
              >
                New York
              </span>
              <p
                className={`max-w-2xl md:max-w-lg text-20 ${karla.className} mb-5`}
                aria-label="Description"
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
                alt="Restaurant food being served"
                width={300}
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
