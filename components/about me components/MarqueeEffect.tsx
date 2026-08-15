import { SimpleMarquee } from "../ui/3d-marquee";

export default function MarqueeEffect() {
  const mySkills = [
    "•",
    "React.js",
    "•",
    "Next.js",
    "•",
    "Tailwind CSS",
    "•",
    "TypeScript",
    "•",
    "Frontend Developer",
    "•",
    "Web Security",
  ];

  return (
    <main className=" w-70 max-md:w-full max-sm:w-full max-sm:px-2 max-md:px-10 mb-5 italic">
      <SimpleMarquee texts={mySkills} speed={25} />
    </main>
  );
}
