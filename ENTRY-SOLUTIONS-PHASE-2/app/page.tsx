"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 overflow-hidden"
    >
      {/* Background layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800/30"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COPY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Elevate Your Entryway with{" "}
            <span className="text-red-400">Premium Craftsmanship</span>
          </h1>

          <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
            Entry Solutions LLC delivers expert doorway installations that blend
            security, performance, and design — installed with precision.
          </p>

          <motion.a
            href="#quote"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Get Your Free Quote Today
          </motion.a>
        </motion.div>

        {/* QUOTE FORM */}
        <motion.div
          id="quote"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Request a Quote
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400"
            />

            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              className="w-full px-6 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
            >
              Submit Quote Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
