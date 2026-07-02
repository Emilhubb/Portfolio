import ImageOnly3D from "./ImageOnly3D";
import TypeWriter from "./TypeWriter";

const AboutCard = () => {

  return (
    <aside className="relative flex flex-col w-78 h-200 p-5 rounded-[10px] pt-0 bg-transparent border-2 border-sky-950 shadow-lg backdrop-blur-md">
      <div className="">
        <ImageOnly3D/>
        <TypeWriter/>
        <p className="text-white text-2xl py-10 text-center italic">Frontend Developer</p>
      </div>
    </aside>
  );
};

export default AboutCard;
