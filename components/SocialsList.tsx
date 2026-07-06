"use client";

import Image from "next/image";
import Linkedin from "../public/linkedin.webp";
import Github from "../public/github.png";
import Insta from "../public/instagram.png";

const socials = [
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/emil-kazimov-b3b50926a/",
  },
  { name: "Github", 
    icon: Github, 
    href: "https://github.com/Emilhubb" },
  {
    name: "Instagram",
    icon: Insta,
    href: "https://www.instagram.com/imemillll/",
  },
];

const SocialList = () => {
  return (
    <>
      <ul className="flex flex-col gap-3 w-full py-6 ">
        {socials.map((social) => (
          <li key={social.name} className="flex items-center gap-2 transition-transform duration-400 hover:scale-105">
            <Image
              src={social.icon}
              alt="Icon"
              className="w-5 h-5 rounded-full object-cover shrink-0"
            />
            <a className="text-white text-md select-none " href={social.href} target="window">
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialList;
