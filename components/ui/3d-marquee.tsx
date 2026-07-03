"use client";

import { motion } from "framer-motion"; 
import { cn } from "@/lib/utils";

interface MarqueeProps {
  texts: string[];
  className?: string;
  speed?: number; 
}

export const SimpleMarquee = ({
  texts,
  className,
  speed = 20,
}: MarqueeProps) => {
  const marqueeContent = texts.map((text, index) => (
    <span
      key={index}
      className=" px-3 shrink-0 flex flex-col text-xl font-medium text-white tracking-wide"
    >
      {text}
    </span>
  ));

  return (
    <div
      className={cn(
        "relative flex w-full  overflow-hidden py-4  select-none",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 " />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 " />

      <div className="flex w-max shrink-0 flex-row items-center">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          className="flex shrink-0 flex-row items-center whitespace-nowrap"
        >
          {marqueeContent}
        </motion.div>

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          className="flex shrink-0 flex-row items-center whitespace-nowrap"
        >
          {marqueeContent}
        </motion.div>
      </div>
    </div>
  );
};
