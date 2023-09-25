import React from "react";
import { AuthProps } from "../../types/Auth";
import { twMerge } from "tailwind-merge";

export default function AuthContainer<T extends React.ElementType>({
  as,
  children,
  className,
  ...props
}: AuthProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || "div";
  return (
    <Component className={twMerge("bg-white", className)} {...props}>
      {children}
    </Component>
  );
}
