"use client";

import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [errors, setErrors] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  // Scroll to form when CTA or step changes
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    scrollToForm();
  }, [step]);

  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-job.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
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
            className={`bg-white text-gray-900 rounded-xl shadow-xl p-8 transition ${
              errors ? "animate-shake" : ""
            }`}
          >
            {/* THANK YOU STATE */}
            {step === 3 && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Request Received
                </h2>
                <p className="text-gray-600">
                  Thanks for reaching out! A member of our team will contact you shortly
                  to discuss your project.
                </p>
                <p className="text-sm text-gray-500">
                  Typical response time: same day or next business day.
                </p>
              </div>
            )}

            {/* QUIZ */}
            {step !== 3 && (
              <>
                <h2 className="text-2xl font-bold mb-2">
                  Get a Free Quote
                </h2>

                {/* PROGRESS */}
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all"
                      style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                  </div>
                </div>

                {/* STEP 1 */}
                {step === 1 && (
                  <form className="space-y-5">
                    <Input required placeholder="Full Name" />
                    <Input required placeholder="Email Address" />
                    <Input required placeholder="Phone Number" />
                    <Input placeholder="City or Zip Code" />

                    <button
                      type="button"
                      onClick={() => {
                        const valid = validateInputs(formRef);
                        setErrors(!valid);
                        if (valid) setStep(2);
                      }}
                      className="w-full bg-accent text-white font-semibold py-3 rounded-md"
                    >
                      Continue →
                    </button>
                  </form>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <form className="space-y-5">
                    <SelectGroup
                      label="Door type"
                      options={["Exterior", "Interior", "Security", "Custom"]}
                    />

                    <SelectGroup
                      label="Property type"
                      options={["Residential", "Commercial"]}
                    />

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full bg-accent text-white font-semibold py-3 rounded-md"
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <button
        onClick={scrollToForm}
        className="fixed bottom-4 left-4 right-4 z-50 bg-accent text-white py-3 rounded-full shadow-lg md:hidden"
      >
        Get Free Quote
      </button>
    </>
  );
}

/* ---------- HELPERS ---------- */

function Input({
  placeholder,
  required,
}: {
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      data-required={required}
      placeholder={placeholder}
      className="w-full border rounded-md p-3 focus:ring-2 focus:ring-accent transition"
    />
  );
}

function SelectGroup({
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

function validateInputs(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) return false;
  let valid = true;

  ref.current.querySelectorAll("input").forEach((input) => {
    if (input.dataset.required && !input.value.trim()) {
      input.classList.add("ring-2", "ring-red-500");
      valid = false;
    } else {
      input.classList.remove("ring-2", "ring-red-500");
    }
  });

  return valid;
}
