import styled from "styled-components";
import React, { KeyboardEvent, useState } from "react";
import { Line } from "./Line.tsx";

const StyledConsole = styled.textarea<ConsoleProps>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${({ color, theme }) => color || theme.colors.primary || "white"};
  resize: none;
  &:focus {
    outline: none;
  }
  @media screen and ${props => props.theme.media.phone} {
    border: 1px solid red;
  }
  @media screen and ${props => props.theme.media.tablet} {
    border: 1px solid green;
  }
`;

type ConsoleProps = {
  color?: string;
};

export const Console: React.FC<ConsoleProps> = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C:/users/Andrey999K>"]);

  const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setLines(prevState => [...prevState, prevState[prevState.length - 1]]);
    }
  };

  return (
    <div className="flex flex-row items-stretch justify-stretch m-0">
      <div className="flex flex-col items-stretch justify-stretch mx-[10px]">
        {lines.map((line, index) => (
          <Line key={index} color={color}>
            {line}
          </Line>
        ))}
      </div>
      <StyledConsole onKeyDown={onKeyPress} {...props} color={color} />
    </div>
  );
};
