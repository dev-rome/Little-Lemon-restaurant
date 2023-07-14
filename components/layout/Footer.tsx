import React from "react";
import Image from "next/image";

import NavLinks from "./NavLinks";
import { links } from "@/constants/navigation";
import Logo from "@/public/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <Image src={Logo} alt="Little Lemon" width={175} />
      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          {links.map(({ text, href }) => (
            <NavLinks key={text} text={text} href={href} />
          ))}
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <p>Address</p>
        <p>phone number</p>
        <p>email</p>
      </div>

      <div>
        <h3>Social Media</h3>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
