import React from "react";

export type TextAllowed = "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"span"

export type TextProps<T extends TextAllowed> = {
  as?: T;
  children?: React.ReactNode;
};