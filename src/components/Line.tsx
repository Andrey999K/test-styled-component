import React, { ReactNode } from "react";

type LineProps = {
  children?: ReactNode | ReactNode[];
  color?: string;
};

export const Line: React.FC<LineProps> = ({ color, children }) => {
  const colorClass = `text-${color || "primary"}`;
  return <div className={`text-2xl leading-9 ${colorClass}`}>{children}</div>;
};
