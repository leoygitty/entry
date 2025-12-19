"use client";

import ContactForm from "@/components/ContactForm";
import ConversionCTA from "@/components/ConversionCTA";

export default function Contact() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COPY */}
          <div>
            <p className="uppercase tracking-widest text-sm text-white/80 mb-4">
              Entry Solutions LLC
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Call Now for a<br />
              Fast, Professional Door Installation
            </h1>

            <p className="text-lg text-white/90 max-w-xl mb-8">
              Speak directly with a professional installer. Get clear answers,
              honest pricing, and expert guidance — no pressure.
            </p>

            {/* PRIMARY CALL CTA */}
            <a
              href="tel:2679452247"
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700
                         text-white text-xl font-bold px-8 py-5 rounded-xl
                         shadow-2xl transition-all duration-300
                         animate-pulse hover:scale-[1.03]"
            >
              📞 Call Now: (267) 945-2247
            </a>

            <p className="mt-4 text-sm text-white/80">
              Available now • Fast response time
            </p>
          </div>

          {/* TRUST CARD */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 text-gray-900">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Customers Call Us
            </h2>

            <ul className="space-y-4 text-lg">
              <li className="flex gap-3">
                ✅ <span>Direct access to an experienced installer</span>
              </li>
              <li className="flex gap-3">
                ✅ <span>Clear pricing and honest recommendations</span>
              </li>
              <li className="flex gap-3">
                ✅ <span>Residential & commercial expertise</span>
              </li>
              <li className="flex gap-3">
                ✅ <span>Custom door solutions done right</span>
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div>
                🛡️
                <p>Licensed & Insured</p>
              </div>
              <div>
                ⚡
                <p>Fast Response</p>
              </div>
              <div>
                ⭐
                <p>Quality Guaranteed</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CALL NOW */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Why Call Now?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">Same-Day Answers</h3>
            <p className="text-gray-600">
              Get immediate clarity on options, timelines, and next steps.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">Limited Availability</h3>
            <p className="text-gray-600">
              Installation slots fill quickly — calling secures priority.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">No Guesswork</h3>
            <p className="text-gray-600">
              Speak directly with the person who installs the door.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Prefer a Callback?
          </h2>

          <p className="text-gray-600 text-center mb-10">
            Fill out the form below and we’ll contact you shortly.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4">
            Our Professional Promise
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Every project is measured, fitted, and installed with precision.
            We stand behind our workmanship and take pride in doing the job right.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-red-600 to-blue-700 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <a
          href="tel:2679452247"
          className="inline-block bg-white text-red-600 font-bold
                     px-10 py-5 rounded-xl shadow-2xl
                     hover:scale-105 transition"
        >
          📞 Call (267) 945-2247 Now
        </a>
      </section>

      <ConversionCTA />
    </main>
  );
}
