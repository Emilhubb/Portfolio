import ImageOnly3D from "./ImageOnly3D";
import MarqueeEffect from "./MarqueeEffect";
import TypeWriter from "./TypeWriter";
import English from "../public/english.png"
import German from "../public/german.png"
import Italian from "../public/italian.png"
import Russian from "../public/russian.png"
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
        <ul className="flex flex-col items-center  gap-2 p-3 ">
          <li className="flex items-center text-white text-lg py-2 text-center italic select-none">
            <img src={English.src} alt="English" className="w-6 h-6 mr-2" />
            <span>English</span>
          </li>
          <li className="flex items-center text-white text-lg py-2 text-center italic select-none">
            <img src={German.src} alt="German" className="w-6 h-6 mr-2" />
            <span>German</span>   
          </li>
          <li className="flex items-center text-white text-lg py-2 text-center italic select-none">
            <img src={Italian.src} alt="Italian" className="w-6 h-6 mr-2" />  
            <span>Italian</span>
          </li>
          <li className="flex items-center text-white text-lg py-2 text-center italic select-none">
            <img src={Russian.src} alt="Russian" className="w-6 h-6 mr-2" />
            <span>Russian</span>
          </li>
        </ul>
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
