import React from "react";

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
    },
  ];
  return (
    <div className="w-full  rounded-lg p-6 my-5  select-none">
      <div className="flex flex-col gap-4 mb-10">
        <span className="text-4xl font-bold text-(--primary-color) drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
          # Education
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {EducationData.map((edu: EducationType) => {
          const isInProgress = edu.status === "In Progress..";

          return (
            <div
              key={edu.id}
              className="group relative border border-(--border-color) p-6 bg-black/20 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.9)] transition-shadow duration-200 rounded-lg"
            >
              <div className="flex items-center justify-between gap-2 mb-3 ">
                <span className="text-sm font-semibold">{edu.period}</span>
                <span
                  className={`text-xl font-semibold px-2 ${
                    isInProgress
                      ? "text-emerald-400  border-emerald-500/30 animate-pulse"
                      : "text-blue-400  border-blue-500/30"
                  }`}
                >
                  {edu.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">{edu.institution}</p>

              {edu.metrics && (
                <div className="flex gap-4">
                  {edu.metrics.entranceScore && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md  backdrop-blur-sm shadow-[0_2px_1px_rgba(59,130,246,0.2)]">
                      <span className="text-sm font-semibold text-blue-400">
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
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationContext;
