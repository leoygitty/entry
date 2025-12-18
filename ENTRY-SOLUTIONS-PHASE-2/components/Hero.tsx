"use client";

import { useState } from "react";

export default function Hero() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <section className="relative bg-gray-800 text-white">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-white/70 mb-4">
            Professional Door Installation
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Door Installations Done Right<br />the First Time
          </h1>

          <p className="text-lg text-white/90 max-w-xl mb-8">
            High-quality door installations designed to improve security,
            energy efficiency, and curb appeal — professionally installed
            with precision and care.
          </p>

          <ul className="space-y-3 text-white/90">
            <li>✔ Exterior & Interior Doors</li>
            <li>✔ Security & Custom Fit Options</li>
            <li>✔ Clean, Professional Installation</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-2">
            Get a Free Quote
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Step {step} of 2 — Quick Project Details
          </p>

          {step === 1 && (
            <form className="space-y-5">
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md p-3 focus:ring-2 focus:ring-accent"
              />

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border rounded-md p-3 focus:ring-2 focus:ring-accent"
                />
              </div>

              <input
                type="text"
                placeholder="City or Zip Code"
                className="w-full border rounded-md p-3 focus:ring-2 focus:ring-accent"
              />

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-accent text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
              >
                Continue →
              </button>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-5">
              {/* Door Type */}
              <div>
                <p className="text-sm font-medium mb-2">What type of door?</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Exterior", "Interior", "Security", "Custom"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="border rounded-md py-2 hover:bg-accent hover:text-white transition"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <p className="text-sm font-medium mb-2">Property type</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Residential", "Commercial"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="border rounded-md py-2 hover:bg-accent hover:text-white transition"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <p className="text-sm font-medium mb-2">Desired timeline</p>
                <select className="w-full border rounded-md p-3">
                  <option>As soon as possible</option>
                  <option>Within 2–4 weeks</option>
                  <option>1–2 months</option>
                  <option>Just planning</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full bg-accent text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
              >
                Submit Request
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-sm text-gray-500 underline"
              >
                ← Back
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
