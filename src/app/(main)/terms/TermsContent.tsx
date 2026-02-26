"use client";

import { useState } from "react";
import { Container, Flex, Section } from "@/components/ui";

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "introduction", label: "1. Introduction" },
    { id: "account-registration", label: "2. Account Registration" },
    { id: "marketplace-services", label: "3. Marketplace Services" },
    { id: "payments-fees", label: "4. Payments & Fees" },
    { id: "user-conduct", label: "5. User Conduct" },
    { id: "liability-disclaimers", label: "6. Liability & Disclaimers" },
    { id: "termination", label: "7. Termination" },
    { id: "contact-us", label: "8. Contact Us" },
  ];

  return (
    <>
      <Section className="py-12 md:pt-36 md:pb-20" bgColor="#E6F0FF">
        <Container size="xl">
          <Flex direction="col" gap="lg" align="center" justify="center">
            <h1 className="text-colors-primary text-2xl md:text-3xl lg:text-5xl font-semibold">
              Terms of services
            </h1>
            <p className="text-sm text-colors-muted">
              Effective Date: January 15, 2024 • Last Updated: March 1, 2024
            </p>
          </Flex>
        </Container>
      </Section>
      <Section className="py-12 md:py-20" bgColor="#F7FAFB">
        <Container size="xl">
          <Flex
            direction="col"
            mdDirection="row"
            gap="3xl"
            align="start"
            justify="center"
          >
            {/* Left Sidebar Navigation */}
            <div className="w-full md:w-1/4 md:sticky md:top-10 bg-white p-6 border border-gray-200 rounded-xl">
              <p className="text-colors-muted text-xs font-semibold uppercase mb-6">
                Table of Contents
              </p>
              <ul>
                {sections.map((section) => (
                  <li key={section.id} className="pb-4">
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
            </div>

            {/* Right Content */}
            <div className="w-full md:w-3/4 terms">
              {/* Introduction */}
              <section id="introduction">
                <h2>1. Introduction</h2>
                <hr />
                <p>
                  {`Welcome to InstaFix. These Terms of Service ("Terms") govern
                  your access to and use of the InstaFix website, mobile
                  application, and services (collectively, the "Service"). By
                  accessing or using the Service, you agree to be bound by these
                  Terms.`}
                </p>
                <p>
                  {`Please read them carefully. If you do not agree to these
                  Terms, you must not access or use the Service.`}
                </p>
              </section>

              {/* Account Registration */}
              <section id="account-registration">
                <h2>2. Account Registration</h2>
                <hr />
                <p>
                  {`To access certain features of the Service, you must register
                  for an account. You agree to provide accurate, current, and
                  complete information during the registration process and to
                  update such information to keep it accurate, current, and
                  complete.`}
                </p>
                <h4 className="text-xl font-semibold text-[#0B2140] mb-6">
                  2.1 Eligibility
                </h4>
                <p>
                  {`You must be at least 18 years old and capable of forming a
                  binding contract to use the Service. By registering, you
                  represent and warrant that you meet these eligibility
                  requirements.`}
                </p>
                <h4 className="text-xl font-semibold text-[#0B2140] mb-6">
                  2.2 Account Security
                </h4>
                <p>
                  {`You are responsible for safeguarding your password and for all
                  activities that occur under your account. You agree to
                  immediately notify InstaFix of any unauthorized use of your
                  account.`}
                </p>
              </section>

              {/* Marketplace Services */}
              <section id="marketplace-services">
                <h2>3. Marketplace Services</h2>
                <hr />
                <p>
                  {`InstaFix provides a marketplace that connects homeowners
                  ("Customers") with home service professionals ("Pros"). We act
                  as an intermediary to facilitate these connections but are not
                  a party to any agreement entered into between Customers and
                  Pros.`}
                </p>
                <p className="second-text">
                  <b>For Customers:</b> The Service allows you to post projects,
                  search for Pros, and request quotes. We do not guarantee the
                  quality, safety, or legality of the services provided by Pros.
                </p>
                <p className="second-text">
                  <b>For Pros:</b> The Service provides a platform to market
                  your services and connect with potential clients. You act as
                  an independent contractor, not an employee of InstaFix.
                </p>
              </section>

              {/* Payments & Fees */}
              <section id="payments-fees">
                <h2>4. Payments & Fees</h2>
                <hr />
                <p>
                  {`Access to the Service is free for Customers. Pros may be
                  charged subscription fees or lead fees as described in our Fee
                  Schedule.`}
                </p>
                <p>
                  {`All payments made through the Service are processed by
                  third-party payment processors. InstaFix does not store your
                  full credit card information. By using the payment services,
                  you agree to the terms and conditions of the applicable
                  payment processor.`}
                </p>
              </section>

              {/* User Conduct */}
              <section id="user-conduct">
                <h2>5. User Conduct</h2>
                <hr />
                <p>
                  You agree not to use the Service for any unlawful purpose or
                  in any way that violates these Terms. Prohibited conduct
                  includes, but is not limited to:
                </p>
                <p className="second-text">
                  Impersonating any person or entity.
                </p>
                <p className="second-text">
                  Harassing, threatening, or defrauding other users.
                </p>
                <p className="second-text">
                  Posting false, misleading, or defamatory content.
                </p>
                <p className="second-text">
                  Attempting to circumvent our fee structure or payment systems.
                </p>
              </section>

              {/* Liability & Disclaimers */}
              <section id="liability-disclaimers">
                <h2>6. Liability & Disclaimers</h2>
                <hr />
                <p className="uppercase">
                  {`THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
                  TO THE FULLEST EXTENT PERMITTED BY LAW, InstaFix DISCLAIMS ALL
                  WARRANTIES, WHETHER EXPRESS OR IMPLIED.`}
                </p>
                <p>
                  InstaFix shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from your access to or use of or
                  inability to access or use the Service.
                </p>
              </section>

              {/* Termination */}
              <section id="termination">
                <h2>7. Termination</h2>
                <hr />
                <p>
                  We may terminate or suspend your account and bar access to the
                  Service immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of the
                  Terms.
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact-us">
                <h2>8. Contact Us</h2>
                <hr />
                <p>
                  If you have any questions about these Terms, please contact
                  us.
                </p>
                <Flex
                  direction="col"
                  gap="sm"
                  align="start"
                  justify="center"
                  className="mt-6 bg-gradient-to-r from-btn-primary-from to-btn-primary-to rounded-lg py-8 px-6 info-box"
                >
                  <h4>InstaFix Legal Team</h4>
                  <p>Rice Howard Place, 10060 Jasper Avenue Tower 1,</p>
                  <p>Suite 2020, Edmonton, Alberta, Canada T5J 3R8</p>
                  <p>Email: legal@InstaFix.ca</p>
                </Flex>
              </section>
            </div>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
