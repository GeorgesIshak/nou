// components/Header.tsx
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Image src="/images/projects/nou.svg" alt="Nou Architecture" width={200} height={40} />

        {/* Menu */}
        <nav>
          <ul className="flex gap-8 text-white font-normal uppercase text-[18px]">
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
