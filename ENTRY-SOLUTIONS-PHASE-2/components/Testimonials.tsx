const testimonials = [
  {
    name: "Homeowner – Exterior Door",
    quote:
      "From start to finish the process was smooth and professional. The installation was clean, fast, and the door looks incredible.",
    rating: 5,
  },
  {
    name: "Residential Client",
    quote:
      "You can tell they care about quality. Everything was explained clearly and the final result exceeded expectations.",
    rating: 5,
  },
  {
    name: "Local Property Owner",
    quote:
      "Professional, punctual, and detail-oriented. I would absolutely recommend them for any door installation project.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-primary mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Real feedback from homeowners who trusted us with their door installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                “{t.quote}”
              </p>

              {/* Name */}
              <div className="text-sm font-semibold text-gray-900">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
