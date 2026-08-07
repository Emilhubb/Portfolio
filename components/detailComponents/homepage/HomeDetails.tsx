import { CanvasText } from "@/components/ui/canvas-text";
import React from "react";
import { CanvasTextDemo } from "./effects/CanvasText";
import { StatusBanner } from "./StatusBanner";
import { QuickStats} from "./QuickStats"
import FeaturedProjects from "./FeaturedProjects";
const HomeDetails = () => {
  return (
    <div className="relative bg-transparent backdrop-blur-[10px]">
      <div className=" select-none">
        <CanvasTextDemo />
      </div>
      <StatusBanner />
      <QuickStats/>
      <FeaturedProjects/>
    </div>
  );
};

export default HomeDetails;
