import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme flex flex-col border-2 p-4 border-(--border-color) w-full  ">
      <div className="flex flex-col items-center py-1">
        <p className="text-white text-4xl  text-center italic select-none py-5">
          About Me
        </p>
        <span className="longline block w-full h-px bg-(--border-color) "></span>
      </div>

      <div className="h-80 py-5">
        <p className="text-zinc-100 text-center  leading-8 whitespace-pre-line">
          {"A 21-year-old living in Baku, chasing his dreams and busy with coding. If you can't reach me, i'm probably busy with coding or my gf. Just a guy who values routine, respects the grind, and stays quiet while working on big things.\n Welcome to my personal space"}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
