"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative px-1 transition-colors ${
        pathname === href
          ? "text-blue-900 font-semibold"
          : "text-gray-700 hover:text-blue-900"
      }`}
    >
      {label}
      {pathname === href && (
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-900 rounded-full" />
      )}
    </Link>
  );

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${scrolled ? "backdrop-blur-md shadow-md" : ""}
          bg-white/95
        `}
      >
        <div className="max-w-7xl mx-auto px-4 h-[64px] flex items-center justify-between">
          
          {/* LOGO — pinned left */}
          <Link href="/" className="flex items-center">
            <div
              className={`
                transition-transform duration-300
                ${scrolled ? "scale-[0.92]" : "scale-100"}
              `}
            >
              <Image
                src="/logo.png"
                alt="Entry Solutions Door Installation"
                width={160}
                height={48}
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItem("/services", "Services")}
            {navItem("/about", "Why Choose Us")}
            <Link
              href="/contact"
              className="ml-2 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
            >
              Call Now
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-gray-800 text-2xl"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* PANEL */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white animate-slide-in shadow-2xl p-6 flex flex-col gap-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-2xl text-gray-700"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-5 text-lg">
              <Link href="/services" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                Why Choose Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-red-600 text-white py-3 rounded-lg text-center font-semibold"
              >
                Call Now
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* HEADER SPACER */}
      <div className="h-[64px]" />
    </>
  );
}
