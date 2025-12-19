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
          py-16 md:py-24
          grid grid-cols-1 lg:grid-cols-2
          gap-16 items-center
        "
      >
        {/* LEFT COPY */}
        <div className="animate-fade-in">
          <p className="uppercase tracking-widest text-sm text-white/70 mb-4">
            Professional Door Installation
          </p>

          <h1
            className="
              text-[2.25rem] leading-[1.1]
              sm:text-4xl
              md:text-5xl
              font-bold mb-4
            "
          >
            Door Installations Done Right
            <br />
            the First Time
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              text-white/85
              max-w-xl
              mb-6
            "
          >
            High-quality door installations that improve security,
            energy efficiency, and curb appeal — installed with
            precision and care.
          </p>

          {/* Explicit white lock (desktop + mobile) */}
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

        {/* RIGHT: QUIZ CARD (micro delay for visual flow) */}
        <div className="animate-fade-in [animation-delay:80ms]">
          <QuoteQuiz />
        </div>
      </div>
    </section>
  );
}
