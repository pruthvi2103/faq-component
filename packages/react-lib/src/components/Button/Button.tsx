import React from "react";
import { detailsClass } from "@faq-component/core";

export const Button: React.FunctionComponent<
  JSX.IntrinsicElements["button"]
> = ({ children, className, ...nativeProps }) => {
  return (
    <button {...nativeProps} className={`${detailsClass} ${className || ""}`}>
      {children}
    </button>
  );
};
