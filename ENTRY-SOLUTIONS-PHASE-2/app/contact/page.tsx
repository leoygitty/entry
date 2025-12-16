import ContactForm from "@/components/ContactForm";
import ConversionCTA from "@/components/ConversionCTA";

export default function Contact() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Get a Free Estimate</h1>
      <ContactForm />
      <ConversionCTA />
    </main>
  );
}