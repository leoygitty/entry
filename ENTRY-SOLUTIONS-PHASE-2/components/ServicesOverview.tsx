"use client";

export default function ServicesOverview() {
  const services = [
    {
      title: "Residential Door Installation",
      desc: "Professional installation for exterior and interior residential doors.",
    },
    {
      title: "Commercial Door Services",
      desc: "Durable, code-compliant door solutions for commercial properties.",
    },
    {
      title: "Custom Door Projects",
      desc: "One-of-a-kind doors designed and installed to fit unique spaces.",
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
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
