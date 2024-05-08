import styled from "styled-components";
import { ReactNode } from "react";
import * as React from "react";

const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.primary};
`;

type TitleProps = {
  children: ReactNode | ReactNode[];
  color?: string;
};

export const Title: React.FC<TitleProps> = props => {
  return <StyledTitle {...props} />;
};
