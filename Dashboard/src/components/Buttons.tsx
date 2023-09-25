import { ButtonProps } from "../types/Button";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";
export function PrimaryButton({
  text,
  className,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={twMerge("rounded-[10px] bg-black text-white", className)} {...props}>{text}</button>
  );
}
