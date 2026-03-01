import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Container,
  Flex,
  Grid,
  Section,
} from "@/components/ui";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and news from InstaFix.",
};

const posts = [
  {
    id: 1,
    slug: "winter-plumbing-tips",
    title: "Winter Plumbing Tips for Canadian Homes",
    excerpt: "Keep your pipes and water heater in top shape during the cold months.",
    date: "Feb 20, 2026",
    category: "Plumbing",
    image: "/api/placeholder/400/240",
  },
  {
    id: 2,
    slug: "when-to-call-a-plumber",
    title: "When to Call a Plumber vs. DIY",
    excerpt: "Learn which repairs are safe to do yourself and when to call a pro.",
    date: "Feb 15, 2026",
    category: "Plumbing",
    image: "/api/placeholder/400/240",
  },
  {
    id: 3,
    slug: "renovation-budget-guide",
    title: "How to Plan Your Renovation Budget",
    excerpt: "Phase-based pricing and pool options explained for your next project.",
    date: "Feb 10, 2026",
    category: "Renovation",
    image: "/api/placeholder/400/240",
  },
  {
    id: 4,
    slug: "finding-trusted-pros",
    title: "Finding Trusted Home Service Professionals",
    excerpt: "What to look for when hiring plumbers, electricians, and contractors.",
    date: "Feb 5, 2026",
    category: "Tips",
    image: "/api/placeholder/400/240",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section
        className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4 lg:px-0"
        bgColor="#F1F4F6"
      >
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1B2B] mb-4">
              Blog
            </h1>
            <p className="text-colors-muted text-base md:text-lg">
              Tips, guides, and updates from the InstaFix team.
            </p>
          </div>

          <Grid cols={4} gap="lg">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-gray-300 transition"
              >
                <div className="aspect-[5/3] bg-gray-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#3B82F6]/10" />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-medium text-[#2563EB]">
                    {post.category}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-xs text-colors-muted mb-1">{post.date}</p>
                  <h2 className="font-semibold text-colors-primary group-hover:text-[#2563EB] transition line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-colors-muted mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
