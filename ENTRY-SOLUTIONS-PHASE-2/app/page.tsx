"use client";

import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import ConversionCTA from "@/components/ConversionCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* TRUST INDICATORS */}
      <section className="relative z-10 bg-white">
        <TrustIndicators />
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="relative bg-gradient-to-b from-white to-slate-50">
        <ServicesOverview />
      </section>

      {/* CUSTOM DOOR PROJECTS — PRIMARY VIDEO */}
      <section className="relative py-28 bg-slate-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
        >
          {/* COPY */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-5">
              Custom Door Projects
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              From one-of-a-kind residential entries to precision commercial installs,
              we design and install custom doors built to fit your exact space,
              style, and security needs.
            </p>

            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Fully custom measurements</li>
              <li>✔ Premium materials & finishes</li>
              <li>✔ Residential & commercial projects</li>
            </ul>
          </div>

          {/* VIDEO */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border bg-black">
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
        </motion.div>
      </section>

      {/* SECOND VIDEO + REAL PROJECT PROOF */}
      <section className="relative py-28 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
        >
          {/* VIDEO */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border bg-black max-w-md mx-auto w-full">
            <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
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

          {/* TRUST COPY */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-5">
              Real Custom Hidden Door Project
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              The videos shown here are from a real custom installation completed
              by our team. This project featured a hidden door engineered to blend
              seamlessly into its surroundings while maintaining full strength,
              security, and smooth operation.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-5">
              Every custom door we install is carefully measured, fitted, and
              installed with precision — delivering long-term durability and a
              flawless finished result.
            </p>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-slate-50">
        <Testimonials />
      </section>

      {/* FINAL CTA */}
      <section className="relative">
        <ConversionCTA />
      </section>

    </main>
  );
}
