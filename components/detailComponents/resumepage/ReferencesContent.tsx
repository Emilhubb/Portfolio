"use client";
import React from "react";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { createPortal } from "react-dom";

import TuralITU from "../../../public/references/TuralITU.jpg";
import ShahinITU from "../../../public/references/itu.jpg";
import ASOIU from "../../../public/references/asoiu.png";
import ShahinWUF13 from "../../../public/references/wuf13.png";
import { Send } from "lucide-react";

const ReferencesContent = () => {
  const [selectedRef, setSelectedRef] = useState<Reference | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const getImageSrc = (img: string | StaticImageData) => {
    return typeof img === "string" ? img : img.src;
  };

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
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-700 transition-colors">
                  {reference.name}
                </h3>
                <button
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400  bg-blue-500/10  px-2.5 py-1.5 rounded-md border border-blue-500/20 transition-all w-fit hover:text-blue-700 hover:bg-blue-500/8 cursor-pointer hover:scale-102"
                  onClick={() => setSelectedRef(reference)}
                >
                  {" "}
                  Preview{" "}
                </button>
              </div>
              <p className="text-sm text-white/70 py-2">{reference.position}</p>
              <p className="text-sm text-cyan-700 py-2">
                {Array.isArray(reference.company)
                  ? reference.company.join(", ")
                  : reference.company}
              </p>

              <div className="flex gap-1 mt-2">
                {reference.email && (
                  <a
                    href={`mailto:${reference.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2.5 py-1.5 rounded-md border border-blue-500/20 transition-all w-fit"
                  >
                    <Send className="w-2.5 h-2.5 text-blue-500 hover:text-blue-400 transition-colors" />{" "}
                    Email
                  </a>
                )}
                {reference.linkedin && (
                  <a
                    href={reference.linkedin}
                    target="window"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2.5 py-1.5 rounded-md border border-blue-500/20 transition-all w-fit"
                  >
                    Linkedin
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {mounted &&
          selectedRef &&
          createPortal(
            <div
              className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
              onClick={() => setSelectedRef(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-(--secondary-color) border border-(--primary-color)/40 
                                 rounded-2xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.25)] flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {selectedRef.name}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedRef(null)}
                    className="text-neutral-400 hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg text-sm font-bold transition-all cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="relative w-full max-h-[70vh]  rounded-xl border border-white/5 bg-black/40 flex flex-col md:flex-row items-center justify-center gap-4 p-4">
                  {Array.isArray(selectedRef.image) ? (
                    selectedRef.image.map((img, index) => (
                      <img
                        key={index}
                        src={getImageSrc(img)}
                        alt={`${selectedRef.name} - ${index + 1}`}
                        className="w-full md:w-1/2 h-auto object-contain rounded-lg border border-white/10"
                      />
                    ))
                  ) : selectedRef.image ? (
                    <img
                      src={getImageSrc(selectedRef.image)}
                      alt={selectedRef.name}
                      className="max-h-[60vh] w-auto object-contain rounded-lg"
                    />
                  ) : (
                    <div className="py-12 text-center text-neutral-400 text-sm font-mono">
                      📷 Preview image not uploaded yet.
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center text-xs text-neutral-400 pt-1">
                  <span className="font-mono text-[11px] text-neutral-500">
                    Click anywhere outside to exit
                  </span>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </>
  );
};

export default ReferencesContent;
