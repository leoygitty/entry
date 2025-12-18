import ConversionCTA from "@/components/ConversionCTA";

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-background py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-primary mb-6">
            Door Sales & Professional Installation Services
          </h1>
          <p className="text-secondary text-lg">
            We provide high-quality door sales, expert installation, and custom
            door solutions for both residential and commercial properties.
          </p>
        </div>
      </section>

      {/* DOOR SALES */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Door Sales
            </h2>
            <p className="text-secondary mb-6">
              We offer a wide selection of durable, stylish, and energy-efficient
              doors sourced from trusted manufacturers. Whether you’re replacing
              an existing door or upgrading your space, we help you select the
              right solution for performance and appearance.
            </p>
            <ul className="space-y-3">
              <li>✔ Exterior entry doors</li>
              <li>✔ Interior doors</li>
              <li>✔ Security doors</li>
              <li>✔ Commercial-grade doors</li>
            </ul>
          </div>

          <div className="bg-background rounded-xl p-8">
            <p className="font-semibold mb-2">Ideal for:</p>
            <p className="text-secondary">
              Homeowners, property managers, business owners, and contractors
              looking for quality door solutions with professional guidance.
            </p>
          </div>
        </div>
      </section>

      {/* DOOR INSTALLATION */}
      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white rounded-xl p-8 shadow-sm">
            <p className="font-semibold mb-2">Our installation includes:</p>
            <ul className="space-y-3 text-secondary">
              <li>✔ Precise measurements</li>
              <li>✔ Removal of existing doors</li>
              <li>✔ Secure, level installation</li>
              <li>✔ Clean finish & trim work</li>
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Professional Door Installation
            </h2>
            <p className="text-secondary mb-6">
              Proper installation is critical to door performance, safety, and
              longevity. Our experienced installers ensure every door is fitted
              correctly, sealed properly, and functions exactly as it should.
            </p>
            <p className="text-secondary">
              We install doors for both residential homes and commercial spaces,
              always following best practices and manufacturer specifications.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOM DOOR SERVICES */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Custom Door Services
            </h2>
            <p className="text-secondary mb-6">
              For unique spaces and design-driven projects, we offer custom door
              solutions tailored to your exact needs. From sizing to materials
              and finishes, we work closely with you to deliver a one-of-a-kind
              result.
            </p>
            <ul className="space-y-3">
              <li>✔ Custom sizing & fit</li>
              <li>✔ Specialty materials</li>
              <li>✔ Design-focused installations</li>
              <li>✔ Residential & commercial projects</li>
            </ul>
          </div>

          {/* VIDEO CLIP */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              src="/videos/custom-door.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <ConversionCTA />
    </main>
  );
}
