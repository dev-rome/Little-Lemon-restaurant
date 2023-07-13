import React from "react";
import classnames from "classnames";
import { ButtonProps } from "@/types";

const Button = ({
  text,
  className,
  reserveTable,
  orderMenu,
  orderDelivery,
  ...rest
}: ButtonProps) => {
  const buttonClasses = classnames({
    "text-18 bg-#000 text-white rounded px-6 py-5": reserveTable || orderMenu,
    "bg-none text-16, text-darkGray": orderDelivery,
    className,
  });

  return (
    <button className={buttonClasses} {...rest}>
      {text}
    </button>
  );
};

export default Button;
