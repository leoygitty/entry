export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Value Proposition */}
        <div>
          <p className="uppercase tracking-widest text-sm text-white/70 mb-4">
            Professional Door Installation
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Door Installations Done Right<br />
            the First Time
          </h1>

          <p className="text-lg text-white/90 max-w-xl mb-8">
            High-quality door installations designed to improve security,
            energy efficiency, and curb appeal — professionally installed
            with precision and care.
          </p>

          <ul className="space-y-3 text-white/90">
            <li>✔ Exterior & Interior Doors</li>
            <li>✔ Security & Custom Fit Options</li>
            <li>✔ Clean, Professional Installation</li>
          </ul>
        </div>

        {/* RIGHT: Quote Form */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-2">
            Get a Free Quote
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Start with a few quick details — no obligation.
          </p>

          <form className="space-y-5">
            {/* Progress hint */}
            <div className="text-xs text-gray-500">
              Step 1 of 2 — Basic Project Details
            </div>

            {/* Name */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                👤
              </span>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ✉️
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  📞
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                />
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                📍
              </span>
              <input
                type="text"
                placeholder="City or Zip Code"
                className="w-full border rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
              />
            </div>

            {/* CTA */}
            <button
              type="button"
              className="w-full bg-accent text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Continue →
            </button>

            {/* Trust microcopy */}
            <p className="text-xs text-gray-500 text-center leading-snug">
              No obligation. Your information is used only to provide your quote.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
