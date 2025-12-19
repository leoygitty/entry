export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Door Specialists",
      desc: "We specialize in door installations — not general contracting. That focus means better fit, better performance, and better results.",
    },
    {
      title: "Precision Installation",
      desc: "Proper measurements, secure mounting, and clean finishes ensure your door functions correctly and lasts for years.",
    },
    {
      title: "Residential & Commercial Expertise",
      desc: "From single-family homes to commercial properties, we understand the requirements of both environments.",
    },
    {
      title: "Honest Pricing & Free Estimates",
      desc: "No pressure, no surprises. We provide clear estimates and walk you through the best options for your project.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border bg-background"
            >
              <h3 className="font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
