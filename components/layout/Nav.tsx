import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { links } from "@/constants/navigation";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav>
      <Image src={Logo} alt="Little Lemon" width={175} />
      <ul>
        {links.map(({ text, href }) => (
          <NavLinks key={text} text={text} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
