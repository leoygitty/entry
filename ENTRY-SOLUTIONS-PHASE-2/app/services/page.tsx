'use client';

import React, { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  Wrench,
  Shield,
  Sparkles,
  CheckCircle2,
  Phone,
  Award,
  MapPin,
  Hammer,
  Sun,
  Ruler,
  Truck
} from 'lucide-react';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Residential Door Installation',
      description:
        'Expert installation of exterior and interior doors designed to improve security, energy efficiency, and curb appeal.',
      features: [
        'Front & rear entry doors',
        'Interior doors & replacements',
        'Patio & sliding doors',
        'French & barn doors'
      ]
    },
    {
      icon: Building2,
      title: 'Commercial Door Installation',
      description:
        'Code-compliant, heavy-duty door systems for offices, retail spaces, and multi-unit properties.',
      features: [
        'ADA-compliant installs',
        'Fire-rated door systems',
        'High-traffic entries',
        'Security access doors'
      ]
    },
    {
      icon: Sparkles,
      title: 'Custom Door Solutions',
      description:
        'Precision-built custom doors for unique openings, specialty materials, and architectural designs.',
      features: [
        'Custom measurements',
        'Specialty materials',
        'Hidden & flush doors',
        'Architectural projects'
      ]
    }
  ];

  const process = [
    { icon: Phone, title: 'Free Consultation' },
    { icon: Ruler, title: 'Precise Measurements' },
    { icon: Hammer, title: 'Expert Installation' },
    { icon: CheckCircle2, title: 'Final Inspection' },
    { icon: Truck, title: 'Clean-Up & Walkthrough' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-800 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <div
            id="hero"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Award className="w-4 h-4" />
              Licensed & Insured Professionals
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Door Sales & Professional
              <span className="block text-blue-200">Installation Services</span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From residential upgrades to commercial installations and fully custom
              projects — every door we install is measured, fitted, and finished with precision.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-animate
              id={`service-${i}`}
              className={`group bg-white rounded-2xl shadow-lg p-8 border transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible[`service-${i}`]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-100 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">
            Our Professional Installation Process
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map(step => (
              <div key={step.title} className="flex flex-col items-center">
                <step.icon className="w-10 h-10 text-primary mb-4" />
                <p className="font-semibold">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="container mx-auto px-6 py-24 text-center">
        <Shield className="w-14 h-14 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">
          Quality Workmanship Guarantee
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every installation is backed by our workmanship guarantee.
          We stand behind our work and ensure your door performs flawlessly
          long after installation day.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-red-600 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Upgrade Your Doors?
          </h2>
          <p className="text-lg mb-8">
            Call now for a free consultation and professional estimate.
          </p>

          <a
            href="tel:2679452247"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            <Phone className="w-5 h-5" />
            (267) 945-2247
          </a>

          <p className="mt-4 text-sm text-white/80 flex justify-center items-center gap-1">
            <MapPin className="w-4 h-4" />
            Proudly serving local residential & commercial clients
          </p>
        </div>
      </section>

    </main>
  );
}
