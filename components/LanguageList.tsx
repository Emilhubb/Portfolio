import Image from "next/image";
import English from "../public/english.png";
import German from "../public/german.png";
import Italian from "../public/italian.png";
import Russian from "../public/russian.png";

const languages = [
  { name: "English", flag: English },
  { name: "German", flag: German },
  { name: "Italian", flag: Italian },
  { name: "Russian", flag: Russian },
];

const LanguageList = () => {
  return (
    <ul className="flex flex-col p-4 gap-6 w-full py-4">
      {languages.map((lang) => (
        <li key={lang.name} className="flex items-center gap-2">
          <Image
            src={lang.flag}
            alt={`${lang.name} flag`}
            className="w-5 h-5 rounded-full object-cover shrink-0"
          />
          <span className="text-white text-xl select-none ">
            {lang.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default LanguageList;