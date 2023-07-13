import React from "react";
import Link from "next/link";
import { NavLinkProps } from "@/types";

const NavLinks = ({ text, href }: NavLinkProps) => {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavLinks;
