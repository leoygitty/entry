"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ThankYouPage() {
  const params = useSearchParams();
  const urgency = params.get("urgency");
  const service = params.get("service");

  const isHot = urgency === "ASAP";

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">

        {isHot ? (
          <>
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              🚨 We’re On It!
            </h1>
            <p className="text-gray-700 mb-6">
              Thanks for reaching out about your <strong>{service}</strong>.
              A team member is already reviewing your request.
            </p>

            <p className="text-lg font-semibold mb-6">
              📞 For fastest service, call us now:
            </p>

            <a
              href="tel:2679452247"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:scale-105 transition"
            >
              Call (267) 945-2247
            </a>

            <p className="text-sm text-gray-500 mt-4">
              We typically respond within minutes for urgent requests.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary mb-4">
              ✅ Request Received
            </h1>
            <p className="text-gray-700 mb-4">
              Thanks for contacting Entry Solutions about your{" "}
              <strong>{service}</strong>.
            </p>

            <p className="text-gray-600 mb-6">
              A team member will reach out shortly to discuss details and
              provide next steps.
            </p>

            <div className="bg-slate-50 rounded-lg p-4 text-left text-sm">
              <p>✔ Accurate measurements</p>
              <p>✔ Clear, no-pressure pricing</p>
              <p>✔ Professional installation</p>
            </div>

            <Link
              href="/"
              className="inline-block mt-6 text-primary underline"
            >
              ← Back to Home
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
