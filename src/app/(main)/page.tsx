import Hero from "@/components/sections/Landing/Hero";
import Articles from "@/components/sections/Landing/Articles";
import CTA from "@/components/sections/Landing/CTA";
import FAQ from "@/components/sections/Landing/FAQ";
import HowItWorks from "@/components/sections/Landing/HowItWorks";
import Services from "@/components/sections/Landing/Services";
import Testimonials from "@/components/sections/Landing/Testimonials";
import WhyInstaFix from "@/components/sections/Landing/WhyInstaFix";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyInstaFix />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Articles />
      <CTA />
    </>
  );
}
