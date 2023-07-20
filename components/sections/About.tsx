import React from "react";
import Image from "next/image";

import Restaurant from "@/images/restaurant.jpg";
import { markaziText, karla } from "@/app/fonts";

const About = () => {
  return (
    <section className="py-24">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-1 lg:col-start-1 lg:col-span-6 flex flex-col justify-between items-center lg:flex-row gap-5">
            <div className="self-start">
              <h2 className={`text-40 font-bold`} aria-label="Restaurant Name">
                Little Lemon
              </h2>
              <span
                className={`text-32 ${markaziText.className}`}
                aria-label="Location"
              >
                New York
              </span>
              <p
                className={`lg:max-w-xl text-20 ${karla.className} mb-5 lg:mb-0`}
                aria-label="Description"
              >
                Indulge in an extraordinary gastronomic journey at Little Lemon,
                where culinary brilliance harmonizes with artistic finesse.
                Delight your senses with an opulent array of flavors,
                meticulously composed using only the most exceptional
                ingredients. Step into a realm where taste transcends boundaries
                and every dish is an impeccable masterpiece. Experience the
                epitome of culinary excellence at Little Lemon, where each bite
                transports you to a realm of unparalleled delight.
              </p>
            </div>
          </div>
          <div className="col-span-1 lg:col-start-7 lg:col-span-6 flex items-center">
            <Image
              src={Restaurant}
              alt="Restaurant"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
