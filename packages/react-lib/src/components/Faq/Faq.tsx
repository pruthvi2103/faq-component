import React from "react";
import { FaqContainerClass } from "./Faq.styles.css";
import { IFaqProps } from "./faq.types";

import { FaqItem } from "./FaqItem";

export const Faq: React.FC<IFaqProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <FaqItem
          key={`${item.title}-${index}`}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};
