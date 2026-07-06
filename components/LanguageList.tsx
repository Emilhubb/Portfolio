"use client";
import { useState } from "react";
import Image from "next/image";
import English from "../public/english.png";
import German from "../public/german.png";
import Italian from "../public/italian.png";
import Russian from "../public/russian.png";
import Duolingo from "../public/duolingo.avif";
import DuolingoCard from "./DuolingoCard";

const languages = [
  { name: "English", flag: English },
  { name: "German", flag: German },
  { name: "Italian", flag: Italian },
  { name: "Russian", flag: Russian },
];

const LanguageList = () => {
  const [toggleDuolingoCard, setToggleDuolingoCard] = useState(false);

  const handleToggleDuolingoCard = () => {
    setToggleDuolingoCard(!toggleDuolingoCard);
  }
  return (
    <>
      <ul className="flex flex-col p-4 gap-6 w-full py-4">
        {languages.map((lang) => (
          <li key={lang.name} className="flex items-center gap-2">
            <Image
              src={lang.flag}
              alt={`${lang.name} flag`}
              className="w-5 h-5 rounded-full object-cover shrink-0"
            />
            <span className="text-white text-xl select-none ">{lang.name}</span>
          </li>
        ))}
      </ul>
      <ul className="px-4">
        <li className="flex items-center gap-2">
          <Image
            src={Duolingo}
            alt="Duolingo logo"
            className="w-5 h-5 rounded-full object-cover shrink-0"
          />
          <span
            className="text-white/70 select-none italic cursor-pointer"
            onClick={() => setToggleDuolingoCard(!toggleDuolingoCard)}
          >
            {
              toggleDuolingoCard ? "Hide Duolingo Card" : "Show Duolingo Card"  
            }
          </span>
        </li>
      </ul>
      {toggleDuolingoCard && (
        <div className="mt-4 px-4 mb-8">
          <DuolingoCard />
        </div>
      )}
    </>
  );
};

export default LanguageList;
