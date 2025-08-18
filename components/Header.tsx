// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-white font-normal uppercase text-[22px] leading-[38px]">
          Nou Architecture
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex gap-8 text-white font-normal uppercase text-[16px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
