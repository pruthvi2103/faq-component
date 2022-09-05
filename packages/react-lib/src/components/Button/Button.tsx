import React from "react";
import { buttonClass } from "all-faq-component";

export const Button: React.FunctionComponent<
  JSX.IntrinsicElements["button"]
> = ({ children, className, ...nativeProps }) => {
  return (
    <button {...nativeProps} className={`${buttonClass} ${className || ""}`}>
      {children}
    </button>
  );
};
