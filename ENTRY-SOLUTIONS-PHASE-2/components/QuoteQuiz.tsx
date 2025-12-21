"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const quizRef = useRef<HTMLDivElement | null>(null);

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [form, setForm] = useState({
    projectType: "",
    service: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    ...getTrackingParams(),
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, ...getTrackingParams() }));
  }, []);

  /* -----------------------------------
     HERO DIM + STICKY OBSERVER
  ----------------------------------- */
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!quizRef.current || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        hero.classList.toggle("brightness-75", visible);
        hero.classList.toggle("transition-all", true);
        hero.classList.toggle("duration-500", true);
        setIsSticky(!visible);
      },
      { threshold: 0.15 }
    );

    observer.observe(quizRef.current);
    return () => observer.disconnect();
  }, []);

  const steps =
    form.projectType === "Commercial"
      ? BASE_STEPS.filter((s) => s !== "Urgency")
      : BASE_STEPS;

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

      const result = await res.json();

      if (!res.ok) throw new Error(result?.error || "Submission failed");

      router.push(
        `/thank-you?projectType=${encodeURIComponent(
          form.projectType
        )}&service=${encodeURIComponent(
          form.service
        )}&urgency=${encodeURIComponent(form.urgency || "N/A")}`
      );
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* -----------------------------------
     Shared Button Style (iOS-like)
  ----------------------------------- */
  const optionButtonClass = `
    w-full rounded-xl py-3
    flex items-center justify-center gap-2
    bg-white text-gray-900 font-medium
    border border-gray-200
    shadow-sm
    hover:border-gray-300 hover:shadow-md
    active:scale-[0.97]
    hover:bg-primary hover:text-white
    transition-all duration-200
  `;

  const questionClass =
    "text-[17px] font-semibold tracking-tight text-gray-900";

  return (
    <div
      ref={quizRef}
      className={`
        bg-white/90 backdrop-blur-md rounded-2xl p-6
        shadow-[0_12px_30px_rgba(0,0,0,0.12)]
        w-full max-w-md

        /* Mobile positioning */
        md:static
relative md:relative
mt-6 sm:mt-8
md:mt-0

        /* Desktop positioning */
        md:static md:mt-0 md:ml-auto md:mr-0 md:translate-x-0

        ${isSticky ? "z-40" : ""}
      `}
    >
      {/* HEADER */}
      <h2 className="text-[22px] font-semibold tracking-tight text-gray-900 mb-1">
        Get a Free Quote
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Step {step + 1} of {steps.length} • Takes under 30 seconds ⏱️
      </p>

      {/* PROGRESS BAR */}
      <div className="mb-6">
        <div className="relative h-3.5 bg-gray-200/70 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-700"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 text-center">
          Almost there — most people finish this 👍
        </p>
      </div>

    {/* STEP 1 */}
{steps[step] === "Project" && (
  <div className="space-y-4 animate-fade-in">
    <h3 className={`${questionClass} flex items-center gap-3`}>
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="h-[52px] w-[78px] translate-y-[1px]"
      />
      What type of project is this?
    </h3>

         {[
  { label: "Residential", icon: "house" },
  { label: "Commercial", emoji: "🏢" },
  { label: "Custom", emoji: "✨" },
].map((opt) => (
  <button
    key={opt.label}
    className={optionButtonClass}
    onClick={() => {
      setForm((p) => ({ ...p, projectType: opt.label }));
      next();
    }}
  >
    <span className="text-xl flex items-center justify-center">
      {opt.label === "Residential" ? (
        <img
          src="/icons/project-house.svg"
          alt=""
          aria-hidden="true"
          className="h-[24px] w-[24px]"
        />
      ) : (
        opt.emoji
      )}
    </span>
    {opt.label}
  </button>
))}

      {/* STEP 2 */}
      {steps[step] === "Service" && (
        <div className="space-y-4 animate-fade-in">
          <h3 className={questionClass}>🔧 What service do you need?</h3>

          {[
            { label: "Door Installation", emoji: "🚪" },
            { label: "Door Replacement", emoji: "♻️" },
            { label: "Custom Door Project", emoji: "🛠️" },
          ].map((opt) => (
            <button
              key={opt.label}
              className={optionButtonClass}
              onClick={() => {
                setForm((p) => ({ ...p, service: opt.label }));
                next();
              }}
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

      {/* STEP 3 */}
      {steps[step] === "Urgency" && (
        <div className="space-y-4 animate-fade-in">
          <h3 className={questionClass}>⏱️ How soon do you need this done?</h3>

          {[
            { label: "ASAP / Emergency", value: "ASAP", emoji: "⚡" },
            { label: "1–2 weeks", value: "Soon", emoji: "📅" },
            { label: "Just planning", value: "Planning", emoji: "🕒" },
          ].map((opt) => (
            <button
              key={opt.value}
              className={optionButtonClass}
              onClick={() => {
                setForm((p) => ({ ...p, urgency: opt.value }));
                next();
              }}
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

      {/* STEP 4 */}
      {steps[step] === "Contact" && (
        <div className="space-y-4 animate-fade-in">
          <h3 className={questionClass}>📞 Where should we send your quote?</h3>

          <p className="text-sm text-gray-600">
            {form.urgency === "ASAP"
              ? "We’ll call you within minutes."
              : "We’ll reach out shortly with next steps."}
          </p>

          {["name", "phone", "email"].map((field) => (
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
              className="w-full rounded-xl border border-gray-200 p-3 text-gray-900 focus:ring-2 focus:ring-primary"
            />
          ))}

          <button
            disabled={submitting}
            onClick={submitLead}
            className="w-full bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-xl py-3 font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition"
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
