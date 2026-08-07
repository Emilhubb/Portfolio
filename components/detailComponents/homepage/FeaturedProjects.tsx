"use client";

import React from "react";
import Image from "next/image";
import { Cloud, DollarSign, LayoutTemplate } from "lucide-react";
import Currency from "@/public/currency.png"
import Weather from "@/public/weather.png"
import Portfolio from "@/public/portfolio.png"
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
  image: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    description:
      "Real-time weather data with location search and forecast.",
    tags: ["Next.js", "TypeScript", "API"],
    link: "https://weatherapp-project-81.vercel.app",
    icon: <Cloud size={18} />,
    image: Weather.src
  },
  {
    title: "Currency Converter",
    description: "Live exchange rates with instant multi-currency conversion.",
    tags: ["JavaScript", "REST API"],
    link: "https://currency-live-theta.vercel.app",
    icon: <DollarSign size={18} />,
    image: Currency.src,
  },
  {
    title: "Portfolio Web Page",
    description:
      "Personal portfolio built with a custom dark neon design system.",
    tags: ["React", "Tailwind", "Motion"],
    link: "#",
    icon: <LayoutTemplate size={18} />,
    image: Portfolio.src,
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <div className="w-full max-w-5xl h-auto mx-auto my-24 select-none">
      <div className="flex items-center px-5 mb-6">
        <span className="w-1 h-1 mx-5 rounded-full bg-blue-500 shadow-[0_0_10px_3px] shadow-blue-500 animate-pulse" />
        <h2 className="text-white font-bold text-3xl tracking-wide">
          Featured Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {projects.map((project: Project, idx: number) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            className="group relative border border-(--border-color) rounded-xl bg-black/40 backdrop-blur-sm hover:border-blue-500 transition-colors hover:transition-transform hover:scale-102 hover:-translate-y-1 duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/5 pointer-events-none z-10" />

            <div className="relative w-full h-40 overflow-hidden border-b border-(--border-color)">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-blue-500 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {project.icon}
                </span>
              </div>

              <p className="text-neutral-400 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full border border-blue-800/60 text-blue-400 bg-blue-500/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-5 right-5 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;