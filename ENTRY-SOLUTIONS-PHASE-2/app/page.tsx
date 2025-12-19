import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 overflow-hidden"
    >
      {/* Subtle Parallax Background Layers */}
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
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Elevate Your Entryway with <span className="text-red-400">Premium Craftsmanship</span>
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
            Entry Solutions LLC specializes in professional doorway installations and home improvements that blend security, style, and sophistication. Transform your space with our expert team.
          </p>
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
            transition={{ duration: 0.3 }}
            className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Your Free Quote Today
          </motion.a>
        </motion.div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 lg:mt-0" // Glassmorphism effect
        >
          <h2 className="text-3xl font-bold text-white mb-6">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: "#ef4444" }}
              transition={{ duration: 0.3 }}
              className="w-full px-6 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Submit Quote Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
