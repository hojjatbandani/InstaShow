import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Button } from "@/components/ui";

const posts: Record<string, { title: string; date: string; category: string; body: string }> = {
  "winter-plumbing-tips": {
    title: "Winter Plumbing Tips for Canadian Homes",
    date: "Feb 20, 2026",
    category: "Plumbing",
    body: "Winter in Canada can be tough on your plumbing. Here are a few simple steps to keep your pipes and water heater in top shape during the cold months. Insulate exposed pipes, keep your home heated, and know how to shut off water in an emergency. When in doubt, call a licensed plumber through InstaFix.",
  },
  "when-to-call-a-plumber": {
    title: "When to Call a Plumber vs. DIY",
    date: "Feb 15, 2026",
    category: "Plumbing",
    body: "Some repairs are safe to do yourself; others need a pro. Learn which tasks—like unclogging a drain or replacing a faucet—you can handle, and when it’s time to call a licensed plumber. InstaFix connects you with vetted professionals in your area.",
  },
  "renovation-budget-guide": {
    title: "How to Plan Your Renovation Budget",
    date: "Feb 10, 2026",
    category: "Renovation",
    body: "Phase-based pricing and pool options give you control over your renovation budget. Lock in a price per phase or reserve a pool of hours. We explain both options so you can choose what works best for your project.",
  },
  "finding-trusted-pros": {
    title: "Finding Trusted Home Service Professionals",
    date: "Feb 5, 2026",
    category: "Tips",
    body: "What to look for when hiring plumbers, electricians, and contractors: licenses, insurance, reviews, and clear quotes. InstaFix verifies professionals so you can book with confidence.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: post ? `${post.title} | Blog` : "Blog",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <Section className="pt-24 pb-20" bgColor="#F7FAFC">
        <Container size="md">
          <p className="text-colors-muted">Post not found.</p>
          <Link href="/blog"><Button variant="primary" className="mt-4">Back to Blog</Button></Link>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="pt-24 md:pt-32 pb-20" bgColor="#F7FAFC">
      <Container size="md">
        <Link href="/blog" className="text-sm text-[#2563EB] hover:underline mb-6 inline-block">
          ← Back to Blog
        </Link>
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10">
          <p className="text-xs text-colors-muted mb-2">{post.date} · {post.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0B1B2B] mb-6">{post.title}</h1>
          <div className="prose prose-gray max-w-none text-colors-muted">
            <p>{post.body}</p>
          </div>
        </article>
      </Container>
    </Section>
  );
}
