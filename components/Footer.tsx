import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2b2929] text-white mt-1">
      <div className="flex flex-col items-center text-center py-10 px-6 max-w-4xl mx-auto gap-6">
        <Image
          src="/images/projects/nou.svg"
          alt="Nou Architecture"
          width={160}
          height={30}
        />
        <h5 className="text-sm leading-relaxed">
          We believe architecture is more than structures,. With every project,
          we blend creativity, precision, and purpose to bring visions to life
          through thoughtful design. We are a team of architects, designers, and
          developers who are passionate about creating beautiful and functional
          spaces.
        </h5>
      </div>

      {/* Middle Section: Menu + Social Icons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6">
        {/* Menu Left */}
        <ul className="flex gap-8 mb-4 md:mb-0">
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

        {/* Social Icons Right */}
        <div className="flex gap-6">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-gray-400 transition-colors"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" />
            </svg>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-gray-400 transition-colors"
            >
              <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.5V12h2.5V9.5c0-2.48 1.48-3.86 3.74-3.86 1.08 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 2.9h-2.3v7.05A10 10 0 0022 12z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mx-6"></div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-sm py-6">
        © Copyright 2025 Nou, All rights reserved.
      </div>
    </footer>
  );
}
