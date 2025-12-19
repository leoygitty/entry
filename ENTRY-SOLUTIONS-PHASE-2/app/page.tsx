import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
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

          {/* FIRST VIDEO */}
          <div className="rounded-2xl overflow-hidden shadow-xl border bg-black">
            <video
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto"
            >
              <source src="/custom-door.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </section>

      {/* SECOND CUSTOM DOOR VIDEO + TRUST COPY */}
      <section className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* SECOND VIDEO — FIXED */}
          <div className="rounded-2xl overflow-hidden shadow-xl border bg-black max-w-sm mx-auto">
  <div className="relative aspect-[9/16]">
    <video
      controls
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/custom-door2.mp4" type="video/mp4" />
    </video>
  </div>
</div>

          {/* TRUST TEXT */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Real Custom Hidden Door Project
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              The videos shown on this page are from a real custom installation
              completed by our team. This project featured a hidden door designed
              to blend seamlessly into the surrounding space while maintaining
              full functionality and security.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Every custom door we install is carefully measured, fitted, and
              installed with precision — ensuring smooth operation, a clean
              finish, and long-term durability.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <ConversionCTA />

    </main>
  );
}
