import type { Metadata } from "next";
import Hero from "@/components/web/sections/Landing/Hero";
import Articles from "@/components/web/sections/Landing/Articles";
import CTA from "@/components/web/sections/Landing/CTA";
import FAQ from "@/components/web/sections/Landing/FAQ";
import HowItWorks from "@/components/web/sections/Landing/HowItWorks";
import Services from "@/components/web/sections/Landing/Services";
import Testimonials from "@/components/web/sections/Landing/Testimonials";
import WhyInstaFix from "@/components/web/sections/Landing/WhyInstaFix";

export const metadata: Metadata = {
  title: "Home",
};

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
