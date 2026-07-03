import ImageOnly3D from "./ImageOnly3D";
import MarqueeEffect from "./MarqueeEffect";
import TypeWriter from "./TypeWriter";
const AboutCard = () => {
  return (
    <aside className="relative flex flex-col items-center w-78 h-auto rounded-[10px] pt-0 bg-transparent  shadow-lg backdrop-blur-[6px] gap-30 ">
      <div className="profilep w-fit border-2 border-(--border-color)  p-2">
        <ImageOnly3D />
        <TypeWriter />
        <p className="text-white text-2xl py-10 text-center italic select-none">
          Frontend Developer
        </p>
        <div>
          <MarqueeEffect/>
        </div>
      </div>

      <div className="aboutme border-2 mt-5 border-(--border-color) w-full ">
        <p className="text-white text-4xl py-10 text-center italic select-none">ABOUT ME</p>
      </div>
    </aside>
  );
};

export default AboutCard;
