import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
const TypeWriter = () => {
  const words = [
    { text: "Emil", className: "text-[var(--border-color)]" },
    { text: "Kazımov", className: "text-[var(--border-color)]" },
  ];
  return (
    <div className="-my-4">
      <TypewriterEffect words={words} className="font-blackops select-none text-[2rem]" />
    </div>
  );
};

export default TypeWriter;
