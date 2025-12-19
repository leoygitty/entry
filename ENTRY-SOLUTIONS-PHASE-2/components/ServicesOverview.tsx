"use client";

export default function ServicesOverview() {
  const services = [
    {
      title: "Residential Door Installations",
      desc: "Professional installation of exterior and interior doors for homeowners. We ensure proper fit, secure sealing, smooth operation, and a clean finish that improves both curb appeal and energy efficiency.",
    },
    {
      title: "Commercial Door Installations",
      desc: "Reliable door installation services for offices, retail spaces, warehouses, and other commercial properties. We install durable, code-compliant doors designed for security, heavy use, and long-term performance.",
    },
    {
      title: "Custom Door Services",
      desc: "Custom-fit doors designed for unique openings, specialty materials, or specific design requirements. We handle precise measurements, custom solutions, and expert installation for both residential and commercial projects.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
