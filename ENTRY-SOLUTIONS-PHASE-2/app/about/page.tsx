import AboutContent from "@/components/AboutContent";
import ConversionCTA from "@/components/ConversionCTA";

export default function About() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">About Entry Solutions LLC</h1>
      <AboutContent />
      <ConversionCTA />
    </main>
  );
}