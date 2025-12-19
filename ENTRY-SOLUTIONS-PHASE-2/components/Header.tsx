"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setHidden(false);
        setScrolled(false);
        setLastScrollY(0);
        return;
      }

      setScrolled(currentY > 12);

      if (currentY > lastScrollY && currentY > 120) {
        setHidden(true);
        setMobileOpen(false); // 👈 sync mobile menu
      }

      if (currentY < lastScrollY) {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Why Choose Us", href: "/about" },
    { label: "Call Now", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-transform duration-300 ease-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}
        `}
      >
        <div className="container flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Entry Solutions LLC"
              width={200}
              height={56}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span>{item.label}</span>

                  {/* Animated underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full
                      bg-blue-600
                      transition-transform duration-300 ease-out
                      origin-left
                      ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* PANEL */}
          <div
            className="
              absolute top-16 inset-x-0
              bg-white
              shadow-xl
              animate-slide-in
            "
          >
            <nav className="flex flex-col divide-y">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
