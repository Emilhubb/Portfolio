"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { link: "Home", href: "/" },
    { link: "Resume", href: "/resume" },
    { link: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex p-4 text-2xl gap-8 justify-center">
      {links.map(({ link, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            href={href}
            key={href}
            className={`flex p-1 border-2 rounded-[10px] cursor-pointer pl-10 pr-10 border-(--border-color) ${
              isActive
                ? "bg-(--border-color) text-white"
                : "text-(--border-color)"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
