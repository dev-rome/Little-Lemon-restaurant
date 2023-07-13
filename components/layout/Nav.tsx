"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { links } from "@/constants/navigation";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <nav className="max-w-[1280px] mx-auto p-4">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          alt="Little Lemon"
          width={200}
          className="object-contain"
        />
        <div className="lg:hidden">
          <AiOutlineMenu
            className="text-3xl cursor-pointer"
            onClick={toggleNav}
          />
        </div>
        <ul className="hidden lg:flex gap-11">
          {links.map(({ text, href }) => (
            <NavLinks key={text} text={text} href={href} />
          ))}
        </ul>
      </div>
      <div
        className={`fixed right-0 top-0 bottom-0 w-64 bg-[#495E57] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={closeNav}
          />
        </div>
        <ul className="flex flex-col gap-4 p-4">
          {links.map(({ text, href }) => (
            <NavLinks key={text} text={text} href={href} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
