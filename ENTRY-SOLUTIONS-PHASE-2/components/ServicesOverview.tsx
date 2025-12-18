export default function ServicesOverview() {
  const services = ["Exterior Doors", "Interior Doors", "Security Doors"];

  return (
    <section className="py-12 bg-background">
      <div className="container grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
