import { IconBaseProps } from "react-icons";
import React from "react";
export type DataCardsProps = {
  heading: string;
  value: string;
  color: "#DDEFE0" | "#F4ECDD" | "#EFDADA" | "#DEE0EF";
  Icon: (props: IconBaseProps) => React.ReactNode;
};
