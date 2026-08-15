"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";

export function CanvasTextDemo() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour >= 18 || hour < 7 ? "Have A Nice Evening, " : "Have A Nice Day, "
    );
  }, []);

  return (
    <div className="flex min-h-70 w-full  flex-col items-center justify-center p-8 text-center">
      <h2
        className={cn(
          "group relative mx-auto max-w-4xl text-center italic text-4xl font-bold tracking-tighter  max-md:text-[68px] md:text-6xl xl:text-[80px] text-gray-200 dark:text-neutral-100"
        )}
      >
        {greeting}
        <CanvasText
          text="Stranger"
          className="italic"
          backgroundClassName="bg-blue-600 dark:bg-blue-700"
          colors={[
            "rgba(0, 153, 255, 1)",
            "rgba(0, 153, 255, 0.9)",
            "rgba(0, 153, 255, 0.8)",
            "rgba(0, 153, 255, 0.7)",
            "rgba(0, 153, 255, 0.6)",
            "rgba(0, 153, 255, 0.5)",
            "rgba(0, 153, 255, 0.4)",
            "rgba(0, 153, 255, 0.3)",
            "rgba(0, 153, 255, 0.2)",
            "rgba(0, 153, 255, 0.1)",
          ]}
          lineGap={4}
          animationDuration={20}
        />
      </h2>

   
    </div>
  );
}