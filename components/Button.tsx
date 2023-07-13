import React from "react";
import classnames from "classnames";
import { ButtonProps } from "@/types";

const Button = ({ text, className, ...rest }: ButtonProps) => {
  const buttonClasses = classnames(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    className
  );

  return (
    <button className={buttonClasses} {...rest}>
      {text}
    </button>
  );
};

export default Button;
