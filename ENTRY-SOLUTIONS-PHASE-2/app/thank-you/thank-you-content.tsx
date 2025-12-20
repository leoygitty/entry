"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouContent() {
  const params = useSearchParams();

  const projectType = params.get("projectType");
  const service = params.get("service");
  const urgency = params.get("urgency");

  /* ----------------------------
     URGENCY MESSAGING
  ---------------------------- */
  const isASAP = urgency === "ASAP";
  const isCustom = projectType === "Custom";

  /* ----------------------------
     OPTIONAL: auto-scroll focus
  ---------------------------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-xl mx-auto text-center py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">
        ✅ Request Received!
      </h1>

      {/* ----------------------------
         DYNAMIC MESSAGE
      ---------------------------- */}
      {isASAP ? (
        <>
          <p className="text-lg font-semibold text-red-600 mb-2">
            ⚡ Emergency / ASAP Request
          </p>
          <p className="text-gray-700 mb-6">
            A team member is being notified now and will call you shortly.
            Please keep your phone nearby.
          </p>
        </>
      ) : (
        <>
          <p className="text-gray-700 mb-6">
            Thanks for requesting a quote for your
            <strong> {service}</strong>.
            We’ll reach out shortly with next steps.
          </p>
        </>
      )}

      {/* ----------------------------
         CALENDAR PROMPT (CUSTOM)
      ---------------------------- */}
      {isCustom && (
        <div className="mt-8">
          <p className="font-semibold mb-3">
            🛠️ Custom projects move faster with a quick call
          </p>

          <button
  onClick={() => {
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/tesoromanagements/custom-door-consultation",
    });
  }}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
>
  📅 Book Your Custom Door Consultation
</button>
        </div>
      )}

      {/* ----------------------------
         FALLBACK CTA
      ---------------------------- */}
      <p className="text-xs text-gray-500 mt-10">
        Entry Solutions LLC • Professional Door Installation
      </p>
    </div>
  );
}
