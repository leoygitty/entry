import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ConversionCTA from "@/components/ConversionCTA";

export default function Home() {
  return (
    <main>
      {/* HERO: first impression + primary CTA */}
      <Hero />

      {/* TRUST: credibility immediately after hero */}
      <TrustIndicators />

      {/* SERVICES: what you actually do */}
      <ServicesOverview />

      {/* PROCESS: removes uncertainty, builds confidence */}
      <HowItWorks />

      {/* DIFFERENTIATION: why this company */}
      <WhyChooseUs />

      {/* SOCIAL PROOF */}
      <Testimonials />

      {/* FINAL PUSH */}
      <ConversionCTA />
    </main>
  );
}
