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

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl w-full max-w-md">
      
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          {steps.map((s, i) => (
            <span key={i} className={i <= step ? "text-primary font-semibold" : ""}>
              {s}
            </span>
          ))}
        </div>
        <div className="h-1 bg-gray-200 rounded">
          <div
            className="h-1 bg-primary rounded transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1 */}
      {step === 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">What type of project?</h3>
          {["Residential", "Commercial", "Custom"].map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setForm({ ...form, projectType: opt });
                next();
              }}
              className="w-full border rounded-lg py-3 hover:bg-primary hover:text-white transition"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* STEP 2 */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">What service do you need?</h3>
          {["Door Installation", "Door Replacement", "Custom Door Project"].map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setForm({ ...form, service: opt });
                next();
              }}
              className="w-full border rounded-lg py-3 hover:bg-primary hover:text-white transition"
            >
              {opt}
            </button>
          ))}

          <button onClick={back} className="text-sm text-gray-400 mt-2">
            ← Back
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">Where should we send your quote?</h3>

          <input
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 focus:outline-primary"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 focus:outline-primary"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-primary"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            className="w-full bg-primary text-white rounded-lg py-3 font-semibold hover:bg-blue-800 transition"
            onClick={() => {
              console.log("QUIZ DATA:", form);
              alert("Quote request captured (backend coming next)");
            }}
          >
            Get My Free Quote
          </button>

          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
