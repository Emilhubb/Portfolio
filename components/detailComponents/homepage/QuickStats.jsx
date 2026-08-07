"use client";
import React from "react";
import { Code2, Globe2, BookOpenCheck, Award, FolderGit2, GraduationCap, UniversityIcon, } from "lucide-react";

export function QuickStats() {
  const stats = [
    {
      id: 1,
      title: "Coding Experience",
      value: "3+ Years",
      description: "Frontend Architecture & Web Dev",
      icon: Code2,
      accentColor: "text-sky-400",
    },
    {
      id: 2,
      title: "Academic Background",
      value: "B.S. InfoSec",
      description: "Information Security Specialization",
      icon: GraduationCap,
      accentColor: "text-emerald-400",
    },
    {
      id: 3,
      title: "International Events",
      value: "3 Events",
      description: "Formula 1 & COP29 & ITU WTDC-25 & WUF-13",
      icon: Globe2,
      accentColor: "text-blue-400",
    },
    {
      id: 4,
      title: "Language Proficiency",
      value: "IELTS 7.5",
      description: "C1 Advanced Academic English",
      icon: Award,
      accentColor: "text-purple-400",
    },
    {
      id: 5,
      title: "Built Projects",
      value: "5+ Web Apps",
      description: "Personal, Weather, Currency Apps",
      icon: FolderGit2,
      accentColor: "text-indigo-400",
    },
    {
        id: 6,
        title: "University GPA",
        value: "3.7 / 4.0",
        description: "A successful outcome of 4 years",
        icon: UniversityIcon,
        accentColor: 'text-purple-700'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 transform-gpu  shadow-sky-500/20 shadow-[0px_8px_32px_0px] "
            >
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                  {stat.title}
                </span>
                <Icon
                  className={`w-5 h-5 ${stat.accentColor} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-extrabold text-blue-700 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed italic">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}