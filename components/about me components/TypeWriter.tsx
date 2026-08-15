import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
const TypeWriter = () => {
  const words = [
    { text: "Emil", className: "text-[var(--border-color)]" },
    { text: "Kazımov", className: "text-[var(--border-color)]" },
  ];
  return (
    <div className="-my-4 max-md:relative max-sm:relative max-sm:bottom-5   bg-black/30">
      <TypewriterEffect words={words} className="font-blackops select-none text-[2rem] max-md:text-4xl max-sm:text-3xl" />
    </div>
  );
};

export default TypeWriter;
