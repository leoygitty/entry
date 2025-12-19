"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white border-b transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container flex items-center justify-between h-14">

          {/* LOGO — FILLS BAR */}
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-[90%] w-[220px]">
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <Link href="/services" className="hover:text-blue-700 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-700 transition">
              Why Choose Us
            </Link>
            <a
              href="#quote"
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

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-6">
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

            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-auto bg-red-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}

      {/* SPACER */}
      <div className="h-14" />
    </>
  );
}
