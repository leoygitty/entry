export default function ServicesPage() {
  return (
    <main className="container mx-auto py-20 space-y-16 max-w-4xl">

      {/* HEADER */}
      <section>
        <h1 className="text-4xl font-bold text-primary mb-6">
          Door Sales & Professional Installation Services
        </h1>
        <p className="text-lg text-gray-600">
          We provide high-quality door sales, expert installation, and custom
          door solutions for both residential and commercial properties.
          Every project is handled with precision, care, and attention to detail.
        </p>
      </section>

      {/* RESIDENTIAL */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Residential Door Installations
        </h2>
        <p className="text-gray-600">
          We install exterior and interior doors for homeowners looking to
          improve security, energy efficiency, and curb appeal. From replacing
          an old door to upgrading your home’s entryway, we ensure proper fit,
          sealing, and smooth operation.
        </p>
      </section>

      {/* COMMERCIAL */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Commercial Door Installations
        </h2>
        <p className="text-gray-600">
          Our commercial door installation services support offices, retail
          spaces, warehouses, and multi-unit properties. We install durable,
          code-compliant doors designed for heavy use, safety, and long-term
          reliability.
        </p>
      </section>

      {/* CUSTOM */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Custom Door Solutions
        </h2>
        <p className="text-gray-600">
          Some projects require a custom approach. We offer custom-fit door
          solutions for unique openings, specialty materials, and specific
          design requirements — measured, fitted, and installed correctly
          the first time.
        </p>
      </section>

    </main>
  );
}
