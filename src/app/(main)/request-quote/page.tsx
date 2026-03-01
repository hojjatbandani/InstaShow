"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  Button,
  Container,
  Flex,
  Section,
} from "@/components/ui";
import { FormGroup, Input, Label, Select, Textarea } from "@/components/form";
import Link from "next/link";

const serviceOptions = [
  { value: "plumbing", label: "Plumbing" },
  { value: "renovation", label: "Renovation" },
  { value: "electrical", label: "Electrical" },
  { value: "hvac", label: "HVAC" },
  { value: "other", label: "Other" },
];

function RequestQuoteForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // pool | phase
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <Section className="pt-24 md:pt-32 pb-20" bgColor="#F7FAFC">
        <Container size="md">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-colors-primary mb-2">Thank you</h2>
            <p className="text-colors-muted mb-6">
              We’ve received your quote request. Our team will get back to you within 24 hours.
            </p>
            <Link href="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="pt-24 md:pt-32 pb-20" bgColor="#F7FAFC">
      <Container size="md">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1B2B] mb-2">
            Request a Quote
          </h1>
          <p className="text-colors-muted">
            Tell us about your project. We’ll match you with pros and send free quotes.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10"
        >
          {(type === "pool" || type === "phase") && (
            <p className="text-sm text-[#2563EB] font-medium mb-4">
              Pricing type: {type === "pool" ? "Pool Lock" : "Phase Lock"}
            </p>
          )}
          <Flex direction="col" gap="lg">
            <FormGroup>
              <Label>Service type</Label>
              <Select
                name="service"
                required
                options={[{ value: "", label: "Select..." }, ...serviceOptions]}
              />
            </FormGroup>
            <FormGroup>
              <Label>Your name</Label>
              <Input name="name" placeholder="Full name" required />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="you@example.com" required />
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
              <Input name="phone" type="tel" placeholder="(555) 000-0000" />
            </FormGroup>
            <FormGroup>
              <Label>Project description</Label>
              <Textarea
                name="description"
                rows={5}
                placeholder="Describe your project, timeline, and any specific requirements..."
                required
              />
            </FormGroup>
            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
              Send Quote Request
            </Button>
          </Flex>
        </form>
        <p className="text-center text-sm text-colors-muted mt-6">
          <Link href="/contact-us" className="text-[#2563EB] hover:underline">Contact us</Link> for general questions.
        </p>
      </Container>
    </Section>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center">Loading...</div>}>
      <RequestQuoteForm />
    </Suspense>
  );
}
