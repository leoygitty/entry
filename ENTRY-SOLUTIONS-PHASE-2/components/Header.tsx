"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    const current = window.scrollY;

    // Header background / blur
    setScrolled(current > 40);

    // 🔒 Lock header visible near top
    if (current < 120) {
      setHidden(false);
    } else {
      setHidden(current > lastScroll);
    }

    setLastScroll(current);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [lastScroll]);

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"}
        `}
      >
        <div className="container flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Entry Solutions LLC"
              width={170}
              height={48}
              priority
              className={`
                transition-transform duration-300
                ${scrolled ? "scale-[0.92]" : "scale-100"}
              `}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "Why Choose Us" },
              { href: "/contact", label: "Call Now" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative transition
                  ${pathname === item.href
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"}
                `}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-700 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-700 text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl animate-slide-in p-6">
            <nav className="flex flex-col gap-6 mt-12 text-lg font-semibold">
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                Why Choose Us
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Call Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
