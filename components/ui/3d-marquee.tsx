"use client";

import { motion } from "framer-motion"; // Əgər motion/react-dırsa, elə saxlaya bilərsən
import { cn } from "@/lib/utils";

interface MarqueeProps {
  texts: string[];
  className?: string;
  speed?: number; // Sürəti tənzimləmək üçün (saniyə cinsindən)
}

export const SimpleMarquee = ({
  texts,
  className,
  speed = 20,
}: MarqueeProps) => {
  const marqueeContent = texts.map((text, index) => (
    <span key={index} className=" px-3 shrink-0 flex flex-col text-xl font-medium text-white tracking-wide">
      {text}
    </span>
  ));

  return (
    <div
      className={cn(
        "relative flex w-full  overflow-hidden bg-neutral-950 py-4 border-y border-(--border-color) select-none",
        className
      )}
    >
      {/* Sol və sağ tərəflərə yumşaq itmə (fade) effekti vermək üçün (İstəməsən bu div-i silə bilərsən) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-neutral-950 to-transparent" />

      {/* Sürüşən Ana Div */}
      <div className="flex w-max shrink-0 flex-row items-center">
        {/* 1-ci nüsxə */}
        <motion.div
          animate={{ x: [ "-100%", "0%" ] }} // Soldan sağa hərəkət
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          className="flex shrink-0 flex-row items-center whitespace-nowrap"
        >
          {marqueeContent}
        </motion.div>

        {/* 2-ci nüsxə (Sonsuz döngünü tamamlamaq üçün) */}
        <motion.div
          animate={{ x: [ "-100%", "0%" ] }} // Eyni şəkildə soldan sağa
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