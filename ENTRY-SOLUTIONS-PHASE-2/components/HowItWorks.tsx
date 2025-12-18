import { PhoneCall, Ruler, DoorOpen } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Request a Quote",
    desc: "Tell us about your door project and schedule a convenient time to get started."
  },
  {
    icon: Ruler,
    title: "Measure & Recommend",
    desc: "We assess your space and recommend the best door options for your needs."
  },
  {
    icon: DoorOpen,
    title: "Professional Installation",
    desc: "Our team installs your door with precision, care, and attention to detail."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A simple, stress-free process designed to get your new door installed quickly and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-background hover:bg-white hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
