import React from "react";
import Image from "next/image";

import { markaziText } from "@/app/fonts";
import { testimonialData } from "@/constants/testimonials";
import { TestimonialCardProps } from "@/types";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { id, rating, image, name, comment } = testimonial;

  return (
    <div className="bg-white text-black p-4" key={id}>
      <p className="text-14 font-bold mb-5">Rating: {rating}</p>
      <div className="flex items-center gap-5">
        <Image
          src={image}
          alt="user profile picture"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="text-14 font-bold">{name}</p>
      </div>
      <p className="text-14 mt-5">{comment}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-primary-darkGreen py-24">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="col-span-4 md:col-start-1 md:col-span-12 mb-11">
          <h2
            className={`text-40 text-white font-bold text-center tracking-wide mb-11 ${markaziText.className}`}
          >
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-9">
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
