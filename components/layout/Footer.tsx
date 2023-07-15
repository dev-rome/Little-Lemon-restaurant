import React from "react";
import Image from "next/image";

import { socialMediaIcons } from "@/constants/socialLinks";
import NavLinks from "./NavLinks";
import { links } from "@/constants/navigation";
import Logo from "@/public/images/logo.svg";

const ContactInfo = () => (
  <div className="col-span-1 md:col-span-4">
    <h3 className="text-18 font-bold">Contact</h3>
    <p className="text-18">Address</p>
    <p className="text-18">phone number</p>
    <p className="text-18">email</p>
  </div>
);

const SocialMediaIcons = () => (
  <div className="col-span-1 md:col-span-4">
    <h3 className="text-18 font-bold">Social Media</h3>
    <ul className="flex gap-3 text-18">
      {socialMediaIcons.map(({ icon: Icon, href }) => (
        <li key={href}>
          <a href={href}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t py-16">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 md:col-start-1 md:col-span-12 flex flex-col md:flex-row md:justify-between gap-5">
            <Image
              src={Logo}
              alt="Little Lemon"
              width={175}
              className="self-start"
            />
            <div className="col-span-1 md:col-span-4">
              <h3 className="text-18 font-bold">Doormat Navigation</h3>
              <ul className="text-18">
                {links.map(({ text, href }) => (
                  <NavLinks key={text} text={text} href={href} />
                ))}
              </ul>
            </div>

            <ContactInfo />
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
