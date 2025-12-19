import * as React from 'react';
import { CheckCircle, ShieldCheck, Users, Star, MapPin, ArrowRight, Quote, Clock } from 'lucide-react';
import { motion, AnimatePresence, Variant } from 'framer-motion';

type IconComponent = React.ComponentType<{ size?: number; className?: string; }>;

interface Differentiator {
  icon: IconComponent;
  title: string;
  desc: string;
  stat: string;
}

interface ProcessStep {
  number: number;
  title: string;
  desc: string;
}

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

interface Stat {
  value: string;
  label: string;
}

interface ComparisonItem {
  feature: string;
  us: string;
  others: string;
}

export default function WhyChooseUs(): JSX.Element {
  const containerVariants: { hidden: Variant; visible: Variant } = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: { hidden: Variant; visible: Variant } = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverVariants: { hover: Variant } = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const coreDifferentiators: Differentiator[] = [
    {
      icon: CheckCircle,
      title: "Experienced Door Specialists",
      desc: "Our team of certified experts brings over 15 years of specialized experience in door installations, ensuring unparalleled precision and quality that general contractors simply can't match.",
      stat: "15+ Years of Expertise",
    },
    {
      icon: ShieldCheck,
      title: "Precision Installation",
      desc: "We use state-of-the-art tools and meticulous techniques for secure mounting, perfect fits, and flawless finishes, guaranteeing doors that perform beautifully and endure for decades.",
      stat: "100% Precision Guarantee",
    },
    {
      icon: Users,
      title: "Residential & Commercial Expertise",
      desc: "Whether enhancing a family home or securing a commercial space, our tailored solutions meet the unique demands of every environment with professional-grade results.",
      stat: "Serving 500+ Properties Annually",
    },
    {
      icon: Star,
      title: "Premium Materials & Craftsmanship",
      desc: "We partner with top manufacturers to source high-quality materials, combined with our master craftsmanship, delivering doors that elevate your property's value and aesthetic.",
      stat: "Certified Partnerships",
    },
    {
      icon: ShieldCheck,
      title: "Exceptional Customer Service",
      desc: "From initial consultation to post-installation support, our dedicated team provides personalized guidance, ensuring a seamless experience and your complete satisfaction.",
      stat: "24/7 Support Availability",
    },
    {
      icon: MapPin,
      title: "Local Expertise & Commitment",
      desc: "As a trusted local business, we understand your community's needs and deliver solutions that blend perfectly with regional styles and requirements.",
      stat: "Proudly Serving Your Area",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Free Consultation",
      desc: "We start with a no-obligation discussion to understand your needs and vision.",
    },
    {
      number: 2,
      title: "Precise Measurements",
      desc: "Our experts conduct thorough on-site measurements for a perfect fit.",
    },
    {
      number: 3,
      title: "Custom Selection",
      desc: "We guide you through premium options tailored to your style and budget.",
    },
    {
      number: 4,
      title: "Professional Installation",
      desc: "Skilled technicians handle the installation with minimal disruption.",
    },
    {
      number: 5,
      title: "Quality Assurance",
      desc: "We perform rigorous checks to ensure everything exceeds expectations.",
    },
    {
      number: 6,
      title: "Ongoing Support",
      desc: "Enjoy peace of mind with our follow-up and warranty services.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      quote: "Entry Solutions transformed our home's entrance with incredible attention to detail. The process was smooth, and the results are stunning!",
      rating: 5,
    },
    {
      name: "Michael R.",
      location: "Dallas, TX",
      quote: "Professional from start to finish. Their expertise in commercial doors saved us time and money. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily T.",
      location: "Houston, TX",
      quote: "The team's craftsmanship is top-notch. Our new doors not only look amazing but function perfectly. True experts!",
      rating: 5,
    },
    {
      name: "David L.",
      location: "San Antonio, TX",
      quote: "Impressed by their honest pricing and quick response. The installation was flawless, and the warranty gives us total peace of mind.",
      rating: 5,
    },
    {
      name: "Jessica K.",
      location: "Fort Worth, TX",
      quote: "As a local business owner, I appreciate their commitment to quality and community. Exceptional service all around.",
      rating: 5,
    },
    {
      name: "Robert P.",
      location: "El Paso, TX",
      quote: "From consultation to completion, everything was handled with professionalism. Our doors have elevated our property's curb appeal tremendously.",
      rating: 5,
    },
  ];

  const stats: Stat[] = [
    { value: "15+", label: "Years in Business" },
    { value: "1000+", label: "Projects Completed" },
    { value: "100%", label: "Customer Satisfaction" },
    { value: "<24h", label: "Average Response Time" },
  ];

  const serviceAreas: string[] = ["Austin", "Dallas", "Houston", "San Antonio", "Fort Worth", "El Paso", "And Surrounding Communities"];

  const comparisonData: ComparisonItem[] = [
    { feature: "Response Time", us: "Within 24 Hours", others: "3-5 Business Days" },
    { feature: "Installation Expertise", us: "Specialized Door Pros", others: "General Contractors" },
    { feature: "Warranty Coverage", us: "Lifetime on Labor", others: "1-2 Years Limited" },
    { feature: "Material Quality", us: "Premium Partners", others: "Standard Suppliers" },
    { feature: "Customer Support", us: "24/7 Dedicated", others: "Business Hours Only" },
    { feature: "Pricing Transparency", us: "Honest & Upfront", others: "Hidden Fees Possible" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Why Choose Entry Solutions LLC?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
          >
            Tired of subpar installations that fail prematurely? Discover the Entry Solutions difference: premium craftsmanship, unwavering reliability, and doors that transform your space with lasting excellence.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-white text-[#1e40af] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
          >
            Get Your Free Estimate <ArrowRight className="ml-2" size={20} />
          </motion.a>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-6">Our Unwavering Promise</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Entry Solutions LLC, we don't just install doors—we craft entrances that enhance security, beauty, and value. Our specialized focus means superior results without the hassle of general contractors. Experience the peace of mind that comes with expert installation, premium materials, and a commitment to excellence that's backed by our lifetime warranty.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              <ShieldCheck className="mr-2" size={24} /> Certified Excellence Guarantee
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-12 text-center"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={{ ...itemVariants, ...hoverVariants }}
                whileHover="hover"
                className="bg-white p-6 rounded-xl shadow-md transition duration-300"
              >
                <motion.div 
                  className="text-[#dc2626] mb-4 flex justify-center"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <item.icon size={48} />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{item.desc}</p>
                <div className="text-center text-sm font-bold text-[#dc2626] bg-red-100 px-4 py-2 rounded-full">
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-12 text-center"
          >
            Our Proven Process
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#dc2626] opacity-50 md:hidden"></div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{ ...itemVariants, ...hoverVariants }}
                  whileHover="hover"
                  className={`bg-white p-6 rounded-xl shadow-md transition duration-300 relative ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#dc2626] text-white rounded-full flex items-center justify-center font-bold md:hidden">
                    {step.number}
                  </div>
                  <div className="text-[#dc2626] font-bold text-2xl mb-2">{step.number}. {step.title}</div>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Credentials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-12 text-center"
          >
            Our Expertise & Credentials
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: "Licensed", icon: ShieldCheck },
              { label: "Bonded", icon: ShieldCheck },
              { label: "Insured", icon: ShieldCheck },
              { label: "Certified Partners", icon: CheckCircle },
            ].map((cred, index) => (
              <motion.div
                key={index}
                variants={{ ...itemVariants, ...hoverVariants }}
                whileHover="hover"
                className="bg-white p-4 rounded-lg shadow-md transition duration-300 text-center"
              >
                <div className="text-[#dc2626] mb-2 flex justify-center">
                  <cred.icon size={32} />
                </div>
                <p className="font-semibold text-[#1e40af]">{cred.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-gray-700 mt-8 max-w-3xl mx-auto"
          >
            Proud members of the National Door Association and certified installers for leading manufacturers like Andersen and Pella.
          </motion.p>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-6"
          >
            Our Quality Guarantee
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            We stand behind every installation with a lifetime warranty on labor and comprehensive coverage on materials. If it's not perfect, we'll make it right—no questions asked. Your satisfaction is our ultimate measure of success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex flex-col items-center bg-gradient-to-br from-[#1e40af] to-[#dc2626] text-white p-8 rounded-2xl shadow-xl max-w-sm mx-auto"
          >
            <ShieldCheck size={48} className="mb-4" />
            <span className="text-2xl font-bold">Lifetime Guarantee</span>
            <span className="text-sm mt-2">Risk-Free Excellence</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-12 text-center"
          >
            What Our Customers Say
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                variants={{ ...itemVariants, ...hoverVariants }}
                whileHover="hover"
                className="bg-white p-6 rounded-xl shadow-md transition duration-300 relative"
              >
                <Quote className="absolute top-4 left-4 text-[#dc2626] opacity-20" size={48} />
                <p className="text-gray-600 mb-4 italic">"{test.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1e40af]">{test.name}</p>
                    <p className="text-sm text-gray-500">{test.location}</p>
                  </div>
                  <div className="flex text-[#dc2626]">
                    <AnimatePresence>
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star size={16} fill="currentColor" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-12 text-center"
          >
            By The Numbers
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-[#dc2626] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-6"
          >
            Proudly Serving Our Communities
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            As a local business, we're committed to delivering premium door solutions to our neighbors. Your trust powers our passion for excellence.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceAreas.map((area, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-full shadow-md text-[#1e40af] font-medium"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-12 text-center"
          >
            Why Entry Solutions vs. The Rest
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
                  <th className="py-4 px-6 text-left rounded-tl-xl">Feature</th>
                  <th className="py-4 px-6 text-center">Entry Solutions</th>
                  <th className="py-4 px-6 text-center rounded-tr-xl">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr 
                    key={index} 
                    className="border-b last:border-none"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6 font-medium text-[#1e40af]">{item.feature}</td>
                    <td className="py-4 px-6 text-center text-[#dc2626] font-bold">{item.us}</td>
                    <td className="py-4 px-6 text-center text-gray-500">{item.others}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience the Entry Solutions Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who've chosen premium quality and peace of mind. Schedule your free consultation today and let us transform your entryway.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-white text-[#1e40af] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Request Free Estimate <ArrowRight className="ml-2" size={20} />
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-6 flex justify-center space-x-4"
          >
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <ShieldCheck className="mr-2" size={20} /> Lifetime Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <Clock className="mr-2" size={20} /> Quick Response Promised
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
