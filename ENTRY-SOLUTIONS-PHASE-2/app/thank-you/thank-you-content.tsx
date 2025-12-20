"use client";

import { useSearchParams } from "next/navigation";

export default function ThankYouContent() {
  const searchParams = useSearchParams();

  const projectType = searchParams.get("projectType");
  const service = searchParams.get("service");
  const urgency = searchParams.get("urgency");

  const isCustom = projectType === "Custom";
  const isUrgent = urgency === "ASAP";

  return (
    <div className="max-w-xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">
        ✅ Request Received!
      </h1>

      {isUrgent && (
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6">
          <p className="font-semibold text-red-700">
            ⚡ Emergency request detected — a team member will call you shortly.
          </p>
        </div>
      )}

      <p className="text-gray-700 mb-4">
        We’ve received your request for <strong>{service}</strong>.
      </p>

      {/* CALENDAR ONLY FOR CUSTOM JOBS */}
      {isCustom && (
        <>
          <p className="font-semibold mb-2">
            📅 Want to lock this in faster?
          </p>

          <iframe
            src="https://calendly.com/YOUR_CALENDLY_LINK"
            className="w-full h-[650px] border rounded-lg"
          />
        </>
      )}

      {!isCustom && (
        <p className="text-gray-600">
          We’ll be in touch shortly with next steps.
        </p>
      )}
    </div>
  );
}
