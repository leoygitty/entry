"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative pb-1 transition ${
        pathname === href
          ? "text-blue-900 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-900"
          : "text-gray-700 hover:text-blue-900"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
          
          {/* LOGO — FLUSH LEFT */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Entry Solutions Door Installation"
              width={190}
              height={52}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLink("/services", "Services")}
            {navLink("/about", "Why Choose Us")}
            <Link
              href="/contact"
              className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
            >
              Call Now
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-800 text-2xl"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl p-6 animate-slide-in">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 text-xl mb-8"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                Why Choose Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-red-600 text-white px-4 py-3 rounded-lg text-center"
              >
                Call Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
