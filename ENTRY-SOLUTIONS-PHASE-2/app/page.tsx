"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import VideoWithOverlay from "@/components/VideoWithOverlay";

export default function Home() {
  const [step] = useState(0);

  return (
    <main className="flex flex-col relative">

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:2679452247"
        className="
          fixed bottom-5 right-5 z-50
          flex items-center gap-3
          bg-red-600 text-white
          px-5 py-4 rounded-full
          shadow-xl
          hover:bg-red-700 hover:scale-105
          transition-all duration-300
          animate-pulse
        "
        aria-label="Call Entry Solutions LLC"
      >
        <span className="text-xl">📞</span>
        <span className="hidden sm:inline font-semibold">
          Call Now
        </span>
      </a>

      {/* HERO + QUIZ */}
      <Hero />

      {/* TRUST */}
      <TrustIndicators />

      {/* SERVICES */}
      <ServicesOverview />

      {/* CUSTOM DOOR VIDEO SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Custom Door Projects
            </h2>

            <p className="text-gray-600 mb-6">
              From one-of-a-kind residential entries to precision commercial installs,
              we design and install custom doors built to fit your exact space,
              style, and security needs.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Fully custom measurements</li>
              <li>✔ Premium materials & finishes</li>
              <li>✔ Residential & commercial projects</li>
            </ul>
          </div>

          {/* FIRST VIDEO — APPLE STYLE */}
          <VideoWithOverlay
            src="/custom-door.mp4"
            poster="/custom-door-poster.jpg"
          />

        </div>
      </section>

      {/* SECOND VIDEO + TRUST COPY */}
      <section className="container mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* SECOND VIDEO (PORTRAIT SAFE) */}
          <VideoWithOverlay
            src="/custom-door2.mp4"
            poster="/custom-door2-poster.jpg"
            portrait
          />

          {/* TRUST TEXT */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Real Custom Hidden Door Project
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              The videos shown on this page are from a real custom installation
              completed by our team. This project featured a hidden door designed
              to blend seamlessly into the surrounding space while maintaining
              full functionality and security.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Every custom door we install is carefully measured, fitted, and
              installed with precision — ensuring smooth operation, a clean
              finish, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="mt-32 py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Recent Door & Custom Trim Installations
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-12">
            A selection of real projects completed by our team — precision craftsmanship,
            premium materials, and clean finishes.
          </p>

          <div className="relative">
            <div
              className="
                flex gap-8
                overflow-x-auto
                scroll-smooth
                snap-x snap-mandatory
                no-scrollbar
                px-4
              "
            >
              {[
                "/gallery/door-1.jpg",
                "/gallery/door-2.jpg",
                "/gallery/door-3.jpg",
                "/gallery/door-4.jpg",
                "/gallery/door-5.jpg",
                "/gallery/door-6.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="
                    min-w-[300px] md:min-w-[380px]
                    snap-center
                    rounded-2xl
                    overflow-hidden
                    shadow-xl
                    bg-black
                    transition-transform duration-500
                    hover:scale-[1.03]
                  "
                >
                  <img
                    src={src}
                    alt={`Door installation ${i + 1}`}
                    className="w-full h-[420px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
          </div>

          <p className="mt-6 text-sm text-gray-400 text-center">
            ← Swipe to explore more projects →
          </p>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BRAND POWER SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-red-900 opacity-95" />

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Upgrade Your Entryway?
          </h2>

          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Professional installation. Premium materials. Zero shortcuts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#quote"
              className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition"
            >
              Get Free Quote
            </a>

            <a
              href="tel:2679452247"
              className="border border-white/50 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition"
            >
              Call (267) 945-2247
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
