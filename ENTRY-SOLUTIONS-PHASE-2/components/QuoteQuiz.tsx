"use client";

import { useState } from "react";

const steps = ["Project Type", "Service", "Contact"];

export default function QuoteQuiz() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    projectType: "",
    service: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submitLead = async () => {
    try {
      setSubmitting(true);

      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Thank you! A team member will reach out shortly.");
    } catch (err) {
      console.error("Lead submission failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl w-full max-w-md">

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-primary mb-1">
        Get a Free Quote
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Step {step + 1} of {steps.length} • Takes under 30 seconds ⏱️
      </p>

      {/* PROGRESS BAR */}
      <div className="mb-6">
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-700 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-gray-500 text-center">
          Almost there — most people finish this 👍
        </p>
      </div>

      {/* STEP 1 */}
      {step === 0 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary">
            🏠 What type of project is this?
          </h3>

          {[
            { label: "Residential", emoji: "🏡" },
            { label: "Commercial", emoji: "🏢" },
            { label: "Custom", emoji: "✨" },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setForm({ ...form, projectType: opt.label });
                next();
              }}
              className="
                w-full border rounded-lg py-3
                flex items-center justify-center gap-2
                text-black font-medium
                hover:bg-primary hover:text-white
                transition
              "
            >
              <span className="text-xl">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* STEP 2 */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary">
            🔧 What service do you need?
          </h3>

          {[
            { label: "Door Installation", emoji: "🚪" },
            { label: "Door Replacement", emoji: "♻️" },
            { label: "Custom Door Project", emoji: "🛠️" },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setForm({ ...form, service: opt.label });
                next();
              }}
              className="
                w-full border rounded-lg py-3
                flex items-center justify-center gap-2
                text-black font-medium
                hover:bg-primary hover:text-white
                transition
              "
            >
              <span className="text-xl">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}

          <button onClick={back} className="text-sm text-gray-400 mt-2">
            ← Back
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary">
            📞 Where should we send your quote?
          </h3>

          <p className="text-sm text-gray-600">
            We’ll call or text you shortly to help with pricing.
          </p>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">👤</span>
            <input
              placeholder="Full Name"
              className="w-full border rounded-lg p-3 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">📞</span>
            <input
              placeholder="Best Phone Number (call or text)"
              className="w-full border rounded-lg p-3 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">✉️</span>
            <input
              placeholder="Email Address"
              className="w-full border rounded-lg p-3 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <button
            disabled={submitting}
            onClick={submitLead}
            className="
              w-full bg-gradient-to-r from-red-600 to-blue-700
              text-white rounded-lg py-3
              font-bold text-lg
              hover:opacity-90 transition
              disabled:opacity-50
            "
          >
            🚀 {submitting ? "Sending..." : "Get My Free Quote"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            ✔ No spam • ✔ No pressure • ✔ Fast response
          </p>

          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
