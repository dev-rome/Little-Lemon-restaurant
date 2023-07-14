import React from "react";

import { ButtonProps } from "@/types";

const Button = ({
  children,
  className,
  ...rest
}: ButtonProps) => {

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
