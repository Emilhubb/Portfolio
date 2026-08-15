import React from "react";
interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Shadcn UI",
      "Axios",
    ],
  },
  {
    title: "Cybersecurity & Web Defense",
    skills: [
      "Web App Security (OWASP Top 10)",
      "DOMPurify / XSS Defense",
      "JWT Auth & HttpOnly Cookies",
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "OWASP ZAP",
    ],
  },
  {
    title: "Backend, Databases & Tools",
    skills: [
      "Node.js",
      "REST APIs",
      "MS SQL Server",
      "Git & GitHub",
      "Postman",
      "Jest / RTL",
    ],
  },
];

const TechStackContext = () => {
  return (
    <div className="w-full rounded-lg p-6 select-none">
      <div className="flex flex-col gap-4 mb-10">
        <span className="text-4xl max-sm:text-2xl font-bold text-(--primary-color) drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          # Tech Stack & Arsenal
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SkillCategories.map((category, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-6 rounded-xl transition-all duration-300 ease-out 
                       hover:border-(--primary-color) shadow-[0_2px_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] 
                       hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                <h3 className="text-[15px] sm:text-base lg:text-lg 2xl:text-[20px] font-bold text-white group-hover:text-blue-700 transition-colors break-words">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-xs max-sm:text-sm font-medium max-md:text-[15px] px-3 py-1.5 rounded-lg bg-transparent backdrop-blur-xl shadow-[0_2px_10px_rgba(59,130,246,0.2)]
                               text-blue-700 group-hover:text-white group-hover:border-(--primary-color)/50 
                               transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-1 bg-linear-to-r from-transparent via-(--primary-color)/30 to-transparent rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackContext;
