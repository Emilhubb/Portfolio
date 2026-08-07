import { CanvasText } from "@/components/ui/canvas-text";
import React from "react";
import { CanvasTextDemo } from "./effects/CanvasText";
import { StatusBanner } from "../homepage/StatusBanner";
import { QuickStats} from "../homepage/QuickStats"
const HomeDetails = () => {
  return (
    <div className="relative bg-transparent backdrop-blur-[10px]">
      <div className=" select-none">
        <CanvasTextDemo />
      </div>
      <StatusBanner />
      <QuickStats/>
    </div>
  );
};

export default HomeDetails;
