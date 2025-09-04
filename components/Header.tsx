"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Projects",
      href: "/projects",
      submenu: [
        { name: "All Projects", href: "/projects" },
        { name: "Architecture", href: "/projects/architecture" },
        { name: "Interior", href: "/projects/interior" },
        { name: "Landscape", href: "/projects/landscape" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed md:absolute top-0 left-0 w-full z-50 p-4 md:p-4 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-[110px] h-[70px] md:w-[110px] md:h-[70px] block"
        >
          <Image
            src={
              transparent
                ? "/images/projects/nou.svg"
                : "/images/projects/logo-black.jpeg"
            }
            alt="Nou Architecture Logo"
            fill
            style={{ objectFit: "fill" }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex" aria-label="Main Navigation">
          <ul
            className={`flex gap-8 mt-12 font-normal uppercase text-[18px] ${
              transparent ? "text-white" : "text-black"
            }`}
          >
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link href={item.href}>{item.name}</Link>
                {item.submenu && (
                  <ul
                    className={`absolute top-full left-0 mt-2 w-40 rounded opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 bg-white text-black shadow-2xl`}
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((sub) => (
                      <li key={sub.name} className="border-b last:border-b-0 text-sm">
                        <Link
                          href={sub.href}
                          className="block px-2 py-2 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden flex flex-col justify-center items-center gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              transparent ? "bg-white" : "bg-black"
            } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              transparent ? "bg-white" : "bg-black"
            } ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              transparent ? "bg-white" : "bg-black"
            } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white overflow-auto transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Close Button */}
        <div className="absolute top-10 right-4 z-50">
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex flex-col justify-center items-center gap-1"
          >
            <span className="block w-6 h-0.5 transition-all duration-300 rotate-45 translate-y-2 bg-black" />
            <span className="block w-6 h-0.5 transition-all duration-300 opacity-0 bg-black" />
            <span className="block w-6 h-0.5 transition-all duration-300 -rotate-45 -translate-y-2 bg-black" />
          </button>
        </div>

        <ul
          className="flex flex-col p-8 pt-32 font-normal uppercase text-[18px] text-black"
        >
          {menuItems.map((item, mainIndex) => (
            <li key={item.name} className="border-b last:border-b-0">
              <div className="flex justify-between items-center">
                <Link
                  href={item.href}
                  onClick={() =>
                    !item.submenu
                      ? setIsOpen(false)
                      : setProjectsOpen(!projectsOpen)
                  }
                  className="block py-6 transition-all duration-500"
                  style={{
                    transitionDelay: `${mainIndex * 290}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  }}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    aria-label={projectsOpen ? "Collapse submenu" : "Expand submenu"}
                    onClick={() => setProjectsOpen(!projectsOpen)}
                    className="pr-2 text-black"
                  >
                    {projectsOpen ? "-" : "+"}
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {item.submenu && (
                <ul
                  className="pl-4 pb-4 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: projectsOpen
                      ? `${item.submenu.length * 48}px`
                      : "0",
                  }}
                >
                  {item.submenu.map((sub, subIndex) => (
                    <li
                      key={sub.name}
                      className="transition-all duration-500 ease-out"
                      style={{
                        transitionDelay: `${projectsOpen ? subIndex * 100 : 0}ms`,
                        opacity: projectsOpen ? 1 : 0,
                        transform: projectsOpen ? "translateY(0)" : "translateY(-10px)",
                      }}
                    >
                      <Link
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
