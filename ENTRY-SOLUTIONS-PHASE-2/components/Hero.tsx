export default function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="container py-28 text-center max-w-3xl">
        {/* Eyebrow / qualifier */}
        <p className="uppercase tracking-widest text-sm text-white/70 mb-4">
          Professional Door Installation
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Door Installations Done Right the First Time
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Secure, stylish, and professionally installed doors for homeowners
          who care about quality and craftsmanship.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-accent px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 transition"
          >
            Get a Free Estimate
          </a>

          <a
            href="/contact"
            className="border border-white/40 px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition"
          >
            Talk to a Specialist
          </a>
        </div>
      </div>
    </section>
  );
}
