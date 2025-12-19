import ContactForm from "@/components/ContactForm";
import ConversionCTA from "@/components/ConversionCTA";

export default function Contact() {
  return (
    <main className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-8 max-w-xl">
        Have questions or ready to start your project? Call us or fill out the form
        below to request a free estimate.
      </p>

      <p className="text-lg font-semibold mb-6">
        📞 Phone:{" "}
        <a
          href="tel:2679452247"
          className="text-primary underline"
        >
          (267) 945-2247
        </a>
      </p>

      <ContactForm />

      <div className="mt-16">
        <ConversionCTA />
      </div>
    </main>
  );
}
