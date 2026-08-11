import React from "react";

const ExperienceContent = () => {
  interface ExperienceType {
    id: number;
    category: "Work" | "Volunteer";
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    responsibilities: string[];
    skills: string[];
  }

  const ExperienceData: ExperienceType[] = [
    {
      id: 1,
      category: "Volunteer",
      role: "ICT Support Volunteer",
      company: "WUF 13 (World Urban Forum)",
      location: "Baku, Azerbaijan",
      period: "May 2026",
      description:
        "Provided IT infrastructure support for online registration and accreditation processes of foreign delegates during international events.",
      responsibilities: [
        "Delivered technical support for foreign delegates within accreditation systems.",
        "Rapidly resolved network connectivity issues and maintained local network stability.",
      ],
      skills: ["ICT Infrastructure", "Network Stability", "Technical Support"],
    },
    {
      id: 2,
      category: "Work",
      role: "Front-end Developer Intern",
      company: "CBC TV Azerbaijan",
      location: "Baku, Azerbaijan",
      period: "February 2026 — July 2026",
      description:
        "Developed functional and adaptive admin panels based on React.js and Next.js for the TV channel's internal management systems.",
      responsibilities: [
        "Cleaned user input with DOMPurify to ensure the admin panel is protected against XSS vulnerabilities.",
        "Integrated JWT (Access/Refresh token) authentication mechanism.",
        "Ensured secure storage of tokens using HttpOnly Cookies and configured Axios interceptors.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "DOMPurify",
        "JWT Auth",
        "Axios Interceptors",
        "XSS Security",
      ],
    },
    {
      id: 3,
      category: "Volunteer",
      role: "ICT Support Volunteer",
      company: "ITU WTDC-25 (Global Telecommunications Conference)",
      location: "Baku, Azerbaijan",
      period: "November 2025",
      description:
        "Provided IT support and configured devices for delegates during a global telecommunications conference.",
      responsibilities: [
        "Configured devices and network settings for international delegates.",
        "Provided continuous, high-efficiency IT support throughout the conference.",
      ],
      skills: ["Device Configuration", "IT Support", "Telecommunications"],
    },
    {
      id: 4,
      category: "Work",
      role: "Front-end Developer Intern",
      company: "Lucebra",
      location: "Baku, Azerbaijan",
      period: "May 2025 — September 2025",
      description:
        "Developed reusable UI components and functionalities for the admin panel using React and Next.js technologies.",
      responsibilities: [
        "Created responsive layouts and improved user experience (UX) across control panel pages.",
        "Collaborated with the development team via Git and GitHub for version control.",
      ],
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "UI/UX Design",
        "Git",
        "GitHub",
      ],
    },
    {
      id: 5,
      category: "Volunteer",
      role: "ICT Support Volunteer",
      company: "COP 29",
      location: "Baku, Azerbaijan",
      period: "November 2024",
      description:
        "Supported the ICT team during the UN Climate Change Conference.",
      responsibilities: [
        "Supported the core ICT team in managing network and security operations.",
      ],
      skills: ["Network Security", "ICT Operations", "Event Infrastructure"],
    },
    {
      id: 6,
      category: "Volunteer",
      role: "Crowd Management & Operations Volunteer",
      company: "Formula 1 Baku Grand Prix",
      location: "Baku, Azerbaijan",
      period: "April 2023",
      description:
        "Assisted in crowd flow control, spectator direction, and public safety operations during the high-profile international motorsport event.",
      responsibilities: [
        "Managed spectator movement and ensured smooth pedestrian flow across high-density venue zones.",
        "Collaborated with safety and event coordination teams to maintain public order and swift emergency access.",
        "Provided direction and assistance to foreign visitors and event attendees in a fast-paced environment.",
      ],
      skills: [
        "Crowd Management",
        "Public Safety",
        "Communication",
        "Event Operations",
        "Teamwork",
      ],
    },
  ];

  return (
    <div className="w-full  rounded-lg p-6 my-5  select-none">
      <div className="flex flex-col gap-4 mb-10">
        <span className="text-4xl font-bold text-(--primary-color) drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
          # Experience
        </span>
      </div>

      {ExperienceData.map((experience) => (
        <div
          key={experience.id}
          className="group relative flex flex-col gap-3 mb-6 p-5 border-l-2 rounded-l-xl border-(--border-color) 
             bg-(--secondary-color) rounded-r-xl hover:border-b-2  
             hover:border-r-(--border-color) hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] 
             hover:-translate-y-0.5 transition-all"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-white group-hover:text-(--primary-color) transition-colors">
                {experience.role}
              </span>
              <span className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <span>{experience.company}</span>
                <span className="text-xs text-neutral-600">•</span>
                <span>{experience.location}</span>
              </span>
            </div>

            <span
              className="text-sm font-bold 
                     px-3 py-1  w-fit drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            >
              {experience.period}
            </span>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed mt-1">
            {experience.description}
          </p>

          <ul className="space-y-1.5 text-sm text-neutral-400 my-1">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-(--primary-color) mt-1 text-xs">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-white/5">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="text-blue-700 shadow-[0_2px_1px_rgba(59,130,246,0.2)]
                   text-xs font-medium px-2.5 py-1 rounded-md hover:bg-(--primary-color) 
                   hover:text-white transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
