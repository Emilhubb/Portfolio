import { CanvasText } from "@/components/ui/canvas-text";
import React from "react";
import { CanvasTextDemo } from "./effects/CanvasText";
import { StatusBanner } from "../homepage/StatusBanner";
const HomeDetails = () => {
  return (
    <div className="relative bg-transparent backdrop-blur-[10px]">
      <div className=" select-none">
        <CanvasTextDemo />
      </div>
      <StatusBanner />
    </div>
  );
};

export default HomeDetails;
