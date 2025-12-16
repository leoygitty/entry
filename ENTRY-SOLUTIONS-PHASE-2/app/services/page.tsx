import ServiceSection from "@/components/ServiceSection";
import ConversionCTA from "@/components/ConversionCTA";

export default function Services() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
      <ServiceSection title="Exterior Doors" description="Durable, secure, and energy-efficient exterior door installations." />
      <ServiceSection title="Interior Doors" description="High-quality interior doors to elevate your home’s style." />
      <ServiceSection title="Security Doors" description="Added protection without sacrificing design." />
      <ConversionCTA />
    </main>
  );
}