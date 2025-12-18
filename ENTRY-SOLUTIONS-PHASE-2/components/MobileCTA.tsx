"use client";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white md:hidden shadow-lg">
      <div className="container flex items-center justify-between py-3">
        <span className="font-medium text-sm">
          Free Door Estimate
        </span>

        <a
          href="/contact"
          className="bg-accent px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
