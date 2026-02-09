"use client";

import { ClipboardIcon, UsersIcon, MessageIcon } from "@/components/icons";
import { IconProps } from "@/components/icons";
import { Section, Container, SectionTitle, Grid, Flex, IconBox } from "@/components/ui";
import { FC } from "react";

interface Step {
  step: number;
  title: string;
  description: string;
  Icon: FC<IconProps>;
}

const steps: Step[] = [
  {
    step: 1,
    title: "Tell us what you need!",
    description:
      "Choose the service you want and tell us about your project requirements.",
    Icon: ClipboardIcon,
  },
  {
    step: 2,
    title: "Connect with local pro",
    description:
      "See verified professionals near you now and compare their profiles.",
    Icon: UsersIcon,
  },
  {
    step: 3,
    title: "Chat, book and pay safe",
    description:
      "Message professionals, set a time, and pay securely through our platform.",
    Icon: MessageIcon,
  },
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <Container className="text-center">
        <SectionTitle
          title="How InstaFix Works"
          subtitle="Find and book the right professional in three simple steps."
        />
        <Grid cols={3}>
          {steps.map((step, index) => (
            <Flex
              key={index}
              direction="col"
              align="center"
              className="text-center px-4 md:px-6 mb-8 md:mb-12 rounded-xl bg-[#F1F5F9] p-6 md:p-8"
            >
              <IconBox
                size="xl"
                variant="rounded"
                className="mb-4 md:mb-6 bg-white shadow-md rounded-3xl"
              >
                <step.Icon size="xl" className="text-[#2563EB]" />
              </IconBox>

              <h3 className="text-lg md:text-xl text-colors-primary font-semibold mb-3 md:mb-4">
                <span>{step.step}. </span>
                {step.title}
              </h3>
              <p className="text-sm md:text-base font-normal text-colors-muted">
                {step.description}
              </p>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
