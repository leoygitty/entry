export default function TrustIndicators() {
  const items = ["Licensed & Insured", "10+ Years Experience", "Quality Materials", "Guaranteed Work"];
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto grid md:grid-cols-4 gap-4 text-center">
        {items.map((i, idx) => <div key={idx}>{i}</div>)}
      </div>
    </section>
  );
}