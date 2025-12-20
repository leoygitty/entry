import { Suspense } from "react";
import ThankYouContent from "./thank-you-content";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<ThankYouSkeleton />}>
      <ThankYouContent />
    </Suspense>
  );
}

function ThankYouSkeleton() {
  return (
    <div className="max-w-xl mx-auto p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Processing your request…</h2>
      <p className="text-gray-600">One moment please ⏳</p>
    </div>
  );
}
