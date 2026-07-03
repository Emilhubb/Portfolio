import ImageOnly3D from "./ImageOnly3D";
import MarqueeEffect from "./MarqueeEffect";
import TypeWriter from "./TypeWriter";

import LanguageList from "./LanguageList";
const AboutCard = () => {
  return (
    <aside className="relative flex flex-col items-center w-78 h-auto rounded-[10px] pt-0 bg-transparent  shadow-lg backdrop-blur-[6px] gap-30 ">
      <div className="profilep w-fit border-2 border-(--border-color)">
        <ImageOnly3D />
        <TypeWriter />
        <p className="text-white text-2xl py-10 text-center italic select-none">
          Frontend Developer
        </p>
        <div>
          <MarqueeEffect />
        </div>
        <div className="flex items-center gap-4 p-3">
          <span className="longline w-[full] h-px bg-(--border-color) flex-1"></span>
          <span> LANGUAGES </span>
          <span className="longline w-[full] h-px bg-(--border-color) flex-1"></span>
        </div>
        <LanguageList/>
      </div>

      <div className="aboutme border-2 mt-5 border-(--border-color) w-full ">
        <p className="text-white text-4xl py-10 text-center italic select-none">
          ABOUT ME
        </p>
      </div>
    </aside>
  );
};

export default AboutCard;
