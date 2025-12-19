import ConversionCTA from "@/components/ConversionCTA";

export default function ServicesPage() {
  return (
    <main className="container mx-auto py-20 space-y-24">

      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Door Sales & Professional Installation Services
        </h1>
        <p className="text-lg text-gray-600">
          We provide high-quality door sales, expert installation, and custom
          door solutions for both residential and commercial properties.
        </p>
      </section>

      {/* RESIDENTIAL */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Residential Door Installations
          </h2>
          <p className="text-gray-600 mb-4">
            From front entry doors to interior upgrades, we install residential
            doors with precision, durability, and curb appeal in mind.
          </p>
          <p className="text-gray-600">
            Our team ensures proper fit, smooth operation, and a clean finish
            that improves security and energy efficiency.
          </p>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Commercial Door Installations
          </h2>
          <p className="text-gray-600 mb-4">
            We work with business owners, property managers, and contractors to
            install commercial-grade doors built for high traffic and security.
          </p>
          <p className="text-gray-600">
            Our installations meet performance requirements while maintaining a
            professional appearance.
          </p>
        </div>
      </section>

      {/* CUSTOM DOOR PROJECTS */}
      <section className="space-y-10">

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Custom Door Projects
          </h2>
          <p className="text-gray-600">
            We specialize in custom door solutions tailored to unique spaces,
            architectural styles, and client needs.
          </p>
        </div>

        {/* FIRST VIDEO */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <video
            src="/custom-door.mp4"
            controls
            playsInline
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* SECOND VIDEO + EXPLANATION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              src="/custom-door-2.mp4"
              controls
              playsInline
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              The videos shown above are from a real custom installation project
              completed by our team. This particular project involved a hidden
              door solution designed to blend seamlessly into the surrounding
              space while maintaining full functionality and security.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Every custom door project we take on is carefully planned,
              measured, and installed to ensure a clean finish, smooth operation,
              and long-term durability — no shortcuts, no guesswork.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <ConversionCTA />

    </main>
  );
}
