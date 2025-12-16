import ServiceAreasList from "@/components/ServiceAreasList";
import ConversionCTA from "@/components/ConversionCTA";

export default function ServiceAreas() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Service Areas</h1>
      <ServiceAreasList />
      <ConversionCTA />
    </main>
  );
}