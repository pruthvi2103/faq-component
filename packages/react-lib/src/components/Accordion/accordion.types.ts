export interface IAccordionTypes {
  Summary: React.FC<{}>;
}
export type IAccordionProps = JSX.IntrinsicElements["details"];

export interface IAccordionSummaryCustomProps {
  iconPosition?: "left" | "right";
  Icon?: React.ReactNode;
  iconTransform?: string;
  iconTransition?: string;
}

export type IAccordionSummaryProps = JSX.IntrinsicElements["summary"] &
  IAccordionSummaryCustomProps;
