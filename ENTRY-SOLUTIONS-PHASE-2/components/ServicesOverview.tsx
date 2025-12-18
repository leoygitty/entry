import {
  DoorOpen,
  Home,
  ShieldCheck,
  Wrench,
  Ruler,
  Hammer
} from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Exterior Doors",
    desc: "Durable, energy-efficient doors that boost curb appeal and security."
  },
  {
    icon: Home,
    title: "Interior Doors",
    desc: "Clean, precise interior door installations for any layout."
  },
  {
    icon: ShieldCheck,
    title: "Security Doors",
    desc: "Heavy-duty doors designed to protect what matters most."
  },
  {
    icon: Wrench,
    title: "Door Replacement",
    desc: "Remove and replace outdated or damaged doors with ease."
  },
  {
    icon: Ruler,
    title: "Custom Fit Doors",
    desc: "Perfect fits for non-standard openings and custom homes."
  },
  {
    icon: Hammer,
    title: "Repairs & Upgrades",
    desc: "Hardware upgrades, alignment fixes, and performance improvements."
  }
];

export default function ServicesOverview() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Door Installation Services
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Professional solutions tailored to your home’s needs — from simple
            replacements to fully custom installations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <Icon className="h-10 w-10 text-primary group-hover:text-accent transition" />
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
