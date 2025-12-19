"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      if (currentY > lastY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `relative transition ${
      pathname === href
        ? "text-blue-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600"
        : "text-gray-700 hover:text-blue-900"
    }`;

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          bg-white/90 backdrop-blur
          border-b border-black/5
          transition-transform duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Entry Solutions Door Installation"
              width={140}
              height={44}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/services" className={linkClass("/services")}>
              Services
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              Why Choose Us
            </Link>
            <a
              href="tel:2679452247"
              className="ml-2 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
            >
              Call Now
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-800 text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl p-6 flex flex-col gap-6 animate-slide-in">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-800"
            >
              Services
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-800"
            >
              Why Choose Us
            </Link>

            <a
              href="tel:2679452247"
              className="mt-4 bg-red-600 text-white py-3 rounded-lg text-center font-semibold"
            >
              Call (267) 945-2247
            </a>
          </div>
        </div>
      )}
    </>
  );
}
