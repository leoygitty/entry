export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Value Proposition */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Professional Door Installation<br />
            Built for Security & Style
          </h1>

          <p className="text-lg text-white/90 max-w-xl mb-8">
            High-quality door installations designed to enhance your home’s
            safety, efficiency, and curb appeal. Installed right the first time.
          </p>

          <ul className="space-y-3 text-white/90">
            <li>✔ Exterior & Interior Doors</li>
            <li>✔ Security & Custom Fit Options</li>
            <li>✔ Professional, Clean Installation</li>
          </ul>
        </div>

        {/* RIGHT: Quote Form */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-2">
            Get a Free Quote
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Fill out the form below to start your door installation project.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md p-3"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-3"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border rounded-md p-3"
              />
            </div>
            <input
              type="text"
              placeholder="City / Zip Code"
              className="w-full border rounded-md p-3"
            />

            <button
              type="button"
              className="w-full bg-accent text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 text-center">
              No obligation. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
