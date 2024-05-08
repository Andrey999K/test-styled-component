import styled from "styled-components";
import * as React from "react";
import { ReactNode } from "react";

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
`;

type FlexProps = {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children?: ReactNode | ReactNode[];
};

export const Flex: React.FC<FlexProps> = props => {
  return <StyledFlex {...props} />;
};
