import React from "react";
import Link from "next/link";
const DownloadCVContent = () => {

  return (
    <>
      <div className="relative p-0.5 overflow-hidden rounded-xl group max-w-xl mx-auto my-15 select-none shadow-[0_0_30px_rgba(59,130,246,0.4)]">
        <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#ec4899,#3b82f6)] " />

        <button
          className="relative w-full bg-slate-950 p-6 rounded-[10px] text-center z-10 hover:opacity-95 transition-colors bg-linear-to-br from-violet-950/10 to-indigo-950/90 cursor-pointer  "
        >
          <a href={"EmilKazimovCV.pdf"} download={"Portfolio-EmilKazimovCV.pdf"} className="text-white font-bold text-lg tracking-wide flex items-center justify-center gap-2">
            <span className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] max-md:text-[30px]">
              Download CV
            </span>
          </a>
        </button>
      </div>
    </>
  );
};

export default DownloadCVContent;
