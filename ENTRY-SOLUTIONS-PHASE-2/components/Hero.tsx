"use client";

import QuoteQuiz from "@/components/QuoteQuiz";

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-job.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          relative container mx-auto px-6
          py-12 md:py-24
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-start lg:items-center
        "
      >
        {/* LEFT COPY */}
        <div className="animate-fade-in">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-white/70 mb-3">
            Professional Door Installation
          </p>

          <h1
            className="
              text-[1.75rem] leading-tight
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold mb-3
            "
          >
            Door Installations Done Right
            <br />
            the First Time
          </h1>

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-white/85
              max-w-xl
              mb-5
            "
          >
            High-quality door installations that improve security,
            energy efficiency, and curb appeal — installed with
            precision and care.
          </p>

          {/* Bullet points */}
          <ul className="space-y-2 text-white/90 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-white">✔</span>
              <span>Exterior & Interior Doors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">✔</span>
              <span>Security & Custom Fit Options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">✔</span>
              <span>Clean, Professional Installation</span>
            </li>
          </ul>
        </div>

        {/* QUIZ — below copy on mobile, unchanged on desktop */}
        <div className="animate-fade-in [animation-delay:80ms] mt-6 lg:mt-0">
          <QuoteQuiz />
        </div>
      </div>
    </section>
  );
}
