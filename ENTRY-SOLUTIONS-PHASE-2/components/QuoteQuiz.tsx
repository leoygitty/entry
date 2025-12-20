"use client";

import { useEffect, useState } from "react";

/* -----------------------------------
   Tracking Helpers
----------------------------------- */
const getTrackingParams = () => {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    gclid: params.get("gclid"),
    fbclid: params.get("fbclid"),
    page_url: window.location.href,
    referrer: document.referrer || null,
  };
};

/* -----------------------------------
   Quiz Steps (dynamic)
----------------------------------- */
const BASE_STEPS = ["Project", "Service", "Urgency", "Contact"];

export default function QuoteQuiz() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    projectType: "",
    service: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    ...getTrackingParams(),
  });

  /* -----------------------------------
     Inject tracking once
  ----------------------------------- */
  useEffect(() => {
    setForm((prev) => ({ ...prev, ...getTrackingParams() }));
  }, []);

  /* -----------------------------------
     Step helpers
  ----------------------------------- */
  const steps =
    form.projectType === "Commercial"
      ? BASE_STEPS.filter((s) => s !== "Urgency")
      : BASE_STEPS;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  /* -----------------------------------
     Submit Lead
  ----------------------------------- */
  const submitLead = async () => {
    try {
      setSubmitting(true);

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Thank you! A team member will reach out shortly.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl w-full max-w-md">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-primary mb-1">Get a Free Quote</h2>
      <p className="text-sm text-gray-600 mb-4">
        Step {step + 1} of {steps.length} • Takes under 30 seconds ⏱️
      </p>

      {/* PROGRESS BAR */}
      <div className="mb-6">
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-700"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 text-center">
          Almost there — most people finish this 👍
        </p>
      </div>

      {/* STEP 1 — PROJECT TYPE */}
      {steps[step] === "Project" && (
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
                setForm((p) => ({ ...p, projectType: opt.label }));
                next();
              }}
              className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition"
            >
              <span className="text-xl">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* STEP 2 — SERVICE */}
      {steps[step] === "Service" && (
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
                setForm((p) => ({ ...p, service: opt.label }));
                next();
              }}
              className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition"
            >
              <span className="text-xl">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}

          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}

      {/* STEP 3 — URGENCY (conditional) */}
      {steps[step] === "Urgency" && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary">
            ⏱️ How soon do you need this done?
          </h3>

          {[
            { label: "ASAP / Emergency", value: "ASAP", emoji: "⚡" },
            { label: "1–2 weeks", value: "Soon", emoji: "📅" },
            { label: "Just planning", value: "Planning", emoji: "🕒" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setForm((p) => ({ ...p, urgency: opt.value }));
                next();
              }}
              className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition"
            >
              <span className="text-xl">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}

          <button onClick={back} className="text-sm text-gray-400">
            ← Back
          </button>
        </div>
      )}

      {/* STEP 4 — CONTACT */}
      {steps[step] === "Contact" && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary">
            📞 Where should we send your quote?
          </h3>

          <p className="text-sm text-gray-600">
            {form.urgency === "ASAP"
              ? "We’ll call you within minutes."
              : "We’ll reach out shortly with next steps."}
          </p>

          {["name", "phone", "email"].map((field, i) => (
            <input
              key={field}
              placeholder={
                field === "name"
                  ? "Full Name"
                  : field === "phone"
                  ? "Best Phone Number"
                  : "Email Address"
              }
              value={(form as any)[field]}
              onChange={(e) =>
                setForm((p) => ({ ...p, [field]: e.target.value }))
              }
              className="w-full border rounded-lg p-3 text-black focus:ring-2 focus:ring-primary"
            />
          ))}

          <button
            disabled={submitting}
            onClick={submitLead}
            className="w-full bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg py-3 font-bold text-lg hover:opacity-90 disabled:opacity-50 transition"
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
