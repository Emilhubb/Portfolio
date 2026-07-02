import ImageOnly3D from "./ImageOnly3D";
import TypeWriter from "./TypeWriter";

const AboutCard = () => {
  return (
    <aside className="relative flex flex-col items-center w-78 h-auto rounded-[10px] pt-0 bg-transparent  shadow-lg backdrop-blur-md gap-30 ">
      <div className="profilep w-fit border-2 border-(--border-color)  p-2">
        <ImageOnly3D />
        <TypeWriter />
        <p className="text-white text-2xl py-10 text-center italic">
          Frontend Developer
        </p>
      </div>

      <div className="aboutme border-2 mt-5 border-(--border-color) w-full ">
        <p className="text-white text-4xl py-10 text-center italic">ABOUT ME</p>
      </div>
    </aside>
  );
};

export default AboutCard;
