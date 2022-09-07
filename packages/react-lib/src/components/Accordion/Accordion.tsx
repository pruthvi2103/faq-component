import React, { ForwardRefRenderFunction } from "react";

import { Flex } from "../_internal/Flex";
import ChevronIcon from "../_internal/Chevron";
import {
  accordionThemeClass,
  detailsClass,
  accordionIconClass,
  accordionThemeVars,
  summaryClass,
  accordionContentClass,
} from "@faq-component/core";
import "@faq-component/core";
import { IAccordionProps, IAccordionSummaryProps } from "./accordion.types";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Accordion: ForwardRefRenderFunction<
  HTMLDetailsElement,
  IAccordionProps
> = ({ children, onToggle, className, ...nativeProps }, ref) => {
  return (
    <details
      ref={ref}
      onToggle={onToggle}
      className={`${detailsClass} ${accordionThemeClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </details>
  );
};
const AccordionWithRef = React.forwardRef(Accordion);

const DefaultAccordionSummaryIcon: React.FC<{
  iconPosition: IAccordionSummaryProps["iconPosition"];
}> = () => {
  return <ChevronIcon height={"18"} width={"18"} />;
};
const AccordionSummary: ForwardRefRenderFunction<
  HTMLElement,
  IAccordionSummaryProps
> = (
  {
    children,
    Icon,
    iconPosition = "right",
    iconTransform = "rotate(180deg)",
    iconTransition = "transform 0.2s ease-in-out",
    className,
    style,
    ...nativeProps
  },
  ref
) => {
  const summaryStyle = Object.assign(
    assignInlineVars({
      [accordionThemeVars.accordionTransition]: iconTransition,
      [accordionThemeVars.accordionTransform]: iconTransform,
    }),
    style
  );
  const SummaryIcon = () => {
    const accordionIconStyle = accordionIconClass({ position: iconPosition });

    return (
      <Flex
        data-attribute="chevron"
        justifyContent={"center"}
        alignItems={"center"}
        className={accordionIconStyle}
      >
        {Icon || <DefaultAccordionSummaryIcon iconPosition={iconPosition} />}
      </Flex>
    );
  };

  return (
    <summary
      ref={ref}
      style={summaryStyle}
      className={`${summaryClass} ${className}`}
      {...nativeProps}
    >
      {iconPosition === "left" && SummaryIcon()}
      {children}
      {iconPosition === "right" && SummaryIcon()}
    </summary>
  );
};

const AccordionSummaryWithRef = React.forwardRef(AccordionSummary);

const AccordionContent: ForwardRefRenderFunction<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
> = ({ children, className, ...nativeProps }, ref) => {
  return (
    <div
      ref={ref}
      className={`${accordionContentClass} ${className}`}
      {...nativeProps}
    >
      {children}
    </div>
  );
};

const AccordionContentWithRef = React.forwardRef(AccordionContent);

export {
  AccordionWithRef as Accordion,
  AccordionSummaryWithRef as AccordionSummary,
  AccordionContentWithRef as AccordionContent,
};
