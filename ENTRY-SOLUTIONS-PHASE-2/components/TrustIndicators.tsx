import { ShieldCheck, Award, Wrench, ThumbsUp } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "Experienced Professionals" },
  { icon: Wrench, label: "Quality Materials" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {indicators.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-background transition"
          >
            <Icon className="h-10 w-10 text-primary" />
            <p className="font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
