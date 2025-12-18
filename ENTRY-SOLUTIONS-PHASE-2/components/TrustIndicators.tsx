export default function TrustIndicators() {
  const items = [
    {
      icon: "🛡️",
      title: "Licensed & Insured",
      desc: "Fully licensed and insured for your peace of mind.",
    },
    {
      icon: "⭐",
      title: "Quality Craftsmanship",
      desc: "Attention to detail on every installation.",
    },
    {
      icon: "💬",
      title: "Free Estimates",
      desc: "Clear pricing with no obligation.",
    },
    {
      icon: "🏆",
      title: "Satisfaction Guaranteed",
      desc: "We stand behind our work.",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 px-4"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-semibold text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
