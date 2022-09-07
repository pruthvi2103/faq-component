import React, { MouseEventHandler, useRef } from "react";
import { Accordion, AccordionContent, AccordionSummary } from "../Accordion";
import { IFaqData } from "./faq.types";
import { useFaqItem } from "./useFaqItem";

const FaqItem: React.FC<IFaqData & { key: string }> = (
  { title, content },
  key
) => {
  const { detailsRef, handleSummaryClick, summaryRef, contentRef } =
    useFaqItem();
  return (
    <Accordion key={key} ref={detailsRef}>
      <AccordionSummary onClick={handleSummaryClick} ref={summaryRef}>
        {title}
      </AccordionSummary>
      <AccordionContent ref={contentRef}>{content}</AccordionContent>
    </Accordion>
  );
};

export { FaqItem };
