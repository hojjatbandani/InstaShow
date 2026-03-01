import type { Metadata } from "next";
import {
  Button,
  Container,
  Flex,
  Grid,
  Section,
} from "@/components/ui";
import Link from "next/link";
import { CheckCircleIcon, LockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing options for InstaFix services. Choose pool-based or phase-based pricing.",
};

const poolFeatures = [
  "Lock in a bundle of hours at a fixed rate",
  "Use credits across multiple services",
  "No surprise bills — pay for what you reserve",
  "Ideal for ongoing maintenance & small jobs",
];

const phaseFeatures = [
  "Lock price per project phase (e.g. Phase 1, 2, 3)",
  "Pay as each phase is completed",
  "Clear milestones and approval before next phase",
  "Ideal for renovations and larger projects",
];

export default function PricingPage() {
  return (
    <>
      <Section
        className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4 lg:px-0"
        bgColor="#F1F4F6"
      >
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1B2B] mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-colors-muted text-base md:text-lg">
              Choose how you want to lock in your pricing. You decide — pool-based hours or phase-based project pricing.
            </p>
          </div>

          <Grid cols={2} gap="lg" className="max-w-5xl mx-auto">
            {/* Pool lock option */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all">
              <Flex align="center" gap="sm" className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  <LockIcon size="xl" className="text-[#2563EB]" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1B2B]">Pool Lock</h2>
              </Flex>
              <p className="text-colors-muted text-sm mb-6">
                Lock a pool of hours or credits. Use them whenever you need — no expiry pressure.
              </p>
              <ul className="space-y-3 mb-8">
                {poolFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircleIcon size="sm" className="text-[#22C55E] shrink-0 mt-0.5" />
                    <span className="text-sm text-colors-primary">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/request-quote?type=pool" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Choose Pool Lock
                </Button>
              </Link>
            </div>

            {/* Phase lock option */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all">
              <Flex align="center" gap="sm" className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  <LockIcon size="xl" className="text-[#2563EB]" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1B2B]">Phase Lock</h2>
              </Flex>
              <p className="text-colors-muted text-sm mb-6">
                Lock price per phase. Pay after each phase is done. Full control over scope and budget.
              </p>
              <ul className="space-y-3 mb-8">
                {phaseFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircleIcon size="sm" className="text-[#22C55E] shrink-0 mt-0.5" />
                    <span className="text-sm text-colors-primary">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/request-quote?type=phase" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Choose Phase Lock
                </Button>
              </Link>
            </div>
          </Grid>

          <p className="text-center text-sm text-colors-muted mt-8">
            Not sure? <Link href="/contact-us" className="text-[#2563EB] hover:underline">Contact us</Link> and we’ll help you pick the right option.
          </p>
        </Container>
      </Section>
    </>
  );
}
