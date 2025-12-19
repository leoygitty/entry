"use client";

import * as React from "react";
import {
  CheckCircle,
  ShieldCheck,
  Users,
  Star,
  MapPin,
  ArrowRight,
  Quote,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  /* -------------------- DATA -------------------- */

  const coreDifferentiators = [
    {
      icon: CheckCircle,
      title: "Experienced Door Specialists",
      desc: "Over 15 years of specialized door installation experience delivering precision and durability.",
      stat: "15+ Years Experience",
    },
    {
      icon: ShieldCheck,
      title: "Precision Installation",
      desc: "Exact measurements, clean finishes, and secure installations done right the first time.",
      stat: "100% Fit Guarantee",
    },
    {
      icon: Users,
      title: "Residential & Commercial",
      desc: "Trusted solutions for homeowners, property managers, and commercial spaces.",
      stat: "500+ Properties Served",
    },
    {
      icon: Star,
      title: "Premium Craftsmanship",
      desc: "We work with high-quality materials and proven installation techniques.",
      stat: "Top-Tier Materials",
    },
    {
      icon: ShieldCheck,
      title: "Customer-First Service",
      desc: "Clear communication, honest pricing, and follow-through from start to finish.",
      stat: "Satisfaction Guaranteed",
    },
    {
      icon: MapPin,
      title: "Local Experts",
      desc: "We understand local building standards and install doors that last.",
      stat: "Locally Trusted",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Philadelphia, PA",
      quote:
        "Entry Solutions delivered flawless workmanship. The door fits perfectly and looks incredible.",
      rating: 5,
    },
    {
      name: "Michael R.",
      location: "Bucks County, PA",
      quote:
        "Professional, on time, and extremely skilled. I wouldn’t trust anyone else.",
      rating: 5,
    },
    {
      name: "Emily T.",
      location: "Montgomery County, PA",
      quote:
        "The custom door they installed completely transformed our space.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "<24h", label: "Response Time" },
  ];

  /* -------------------- PAGE -------------------- */

  return (
    <div className="bg-gradient-to-b from-white to-gray-100">

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Why Choose Entry Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-xl"
        >
          Premium door installation backed by experience, precision, and
          professionalism.
        </motion.p>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          What Sets Us Apart
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {coreDifferentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <item.icon className="mx-auto text-red-600 mb-4" size={42} />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <span className="text-sm font-bold text-red-600">
                {item.stat}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          What Our Customers Say
        </h2>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg relative"
            >
              <Quote className="absolute top-4 left-4 text-red-500 opacity-20" size={48} />
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-blue-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
                <div className="flex text-red-500">
                  <AnimatePresence>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-4xl font-bold text-red-600">{s.value}</div>
              <div className="text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade Your Door?
        </h2>
        <p className="text-xl mb-10">
          Call now for a free estimate and expert guidance.
        </p>
        <a
          href="tel:2679452247"
          className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Call (267) 945-2247 <ArrowRight className="ml-2" />
        </a>
      </section>
    </div>
  );
}
