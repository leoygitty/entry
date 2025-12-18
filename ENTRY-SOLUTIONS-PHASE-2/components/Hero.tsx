"use client";

import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [step, setStep] = useState<1 | 2>(1);
  const formRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to form on step change
  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [step]);

  return (
    <section
      className="relative text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-job.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: VALUE PROP */}
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

          <ul className="space-y-3 text-white/90">
            <li>✔ Exterior & Interior Doors</li>
            <li>✔ Security & Custom Fit Options</li>
            <li>✔ Clean, Professional Installation</li>
          </ul>
        </div>

        {/* RIGHT: QUIZ CARD */}
        <div
          ref={formRef}
          className="bg-white text-gray-900 rounded-xl shadow-xl p-8 transition hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-2">Get a Free Quote</h2>

          {/* PROGRESS BAR */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Step {step} of 2</span>
              <span>{step === 1 ? "Contact Info" : "Project Details"}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: step === 1 ? "50%" : "100%" }}
              />
            </div>
          </div>

          {/* STEP WRAPPER */}
          <div className="relative overflow-hidden">
            {/* STEP 1 */}
            {step === 1 && (
              <form className="space-y-5 animate-slide-in-right">
                <Input icon="👤" placeholder="Full Name" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input icon="✉️" placeholder="Email Address" />
                  <Input icon="📞" placeholder="Phone Number" />
                </div>
                <Input icon="📍" placeholder="City or Zip Code" />

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-accent text-white font-semibold py-3 rounded-md transition transform hover:opacity-90 hover:-translate-y-[1px]"
                >
                  Continue →
                </button>
              </form>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <form className="space-y-5 animate-slide-in-left">
                <ButtonGroup
                  label="What type of door?"
                  options={["Exterior", "Interior", "Security", "Custom"]}
                />

                <ButtonGroup
                  label="Property type"
                  options={["Residential", "Commercial"]}
                />

                <div>
                  <p className="text-sm font-medium mb-2">Desired timeline</p>
                  <select className="w-full border rounded-md p-3 focus:ring-2 focus:ring-accent">
                    <option>As soon as possible</option>
                    <option>Within 2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>Just planning</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full bg-accent text-white font-semibold py-3 rounded-md transition hover:opacity-90"
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

          {/* TRUST */}
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

/* ---------- Helpers ---------- */

function Input({
  icon,
  placeholder,
}: {
  icon: string;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
      />
    </div>
  );
}

function ButtonGroup({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-3">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className="border rounded-md py-2 transition hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
