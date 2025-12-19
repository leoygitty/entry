"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b">
        <div className="container flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-10 w-[150px]">
              <Image
                src="/logo.png"
                alt="Entry Solutions Door Installation"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/services" className="hover:text-blue-700 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-700 transition">
              Why Choose Us
            </Link>

            {/* UPDATED CTA — scrolls to quote */}
            <a
              href="/contact"
              className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
            >
              Call Now
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-xl"
              aria-label="Close Menu"
            >
              ✕
            </button>

            <Link href="/services" onClick={() => setMenuOpen(false)} className="text-lg font-medium">
              Services
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium">
              Why Choose Us
            </Link>

            {/* UPDATED MOBILE CTA */}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-auto bg-red-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
