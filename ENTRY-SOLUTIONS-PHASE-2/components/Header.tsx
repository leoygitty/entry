"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto flex items-center justify-between py-4 px-5">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Entry Solutions Door Installation"
              width={160}
              height={60}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <Link href="/services" className="hover:text-blue-700 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-700 transition">
              Why Choose Us
            </Link>
            <Link href="/contact" className="hover:text-blue-700 transition">
              Call Now
            </Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-blue-900" />
            <span className="w-6 h-[2px] bg-blue-900" />
            <span className="w-6 h-[2px] bg-blue-900" />
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.nav
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {/* TOP */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <span className="font-bold text-lg text-blue-900">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-gray-500"
                >
                  ×
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col px-6 py-8 gap-6 text-lg">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="font-medium text-gray-900 hover:text-blue-700 transition"
                >
                  Services
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="font-medium text-gray-900 hover:text-blue-700 transition"
                >
                  Why Choose Us
                </Link>

                {/* PRIMARY CTA */}
                <a
                  href="tel:2679452247"
                  className="mt-4 inline-flex items-center justify-center gap-2
                    bg-gradient-to-r from-red-600 to-blue-700
                    text-white font-bold
                    px-6 py-4 rounded-xl
                    shadow-lg hover:opacity-90 transition"
                >
                  📞 Call Now
                </a>
              </div>

              {/* FOOTER */}
              <div className="mt-auto px-6 py-6 border-t text-sm text-gray-500">
                Licensed & Insured • Fast Response
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
