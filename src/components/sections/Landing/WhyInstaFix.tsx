"use client";

import Image from "next/image";
import white_man_hat from "@/assets/images/white-man-hat.png";
import { ShieldCheckIcon, LocationIcon, LockIcon } from "@/components/icons";
import { IconProps } from "@/components/icons";
import { Section, Container, Grid, Flex, IconBox, Button } from "@/components/ui";
import { FC } from "react";

interface WhyItem {
  title: string;
  description: string;
  Icon: FC<IconProps>;
}

const whyInstaFixItems: WhyItem[] = [
  {
    title: "Verified Professionals",
    description:
      "All Professionals are background-checked and certified for your .",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Local Services",
    description:
      "Connect with professionals in your neighborhood for faster service .",
    Icon: LocationIcon,
  },
  {
    title: "Secured Payments",
    description:
      "Your payment is held securely until the job is completed to .",
    Icon: LockIcon,
  },
];

export default function WhyInstaFix() {
  return (
    <Section>
      <Container>
        <Flex direction="col-reverse" align="center" justify="between" gap="xl" mdDirection="row">
          {/* Left Image */}
          {/*<div className="relative">*/}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Flex
                align="center"
                justify="center"
                className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50"
              >
                <Image
                  src={white_man_hat}
                  alt="a man with white hat"
                  width={700}
                  height={700}
                />
              </Flex>
            </div>
          {/*</div>*/}

          {/* Right Content */}
          <div className="mt-0 text-center sm:text-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-colors-primary mb-3 md:mb-4">
              Why InstaFix?
            </h2>

            <p className="text-base md:text-lg text-colors-muted mb-6 md:mb-8">
              We make finding and booking trusted home service professionals
              simple, fast, and reliable.
            </p>

            {whyInstaFixItems.map((why, index) => (
              <Flex key={index} align="start" gap="lg" className="mb-4">
                <IconBox size="md" variant="rounded" bgColor="#EFF6FF">
                  <why.Icon size="md" className="text-[#2563EB]" />
                </IconBox>
                <Flex direction="col">
                  <h3 className="text-lg font-bold text-colors-primary mb-2">
                    {why.title}
                  </h3>
                  <p className="text-base text-colors-muted text-start">
                    {why.description}
                  </p>
                </Flex>
              </Flex>
            ))}

            <Button href="/" variant="primary" size="lg" className="mt-8">
              Get Started
            </Button>
          </div>
        </Flex>
      </Container>
    </Section>
  );
}
