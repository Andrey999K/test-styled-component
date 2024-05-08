import styled from "styled-components";
import React, { ReactNode } from "react";

const StyledLine = styled.div<LineProps>`
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};
`;

type LineProps = {
  children?: ReactNode | ReactNode[];
  color?: string;
};

export const Line: React.FC<LineProps> = props => {
  return <StyledLine {...props} />;
};
