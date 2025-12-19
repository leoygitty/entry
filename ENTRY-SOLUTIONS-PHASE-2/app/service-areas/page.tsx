import ServiceAreasList from "@/components/ServiceAreasList";

export default function ServiceAreas() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Service Areas</h1>
      <ServiceAreasList />
      <ConversionCTA />
    </main>
  );
}
