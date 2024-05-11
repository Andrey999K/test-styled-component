import React, { ReactNode } from "react";

type ButtonProps = {
  align?: string;
  primary?: boolean;
  color?: string;
  background?: string;
  outlined?: boolean;
  children?: ReactNode | ReactNode[];
};

export const Button: React.FC<ButtonProps> = ({
  align,
  primary,
  color,
  background,
  outlined,
  children
}) => {
  const classColor = `text-${color || "primary"}`;
  const borderColor = color ? `border-[${color}]` : "border-primary";
  const classAlign = align ? `self-${align}` : "self-stretch";
  const classBackground = background ? `bg-[${background}]` : "bg-primary";
  const classes = `
  ${
    outlined
      ? `${classColor} border-[1px] border-solid ${borderColor}`
      : "border-none"
  }
  ${primary ? `${classColor} ${classBackground}` : ""}
  py-[10px] px-[15px] text-[18px] cursor-pointer focus:outline-none ${classAlign} hover:animate-spin`;
  return <div className={classes}>{children}</div>;
};
