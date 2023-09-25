import React from "react";

export type AuthProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
};

export type FieldProps = {
  type: "email" | "password";
  label: string;
  placeholder: string;
};