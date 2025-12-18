import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ConversionCTA from "@/components/ConversionCTA";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO + QUOTE */}
      <Hero />

      {/* TRUST / BADGES */}
      <TrustIndicators />

      {/* SERVICES OVERVIEW */}
      <ServicesOverview />

      {/* CUSTOM DOOR VIDEO SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Custom Door Projects
            </h2>
            <p className="text-gray-600 mb-6">
              From one-of-a-kind residential entries to precision commercial installs,
              we design and install custom doors built to fit your exact space,
              style, and security needs.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Fully custom measurements</li>
              <li>✔ Premium materials & finishes</li>
              <li>✔ Residential & commercial projects</li>
            </ul>
          </div>

          {/* VIDEO */}
          <div className="rounded-2xl overflow-hidden shadow-xl border">
            <video
              src="/custom-door.mp4"
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <ConversionCTA />

    </main>
  );
}
