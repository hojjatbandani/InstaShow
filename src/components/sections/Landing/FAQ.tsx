"use client";

import React from "react";
import Accordion from "../../ui/Accordion";

const faqs = [
  {
    id: "1",
    question: "How do I book a service?",
    answer:
      "Simply browse our services, select the one you need, choose a time that works for you, and confirm your booking. You'll receive instant confirmation and details about your service professional.",
  },
  {
    id: "2",
    question: "Are the professionals verified?",
    answer:
      "Yes! All service professionals on InstaFix undergo thorough background checks and verification. They are licensed, insured, and have been vetted to ensure quality service.",
  },
  {
    id: "3",
    question: "What if I need to cancel or reschedule?",
    answer:
      "You can cancel or reschedule your booking up to 24 hours before the scheduled time for free. Cancellations within 24 hours may incur a small fee.",
  },
  {
    id: "4",
    question: "How is pricing determined?",
    answer:
      "We believe in transparent pricing. You'll see the cost upfront before booking. Pricing is based on the service type, duration, and your location. No hidden fees.",
  },
  {
    id: "5",
    question: "What if I'm not satisfied with the service?",
    answer:
      "Customer satisfaction is our priority. If you're not happy with the service, contact us within 48 hours and we'll work to make it right, including potential refunds or rebooking.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-2 md:mx-4 lg:mx-0">
        <div className="text-start mb-12 col-span-2 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-colors-primary leading-loose">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="md:col-span-3">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
