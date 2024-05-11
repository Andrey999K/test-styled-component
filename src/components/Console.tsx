import React, { KeyboardEvent, useState } from "react";
import { Line } from "./Line.tsx";

type ConsoleProps = {
  color?: string;
};

export const Console: React.FC<ConsoleProps> = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C:/users/Andrey999K>"]);

  const textColorClass = `text-${color || "primary"}`;

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
      <textarea
        {...props}
        className={`w-full h-[70vh] bg-black text-2xl leading-9 border-[1px] border-solid border-red-500 sm:border-primary md:border-none ${textColorClass} resize-none focus:outline-none`}
        onKeyDown={onKeyPress}
      ></textarea>
    </div>
  );
};
