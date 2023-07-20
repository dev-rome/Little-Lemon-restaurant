import React from "react";

import { ButtonProps } from "@/types";

const Button = ({ children, className, ariaLabel, ...rest }: ButtonProps) => {
  return (
    <button
      className={className}
      type="button"
      {...rest}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
