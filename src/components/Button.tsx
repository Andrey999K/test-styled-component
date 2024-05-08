import styled, { css, keyframes } from "styled-components";
import React, { ReactNode } from "react";

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
  align-self: ${props => props.align || "stretch"};
  ${props =>
    props.primary &&
    css`
      color: ${props.color || props.theme.colors.primary || "white"};
      background: ${props.background || props.theme.colors.primary || "white"};
    `};
  ${props =>
    props.outlined &&
    css`
      color: ${props.color || props.theme.colors.primary || "white"};
      border: 1px solid ${props.color || props.theme.colors.primary || "white"};
      background: transparent;
    `};
`;

type ButtonProps = {
  align?: string;
  primary?: boolean;
  color?: string;
  background?: string;
  outlined?: boolean;
  children?: ReactNode | ReactNode[];
};

// const LargeButton = styled(StyledButton)`
//   font-size: 32px;
// `;

export const Button: React.FC<ButtonProps> = props => {
  return <StyledButton {...props} />;
};
