"use client"
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Diploma from "../../../public/certificates/diploma.png";

const EducationContext = () => {
  interface EducationType {
    id: number;
    period: string;
    degree: string;
    institution: string;
    status: string;
    metrics?: {
      gpa?: string;
      thesisScore?: string;
      entranceScore?: string;
    };
    hasDiploma?: boolean;
  }

  const EducationData: EducationType[] = [
    {
      id: 1,
      period: "Sep 2026 — Present",
      degree: "Master of Science (M.S.) in Cyber Security",
      institution: "Azerbaijan State Oil and Industry University (ASOIU)",
      status: "In Progress..",
      metrics: {
        entranceScore: "69.5",
      },
    },
    {
      id: 2,
      period: "Sep 2022 — Jul 2026",
      degree: "Bachelor of Science (B.S.) in Information Security",
      institution: "Azerbaijan State Oil and Industry University (ASOIU)",
      status: "Graduated",
      metrics: {
        entranceScore: "574",
        gpa: "3.7",
        thesisScore: "95",
      },
      hasDiploma: true,
    },
  ];

  const [mounted, setMounted] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full  rounded-lg p-6 my-5  select-none">
      <div className="flex flex-col gap-4 mb-10">
        <span className="text-4xl max-sm:text-2xl font-bold text-(--primary-color) drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
          # Education
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {EducationData.map((edu: EducationType) => {
          const isInProgress = edu.status === "In Progress..";

          return (
            <div
              key={edu.id}
              className="group relative border border-(--border-color) p-6  bg-black/20 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.9)] transition-shadow duration-200 rounded-lg"
            >
              <div className="flex items-center justify-between gap-2 mb-3 ">
                <span className="text-sm font-semibold max-sm:text-[12px]">
                  {edu.period}
                </span>
                <span
                  className={`text-xl font-semibold px-2 max-sm:text-[13px] ${
                    isInProgress
                      ? "text-emerald-400  border-emerald-500/30 animate-pulse"
                      : "text-blue-400  border-blue-500/30"
                  }`}
                >
                  {edu.status}
                </span>
              </div>
              <h3 className="text-xl max-sm:text-[17px] font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-neutral-400 text-sm mb-4 max-sm:text-[13px]">
                {edu.institution}
              </p>

              {edu.metrics && (
                <div className="flex gap-4 max-sm:flex-col flex-wrap ">
                  {edu.metrics.entranceScore && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md  backdrop-blur-sm shadow-[0_2px_1px_rgba(59,130,246,0.2)]">
                      <span className="text-sm max-sm:text-[13px] max-sm:text-wrap font-semibold text-blue-400">
                        Entrance Score:
                      </span>
                      <span className="text-base font-bold text-white tracking-wide">
                        {edu.metrics.entranceScore}
                      </span>
                    </div>
                  )}

                  {edu.metrics.gpa && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md  backdrop-blur-sm shadow-[0_2px_1px_rgba(59,130,246,0.2)]">
                      <span className="text-sm font-semibold text-blue-400">
                        GPA:
                      </span>
                      <span className="text-base font-bold text-white tracking-wide">
                        {edu.metrics.gpa}
                      </span>
                    </div>
                  )}

                  {edu.metrics.thesisScore && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md  backdrop-blur-sm shadow-[0_2px_1px_rgba(59,130,246,0.2)]">
                      <span className="text-sm font-semibold text-blue-400">
                        Thesis Score:
                      </span>
                      <span className="text-base font-bold text-white tracking-wide">
                        {edu.metrics.thesisScore}
                      </span>
                    </div>
                  )}

                  {edu.hasDiploma && (
                    <button
                      className="inline-flex items-center self-end ml-auto gap-1.5 text-xs max-md:text-[16px] max-sm:text-[12px] max-sm:mr-auto max-sm:w-full max-2xl:ml-0 max-sm:justify-center font-medium text-blue-400 bg-blue-500/10 px-2.5 py-2 rounded-md border border-blue-500/20 transition-all w-fit hover:text-blue-700 hover:bg-blue-500/8 cursor-pointer hover:scale-102"
                      onClick={() => setShowDiploma(true)}
                    >
                      View Diploma
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {mounted &&
        showDiploma &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setShowDiploma(false)}
          >
            <div
              className="relative max-w-4xl w-full bg-(--secondary-color) border border-(--primary-color)/40
                         rounded-2xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.25)] flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <h4 className="text-lg font-bold text-white">Diploma</h4>
                <button
                  onClick={() => setShowDiploma(false)}
                  className="text-neutral-400 hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg text-sm font-bold transition-all cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>
              <div className="relative w-full max-h-[70vh] rounded-xl border border-white/5 bg-black/40 flex items-center justify-center p-4">
                <Image
                  src={Diploma}
                  alt="Diploma"
                  className="max-h-[60vh] w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default EducationContext;
