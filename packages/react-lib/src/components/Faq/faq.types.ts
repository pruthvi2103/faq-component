import React from "react";

export interface IFaqProps {
  data: IFaqData[];
}

export interface IFaqData {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
}
