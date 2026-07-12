import React from "react";
import SocialList from "./SocialsList";

const AboutMe = () => {
  return (
    <div className="aboutme flex flex-col border-2 p-4 border-(--border-color) w-full shadow-blue-950 shadow-[0_0_50px_10px] bg-transparent backdrop-blur-[6px]  ">
      <div className="flex flex-col items-center py-1">
        <p className="text-white text-4xl  text-center italic select-none py-5">
          About Me
        </p>
        <span className="longline block w-full h-px bg-(--border-color) "></span>
      </div>

      <div className="h-80 py-5 ">
        <p className="text-zinc-100 text-center  leading-8 whitespace-pre-line select-none">
          {
            "A 21-year-old living in Baku, chasing his dreams and busy with coding. If you can't reach me, i'm probably busy with coding or my gf. Just a guy who values routine, respects the grind, and stays quiet while working on big things.\n Welcome to my personal space"
          }
        </p>
        <span className="longline block w-full h-px bg-(--border-color) mt-4 "></span>
      </div>
      <div>
        <SocialList/>
      </div>
    </div>
  );
};

export default AboutMe;
