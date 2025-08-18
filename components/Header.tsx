// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image src="/images/projects/nou.svg" alt="Nou Architecture" width={160} height={30} />

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-white font-normal uppercase text-[18px]">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

 
<nav
  className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white overflow-hidden transition-[max-height] duration-500 ease-in-out ${
    isOpen ? "max-h-screen" : "max-h-0"
  }`}
>
  {/* Close button inside full-screen menu */}
  <div className="absolute top-18 right-6 z-50">
    <button
      className="flex flex-col justify-center items-center gap-1"
      onClick={() => setIsOpen(false)}
    >
      <span
        className={`block w-6 h-0.5 bg-black transition-all duration-300 rotate-45 translate-y-2`}
      />
      <span className={`block w-6 h-0.5 bg-black transition-all duration-300 opacity-0`} />
      <span
        className={`block w-6 h-0.5 bg-black transition-all duration-300 -rotate-45 -translate-y-2`}
      />
    </button>
  </div>

  <ul className="flex flex-col p-8 pt-32 text-black font-normal uppercase text-[18px]">
    {menuItems.map((item, index) => (
      <li
        key={item.name}
        className={`transform transition-all duration-500 ease-out border-b border-gray-300 last:border-b-0 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
        style={{ transitionDelay: `${index * 400}ms` }}
      >
        <Link
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="block py-6 text-center"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</nav>



    </header>
  );
}
