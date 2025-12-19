"use client";

import QuoteQuiz from "@/components/QuoteQuiz";

export default function Hero() {
  return (
    <section
      className="
        relative
        pt-14
        text-white
        overflow-hidden
        bg-cover
        bg-center
      "
      style={{ backgroundImage: "url('/images/hero-job.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COPY */}
        <div>
          <p className="uppercase tracking-widest text-sm text-white/80 mb-4">
            Professional Door Installation
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Door Installations Done Right
            <br />
            the First Time
          </h1>

          <p className="text-lg text-white/90 max-w-xl mb-8">
            High-quality door installations that improve security,
            energy efficiency, and curb appeal — installed with
            precision and care.
          </p>

         <ul className="space-y-3 text-white">
  <li className="text-white">✔ Exterior & Interior Doors</li>
  <li className="text-white">✔ Security & Custom Fit Options</li>
  <li className="text-white">✔ Clean, Professional Installation</li>
</ul>
        </div>

        {/* RIGHT: QUIZ CARD */}
        <QuoteQuiz />

      </div>
    </section>
  );
}
