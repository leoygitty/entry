import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ConversionCTA from "@/components/ConversionCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ConversionCTA />
    </main>
  );
}