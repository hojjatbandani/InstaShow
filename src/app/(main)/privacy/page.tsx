"use client";

import { useState } from "react";
import { Button, Container, Flex } from "@/components/ui";
import { ShieldCheckIcon } from "@/components/icons";
import Accordion from "@/components/ui/Accordion";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "data-collection", label: "Data Collection" },
  { id: "how-we-use-data", label: "How We Use Data" },
  { id: "information-sharing", label: "Information Sharing" },
  { id: "security-measures", label: "Security Measures" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const accordian = [
  {
    id: "1",
    question: "Can I delete my data?",
    answer:
      "Yes, you can request full data deletion at any time through your account settings or by contacting our privacy team. We will process your request within 30 days in accordance with Canadian privacy laws.",
  },
  {
    id: "2",
    question: "How long do you keep my information?",
    answer:
      "Yes, you can request full data deletion at any time through your account settings or by contacting our privacy team. We will process your request within 30 days in accordance with Canadian privacy laws.",
  },
  {
    id: "3",
    question: "Do professionals see my full address?",
    answer:
      "Yes, you can request full data deletion at any time through your account settings or by contacting our privacy team. We will process your request within 30 days in accordance with Canadian privacy laws.",
  },
  {
    id: "4",
    question: "Is my payment information stored on your servers?",
    answer:
      "Yes, you can request full data deletion at any time through your account settings or by contacting our privacy team. We will process your request within 30 days in accordance with Canadian privacy laws.",
  },
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container size="xl" className="pt-8 md:pt-16 pb-12 md:pb-20 mt-24 md:mt-32" bgColor="#F7FAFF">
      <Flex
        direction="col"
        mdDirection="row"
        gap="lg"
        align="start"
        justify="center"
      >
        {/* Left Sidebar Navigation */}
        <div className="w-full md:w-1/4 md:sticky md:top-32">
          <p className="text-colors-muted text-xs font-semibold uppercase mb-6">
            On this page
          </p>
          <ul className=" mb-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`block w-full text-left pl-4 py-2 text-sm font-normal transition-all duration-200 border-l-2 -ml-[1px] ${
                    activeSection === section.id
                      ? "text-[#0066CC] border-[#0066CC]"
                      : "text-colors-muted border-transparent hover:text-[#0B2140] hover:border-colors-muted"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          <Flex
            direction="col"
            justify="center"
            align="start"
            gap="md"
            className="bg-[#F3F6F9] rounded-md p-4 md:p-6 mr-0 md:mr-14"
          >
            <h4 className="text-[14px]">Need help?</h4>
            <p className="text-[13px] text-colors-muted">
              {`Can't find what you're looking for? Our support team is here to
              assist.`}
            </p>
            <Button
              variant="none"
              className="rounded-md bg-white text-colors-primary w-full border border-gray-300"
              size="md"
              type="button"
            >
              Contact Support
            </Button>
          </Flex>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B2140] mb-4 md:mb-6">
            Privacy Policy
          </h1>
          <p className="text-colors-muted text-sm leading-relaxed mb-12">
            Last updated: October 24, 2024
          </p>

          <hr className="bg-gray-300 w-full mb-12" />

          {/* Introduction */}
          <section id="introduction" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-[#0B2140] mb-4">
              {` `}
            </h2>
            <p className="text-[#0B2140] text-base leading-relaxed mb-6">
              {`At InstaFix, we take your privacy seriously. This Privacy Policy
              describes how InstaFix Inc. ("we," "us," or "our") collects, uses,
              and discloses your personal information when you visit our
              website, use our mobile application, or engage with our home
              services marketplace (collectively, the "Services").`}
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-6">
              {`By using our Services, you consent to the collection and use of
              your information as outlined in this policy. We are committed to
              transparency and ensuring that you retain control over your
              personal data.`}
            </p>
          </section>

          {/* Data Collection */}
          <section id="data-collection" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-[#0B2140] mb-4">
              1. Data We Collect
            </h2>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              We collect information that identifies, relates to, describes,
              references, is capable of being associated with, or could
              reasonably be linked, directly or indirectly, with a particular
              consumer or device.
            </p>
            <h3 className="text-xl font-semibold text-[#0B2140] mb-4">
              Information You Provide
            </h3>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              <b className="text-[#0B2140]">Account Information:</b> Name, email
              address, phone number, and password when you register.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              <b className="text-[#0B2140]">Service Details:</b> Address,
              property type, and specific service requests when you post a job.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              <b className="text-[#0B2140]">Payment Information:</b> Credit card
              details and billing address processed by our secure payment
              partners.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              <b className="text-[#0B2140]">Communications:</b> Messages sent
              between you and professionals through our platform.
            </p>
          </section>

          {/* How We Use Data */}
          <section id="how-we-use-data" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-[#0B2140] mb-4">
              Information Automatically Collected
            </h2>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              When you access our platform, we may automatically collect
              specific data to improve performance and user experience:
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              Device information (type, operating system, browser)
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              IP address and location data
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              Usage patterns and session duration
            </p>
            <Flex
              direction="row"
              align="start"
              justify="center"
              gap="md"
              className="p-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-xl"
            >
              <ShieldCheckIcon size={40} className="mr-1 text-white shrink-0" />
              <Flex direction="col" align="start" justify="center" gap="md">
                <h3 className="text-white font-normal text-base">
                  Your Data Security
                </h3>
                <p className="text-white font-thin text-base">
                  We never sell your personal contact information to third-party
                  advertisers. Your data is only shared with professionals you
                  explicitly choose to engage with.
                </p>
              </Flex>
            </Flex>
          </section>

          {/* Information Sharing */}
          <section id="information-sharing" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-[#0B2140] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              We use the collected information for the following business
              purposes:
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              To provide and maintain our Service, including monitoring the
              usage of our Service.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              To manage your Account: to manage your registration as a user of
              the Service.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              To contact you: To contact you by email, telephone calls, SMS, or
              other equivalent forms of electronic communication regarding
              updates or informative communications related to the
              functionalities.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4 ml-6">
              To provide you with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired
              about.
            </p>
          </section>

          {/* Security Measures */}
          <section id="security-measures" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-[#0B2140] mb-4">
              3. Information Sharing
            </h2>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              We may share Your personal information in the following
              situations:
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              <b className="text-[#0B2140] pr-1"> With Service Providers:</b>
              We may share Your personal information with Service Providers to
              monitor and analyze the use of our Service, for payment
              processing, or to contact You.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              <b className="text-[#0B2140] pr-1"> With Business Partners:</b>
              We may share Your information with Our business partners to offer
              You certain products, services or promotions.
            </p>
            <p className="text-[#0B2140] text-base leading-relaxed mb-4">
              <b className="text-[#0B2140] pr-1"> With other users:</b>
              when You share personal information or otherwise interact in the
              public areas with other users, such information may be viewed by
              all users and may be publicly distributed outside.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-[#0B2140] mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion items={accordian} />
          </section>
        </div>
      </Flex>
    </Container>
  );
}
