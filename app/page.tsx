import DuolingoCard from "@/components/DuolingoCard";
import AboutCard from "../components/AboutCard";

export default function Home() {
  return (
    <div className=" w-full min-h-screen p-4 sm:p-6 text-white">
      <div className="flex flex-col justify-center md:justify-start md:flex-row items-center md:items-start  gap-8">
        <AboutCard />
        <DuolingoCard/>
      </div>
    </div>
  );
}
