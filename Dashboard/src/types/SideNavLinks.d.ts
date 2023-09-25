import React from "react";
import { IconBaseProps } from "react-icons";
export type SideNavLinks = {
  link: string;
  label: string;
  Icon: (props: IconBaseProps) => React.ReactNode;
};
