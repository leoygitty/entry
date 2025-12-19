"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Entry Solutions Door Installation"
              width={150}
              height={50}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <Link href="/services" className="hover:text-red-400 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-red-400 transition">
              Why Choose Us
            </Link>
            <a
              href="tel:2679452247"
              className="bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition"
            >
              Call Now
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`
          fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col gap-6">
          <button
            onClick={() => setOpen(false)}
            className="self-end text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>

          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-lg font-semibold text-gray-800"
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-semibold text-gray-800"
          >
            Why Choose Us
          </Link>

          <a
            href="tel:2679452247"
            className="mt-4 bg-red-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            Call Now
          </a>
        </div>
      </aside>
    </>
  );
}
