import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
const TypeWriter = () => {
  const words = [
    { text: "Emil", className: "text-sky-900" },
    { text: "Kazımov", className: "text-sky-900" },
  ];
  return (
    <div className="-my-4">
      <TypewriterEffect words={words} className="font-blackops select-none text-[2rem]" />
    </div>
  );
};

export default TypeWriter;
