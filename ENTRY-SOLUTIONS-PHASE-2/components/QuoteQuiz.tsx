"use client";

import { useState } from "react";

const steps = ["Project Type", "Service", "Contact"];

type LeadResult = {
  score: number;
  band: "🔥 HOT" | "♨️ WARM" | "❄️ LOW";
};

export default function QuoteQuiz() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<LeadResult | null>(null);

  const [form, setForm] = useState({
    projectType: "",
    service: "",
    name: "",
    phone: "",
    email: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submitLead = async () => {
    try {
      setSubmitting(true);

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();
      setResult(json);

      // 🔥 HOT lead → redirect to call page
      if (json.band === "🔥 HOT") {
        setTimeout(() => {
          window.location.href = "/contact";
        }, 3000);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------------------------
     SUCCESS STATE
  ---------------------------------- */
  if (result) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-xl text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-3">
          {result.band === "🔥 HOT" && "🔥 You're a Priority Lead"}
          {result.band === "♨️ WARM" && "♨️ Thanks! We’re On It"}
          {result.band === "❄️ LOW" && "✅ Request Received"}
        </h3>

        <p className="text-gray-600 mb-4">
          {result.band === "🔥 HOT" &&
            "A team member is ready to help you now. Redirecting you to speak with us…"}
          {result.band === "♨️ WARM" &&
            "We’ve received your request and will be reaching out shortly."}
          {result.band === "❄️ LOW" &&
            "Thanks for reaching out! We’ll follow up soon."}
        </p>

        {result.band !== "🔥 HOT" && (
          <p className="text-sm text-gray-500">
            If you’d like faster help, call us at{" "}
            <strong>(267) 945-2247</strong>
          </p>
        )}
      </div>
    );
  }

  /* ---------------------------------
     QUIZ UI
  ---------------------------------- */
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-primary mb-1">
        Get a Free Quote
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Step {step + 1} of {steps.length} • Takes under 30 seconds ⏱️
      </p>

      {/* Progress */}
      <div className="mb-6">
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-700"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1 */}
      {step === 0 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="font-semibold">🏠 Project type?</h3>
          {["Residential 🏡", "Commercial 🏢", "Custom ✨"].map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setForm({ ...form, projectType: opt });
                next();
              }}
              className="w-full border rounded-lg py-3 text-black hover:bg-primary hover:text-white transition"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* STEP 2 */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="font-semibold">🔧 Service needed?</h3>
          {["Door Installation 🚪", "Replacement ♻️", "Custom Project 🛠️"].map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setForm({ ...form, service: opt });
                next();
              }}
              className="w-full border rounded-lg py-3 text-black hover:bg-primary hover:text-white transition"
            >
              {opt}
            </button>
          ))}
          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <input
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 text-black"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Phone"
            className="w-full border rounded-lg p-3 text-black"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            placeholder="Email"
            className="w-full border rounded-lg p-3 text-black"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            disabled={submitting}
            onClick={submitLead}
            className="w-full bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg py-3 font-bold"
          >
            {submitting ? "Sending..." : "🚀 Get My Free Quote"}
          </button>

          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
