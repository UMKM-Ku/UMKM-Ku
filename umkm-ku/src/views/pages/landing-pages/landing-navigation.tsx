"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function LandingNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-300 border-b-2 fixed w-full">
      {/* Desktop Navigation */}
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0">
            <img
              src="https://i.ibb.co.com/ThfCXmV/Group-18261.png"
              alt="UMKM-Ku Logo"
              className="h-8 md:h-12 cursor-pointer scale-[0.7]"
            />
            <img
              className="h-8 md:h-12 cursor-pointer scale-[0.7]"
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
              alt="Workflow"
            />
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="text-gray-700 font-medium text-sm px-3 h-full hover:bg-gray-100 rounded-lg py-4"
            >
              Beranda
            </Link>
            <Link
              href="/our-team"
              className="text-gray-700 font-medium text-sm px-3 h-full hover:bg-gray-100 rounded-lg py-4"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="login">
            <button className="bg-white border border-gray-200 text-black rounded-lg p-2 font-medium text-sm hover:bg-gray-100 transition-colors duration-300 ease-out">
              Masuk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="flex flex-col px-4 py-2">
            {/* Mobile Menu Items */}
            <Link
              href="/"
              className="text-gray-700 font-medium text-sm px-3 py-3 hover:bg-gray-100 rounded-lg"
            >
              Beranda
            </Link>
            <Link
              href="/our-team"
              className="text-gray-700 font-medium text-sm px-3 py-3 hover:bg-gray-100 rounded-lg"
            >
              Our Team
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-2 p-3">
              <Link href="login" className="w-full">
                <button className="w-full bg-white border border-gray-200 text-black rounded-lg p-2 font-medium text-sm hover:bg-gray-100 transition-colors duration-300 ease-out">
                  Masuk
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
