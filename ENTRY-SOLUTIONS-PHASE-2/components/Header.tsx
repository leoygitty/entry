"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative pb-1 transition ${
        pathname === href
          ? "text-blue-700 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-700"
          : "text-gray-800 hover:text-blue-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          bg-white/90 backdrop-blur border-b border-gray-200
          transition-transform duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Entry Solutions Door Installation"
              width={scrolled ? 125 : 145}
              height={40}
              priority
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItem("/services", "Services")}
            {navItem("/about", "Why Choose Us")}
            <a
              href="tel:2679452247"
              className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Call Now
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40 transition
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div
          className={`
            absolute top-14 inset-x-0 bg-white
            transform transition-all duration-300
            ${open ? "translate-y-0" : "-translate-y-6"}
          `}
        >
          <nav className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              Why Choose Us
            </Link>
            <a
              href="tel:2679452247"
              className="mt-2 bg-red-600 text-white text-center py-3 rounded-full font-semibold"
            >
              📞 Call Now
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
