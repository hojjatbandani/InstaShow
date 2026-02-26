"use client";

import Image from "next/image";
import heroImage from "@/assets/web/images/hero section.png";
import { SearchIcon, StarFilledIcon, CheckIcon } from "@/components/icons";
import usersImage from "@/assets/web/images/users.png";
// Keep complex illustrative SVGs as images
import AssistantIcon from "@/assets/web/images/svg/assistant.svg";
import DotImage from "@/assets/web/images/svg/Hero Section Dots.svg";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { Button, Flex } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-1 md:pt-32 md:pb-1 overflow-hidden">
      {/* Background Dots - contained to this section only */}
      <div className="absolute inset-0 -z-10">
        <DotImage className="w-full h-full object-cover" />
        {/* Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-1 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Card
              className="text-xs lg:text-sm text-black p-3 md:p-4 mb-8 md:mb-12 w-auto inline-block new-card"
              hover={false}
            >
              <Flex gap="sm" align="center" justify="start" className="mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-300 flex items-center justify-center">
                  <StarFilledIcon size="xs" className="text-white" />
                </div>
                <span className="font-bold text-md">4.8</span>
                <span className="text-xs"> Rating</span>
              </Flex>
              <p className="text-sm md:text-md">Trusted by 1,200+ homeowners</p>
            </Card>

            <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold text-colors-primary lg:leading-normal">
              Book Trusted Home Service Professionals in Canada
            </h1>

            <p className="mb-6 md:mb-8 text-sm md:text-base lg:text-md text-colors-muted leading-relaxed">
              Connect with verified local professionals for all your home
              service needs. Quality work, transparent pricing, and exceptional
              service guaranteed.
            </p>

            <Flex
              gap="md"
              align="center"
              direction="col"
              smDirection="row"
              justify="center"
              className="mb-6 md:mb-8 lg:justify-start"
            >
              <Button
                variant="primary"
                href="/"
                className="text-sm md:text-base"
                size="md"
                weight="light"
              >
                Find a Professional
                <SearchIcon size="lg" className="ml-3 text-white" />
              </Button>
              <Button
                variant="secondary"
                className="text-sm md:text-base"
                weight="normal"
                href="/"
              >
                Explore Benefits
              </Button>
            </Flex>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Image
                src={usersImage}
                alt="usersImage"
                priority
                className="w-auto h-8 md:h-10 object-cover"
              />
              <span className="text-black text-xs md:text-sm font-medium">
                Used by 62,000+ people
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-2 lg:mt-0 flex items-center relative">
            <Image
              src={heroImage}
              alt="Professional Service"
              width={700}
              height={700}
              priority
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="sm:block absolute bottom-5 left-1/2 -translate-x-1/2">
              <Card
                className="text-xs lg:text-sm text-black p-3 md:p-4 mb-8 md:mb-12 new-card w-[240px] md:w-[300px]"
                hover={false}
              >
                <Flex gap="sm" align="center" className="mb-2">
                  <Flex
                    gap="none"
                    align="center"
                    justify="center"
                    className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-background-tick"
                  >
                    <CheckIcon size="md" className="text-white" />
                  </Flex>
                  <span className="font-bold text-sm md:text-md">
                    {" "}
                    Job Completed
                  </span>
                </Flex>
                <p className="text-xs md:text-[14px]">
                  Trusted Experts Finish Every Task
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
