"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import NavLinks from "./NavLinks";
import { links } from "@/constants/navigation";
import { MobileNavProps } from "@/types";
import Button from "../Button";

const MobileNav = ({ isOpen, closeNav }: MobileNavProps) => {
  return (
    <div
      className={`fixed right-0 top-0 bottom-0 w-64 bg-[#495E57] text-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden`}
    >
      <div className="flex justify-end p-4">
        <Button
          className="text-3xl cursor-pointer"
          onClick={closeNav}
          aria-label="Close"
        >
          <AiOutlineClose />
        </Button>
      </div>
      <ul className="flex flex-col gap-4 p-4">
        {links.map(({ text, href }) => (
          <NavLinks key={text} text={text} href={href} />
        ))}
      </ul>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <nav className="p-4">
      <div className="flex justify-between lg:justify-evenly items-center">
        <Image
          src={Logo}
          alt="Little Lemon"
          width={250}
          className="object-contain"
        />
        <div className="lg:hidden">
          <button
            className="text-3xl cursor-pointer"
            onClick={toggleNav}
            aria-label={isOpen ? "Close" : "Open"}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <ul
          className={`hidden lg:flex gap-11 ${isOpen ? "lg:hidden" : ""}`}
          aria-hidden={isOpen}
        >
          {links.map(({ text, href }) => (
            <NavLinks key={text} text={text} href={href} />
          ))}
        </ul>
      </div>
      <MobileNav isOpen={isOpen} closeNav={toggleNav} />
    </nav>
  );
};

export default Nav;
