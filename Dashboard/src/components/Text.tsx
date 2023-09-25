import React from "react";
import { twMerge } from "tailwind-merge";
import { TextProps, TextAllowed } from "../types/Text";
export default function Text<T extends TextAllowed>({
  as,
  children,
  className,
  ...props
}: TextProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component: TextAllowed = as || "p";
  return (
    <Component className={twMerge("font-monteserat", className)} {...props}>
      {children}
    </Component>
  );
}
