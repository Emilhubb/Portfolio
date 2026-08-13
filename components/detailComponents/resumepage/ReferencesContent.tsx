import React from "react";
import { StaticImageData } from "next/image";

import TuralITU from "../../../public/references/TuralITU.jpg";
import ShahinITU from "../../../public/references/itu.jpg";
import ASOIU from "../../../public/references/asoiu.png";
import ShahinWUF13 from "../../../public/references/wuf13.png";
import { Send } from "lucide-react";

const ReferencesContent = () => {
  interface Reference {
    id: number;
    name: string;
    position: string;
    company: string | string[];
    email?: string;
    linkedin?: string;
    image: string | StaticImageData | (string | StaticImageData)[];
  }

  const References: Reference[] = [
    {
      id: 1,
      name: "Tural Humbatov",
      position: "Head of Workforce",
      company: "ITU WTDC-2025",
      email: "thumbatov.s@gmail.com",
      linkedin: "https://www.linkedin.com/in/tural-humbatov-6a71a3148",
      image: TuralITU,
    },
    {
      id: 2,
      name: "Shahin Valiyev",
      position: "ICT Support Senior Manager",
      company: ["ITU WTDC-2025", "WUF13"],
      email: "",
      linkedin: "https://www.linkedin.com/in/valiyevshahin",
      image: [ShahinITU, ShahinWUF13],
    },
    {
      id: 3,
      name: "PhD. Elviz Ismayilov",
      position: "Vice-Rector for Science and Innovation at ASOIU",
      company: "Azerbaijan State Oil and Industry University",
      email: "elviz.ismailov@asoiu.edu.az",
      linkedin: "https://www.linkedin.com/in/elvizismayilov/",
      image: ASOIU,
    },
  ];
  return (
    <>
      <div className="w-full rounded-lg p-6 select-none">
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-4xl font-bold text-(--primary-color) drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            # References
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {References.map((reference) => (
            <div
              key={reference.id}
              className=" group shadow-[0_2px_25px_rgba(59,130,246,0.2)] p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-blue-700 transition-colors">
                {reference.name}
              </h3>
              <p className="text-sm text-white/70">{reference.position}</p>
              <p className="text-sm text-cyan-700 py-2">
                {Array.isArray(reference.company)
                  ? reference.company.join(", ")
                  : reference.company}
              </p>

              <div className="flex gap-1 mt-2">
                {reference.email && (
                  <a
                    href={`mailto:${reference.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 bg-blue-500/10 group-hover:bg-blue-500/20 px-2.5 py-1.5 rounded-md border border-blue-500/20 transition-all w-fit"
                  >
                    <Send className="w-2.5 h-2.5 text-blue-500 hover:text-blue-400 transition-colors" />{" "}
                    Email
                  </a>
                )}
                {reference.linkedin && (
                  <a
                    href={reference.linkedin}
                    target="window"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 bg-blue-500/10 group-hover:bg-blue-500/20 px-2.5 py-1.5 rounded-md border border-blue-500/20 transition-all w-fit"
                  >
                    Linkedin
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReferencesContent;
