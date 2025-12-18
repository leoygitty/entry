"use client";

import { useState } from "react";

export default function Hero() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <section className="relative bg-gray-800 text-white overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: VALUE PROP */}
        <div>
          <p className="uppercase tracking-widest text-sm text-white/70 mb-4">
            Professional Door Installation
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Door Installations Done Right<br />the First Time
          </h1>

          <p className="text-lg text-white/90 max-w-xl mb-8">
            High-quality door installations that improve security,
            energy efficiency, and curb appeal — installed with
            precision and care.
          </p>

          <ul className="space-y-3 text-white/90">
            <li>✔ Exterior & Interior Doors</li>
            <li>✔ Security & Custom Fit Options</li>
            <li>✔ Clean, Professional Installation</li>
          </ul>
        </div>

        {/* RIGHT: QUIZ CARD */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-1">
            Get a Free Quote
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Step {step} of 2 — Quick Project Details
          </p>

          {/* STEP 1 */}
          {step === 1 && (
            <form className="space-y-5 animate-fade-in">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </div>
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
                <input
                  type="text"
                  placeholder="City or Zip Code"
                  className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-accent text-white font-semibold py-3 rounded-md transition transform hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0"
              >
                Continue →
              </button>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form className="space-y-5 animate-fade-in">
              <div>
                <p className="text-sm font-medium mb-2">What type of door?</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Exterior", "Interior", "Security", "Custom"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="border rounded-md py-2 transition hover:bg-accent hover:text-white"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Property type</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Residential", "Commercial"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="border rounded-md py-2 transition hover:bg-accent hover:text-white"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

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
                className="w-full bg-accent text-white font-semibold py-3 rounded-md transition transform hover:opacity-90 hover:-translate-y-[1px]"
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

          {/* TRUST BADGES */}
          <div className="border-t mt-6 pt-4">
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
              <div>
                <div className="text-lg">🛡️</div>
                Licensed & Insured
              </div>
              <div>
                <div className="text-lg">💬</div>
                Free Estimates
              </div>
              <div>
                <div className="text-lg">⭐</div>
                Satisfaction Guaranteed
              </div>
            </div>

            <p className="text-[11px] text-gray-500 text-center mt-3">
              No obligation. Your information is used only to provide your quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
