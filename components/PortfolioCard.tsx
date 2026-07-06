import ImageOnly3D from "./ImageOnly3D";
import MarqueeEffect from "./MarqueeEffect";
import TypeWriter from "./TypeWriter";

import LanguageList from "./LanguageList";
import AboutMe from "./AboutMe";
import MusicZone from "./MusicZone";
const PortfolioCard = () => {
  return (
    <aside className="relative flex flex-col items-center w-78 h-auto rounded-[10px] pt-0  gap-20 ">
      <div className="profilep p-1 border-2 border-(--border-color) shadow-blue-950 shadow-[0_0_50px_10px] bg-transparent backdrop-blur-[6px] ">
        <ImageOnly3D />
        <TypeWriter />
        <p className="text-white text-2xl py-10 text-center italic select-none">
          Frontend Developer
        </p>
        <div className="flex justify-center p-2">
          <MarqueeEffect />
        </div>
        <div className="flex items-center gap-4 p-3">
          <span className="longline w-[full] h-px bg-(--border-color) flex-1"></span>
          <span> LANGUAGES </span>
          <span className="longline w-[full] h-px bg-(--border-color) flex-1"></span>
        </div>
        <LanguageList />
      </div>

      <AboutMe />
      <MusicZone/>
    </aside>
  );
};

export default PortfolioCard;
