import { SimpleMarquee } from "./ui/3d-marquee";

export default function MarqueeEffect() {
  const mySkills = [
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
    "•",
  ];

  return (
    <main className=" w-80  bg-neutral-950 mb-5 italic">
      <SimpleMarquee texts={mySkills} speed={25} />
    </main>
  );
}