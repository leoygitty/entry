"use client";

import { useState } from "react";

const steps = ["Project Type", "Service", "Contact"];

export default function QuoteQuiz() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [form, setForm] = useState({
    projectType: "",
    service: "",
    name: "",
    phone: "",
    email: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  /* =========================
     COMPLETION STATE
  ========================== */
  if (completed) {
    return (
      <div className="relative bg-white rounded-2xl p-8 shadow-xl w-full max-w-md text-center overflow-hidden animate-fade-in">
        
        {/* CONFETTI */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 rounded-full bg-red-500 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random()}s`,
                backgroundColor: i % 2 ? "#1e40af" : "#dc2626",
              }}
            />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-primary mb-3">
          🎉 Thank you!
        </h3>

        <p className="text-gray-700">
          A team member will reach out to you shortly!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl w-full max-w-md">

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-primary mb-1">
        Get a Free Quote
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Step {step + 1} of {steps.length} — takes under 30 seconds
      </p>

      {/* FUN PROGRESS BAR */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Start</span>
          <span>Finish</span>
        </div>

        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-700 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-2 border-blue-600 shadow-md transition-all duration-700"
            style={{ left: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-gray-500 text-center">
          Almost there — people usually finish this
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
          ].map((opt) => {
            const selected = form.projectType === opt.label;

            return (
              <button
                key={opt.label}
                onClick={() => {
                  setForm({ ...form, projectType: opt.label });
                  next();
                }}
                className={`w-full border rounded-lg py-3 flex items-center justify-between px-4
                  font-medium text-black transition
                  ${selected ? "ring-2 ring-blue-600 border-blue-600" : "hover:bg-gray-100"}
                `}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{opt.emoji}</span>
                  {opt.label}
                </span>

                {selected && (
                  <span className="text-blue-600 animate-scale-in">✔</span>
                )}
              </button>
            );
          })}
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
          ].map((opt) => {
            const selected = form.service === opt.label;

            return (
              <button
                key={opt.label}
                onClick={() => {
                  setForm({ ...form, service: opt.label });
                  next();
                }}
                className={`w-full border rounded-lg py-3 flex items-center justify-between px-4
                  font-medium text-black transition
                  ${selected ? "ring-2 ring-blue-600 border-blue-600" : "hover:bg-gray-100"}
                `}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{opt.emoji}</span>
                  {opt.label}
                </span>

                {selected && (
                  <span className="text-blue-600 animate-scale-in">✔</span>
                )}
              </button>
            );
          })}

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

          <input
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 text-black focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 text-black focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 text-black focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            className="w-full bg-gradient-to-r from-red-600 to-blue-700
              text-white rounded-lg py-3 font-bold text-lg
              hover:opacity-90 transition"
            onClick={() => {
              console.log("QUIZ DATA:", form);
              setCompleted(true);
            }}
          >
            Get My Free Quote →
          </button>

          <p className="text-xs text-gray-500 text-center">
            ✔ No spam • ✔ No sales pressure • ✔ Fast response
          </p>

          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
