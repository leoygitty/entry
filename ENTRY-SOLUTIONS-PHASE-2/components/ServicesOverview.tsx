export default function ServicesOverview() {
  const services = ["Exterior Doors", "Interior Doors", "Security Doors"];
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white shadow">{s}</div>
        ))}
      </div>
    </section>
  );
}