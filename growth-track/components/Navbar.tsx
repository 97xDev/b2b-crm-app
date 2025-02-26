"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current path

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-gray-200 text-xl font-bold">
          GrowthTrack
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            href="/blog"
            className={`text-lg text-gray-400 font-semibold border-b-2 border-transparent transition-all duration-300 ease-in-out ${
              pathname.startsWith("/blog")
                ? "border-b-5 border-lime-600 text-gray-200"
                : "hover:border-lime-600 hover:text-gray-200"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-lg text-gray-400 font-semibold border-b-2 border-transparent transition-all duration-300 ease-in-out ${
              pathname === "/contact"
                ? "border-b-5 border-lime-600 text-gray-200"
                : "hover:border-lime-600 hover:text-gray-200"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
