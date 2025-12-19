"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [hidden, setHidden] = useState(false); // visible by default
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Always visible at very top
      if (currentY <= 0) {
        setHidden(false);
        setScrolled(false);
        setLastScrollY(0);
        return;
      }

      // Add blur / shadow once scrolling
      setScrolled(currentY > 12);

      // 🔑 CORE FIX:
      // Hide only when scrolling DOWN past threshold
      if (currentY > lastScrollY && currentY > 120) {
        setHidden(true);
      }

      // Show immediately when scrolling UP
      if (currentY < lastScrollY) {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    // Run once so header is correct on load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "backdrop-blur-md bg-white/90 shadow-sm" : "bg-white"}
      `}
    >
      <div className="container flex items-center justify-between h-16">
        {/* LOGO — flush left */}
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
          <Link href="/services">Services</Link>
          <Link href="/about">Why Choose Us</Link>
          <Link href="/contact">Call Now</Link>
        </nav>
      </div>
    </header>
  );
}
