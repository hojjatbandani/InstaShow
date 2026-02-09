"use client";

import Image from "next/image";
import { Article as ArticleType } from "@/types";
import article1 from "@/assets/images/Articles/article_01.png";
import article2 from "@/assets/images/Articles/article_02.png";
import article3 from "@/assets/images/Articles/article_03.png";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Section, Container, SectionTitle, Grid, Flex } from "@/components/ui";

const articles: ArticleType[] = [
  {
    title: "How to Choose the Right Professional",
    excerpt:
      "Learn how to find trusted, verified professionals for your home service projects across Alberta.",
    image: article1,
    url: "/",
  },
  {
    title: "Understanding Home Service Costs",
    excerpt:
      "A simple guide to pricing for renovations, plumbing, electrical, and other common home services in Alberta",
    image: article2,
    url: "/",
  },
  {
    title: "What to Know Before Renovating",
    excerpt:
      "Key things to consider before starting a home or basement renovation to save time and avoid extra costs.",
    image: article3,
    url: "/",
  },
];

export default function Articles() {
  return (
    <Section className="px-2 lg:mx-0">
      <Container>
        <SectionTitle
          title="Articles & Guides"
          subtitle="Expert tips, practical guides, and the latest insights on home services."
        />

        <Grid cols={3} gap="md">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#FCFCFC] rounded-xl overflow-hidden shadow-sm border border-gray-200 px-4 py-6"
            >
              <Flex align="center" justify="center">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform rounded-2xl"
                />
              </Flex>

              <div className="pt-4 md:pt-5">
                <h3 className="text-base md:text-lg lg:text-[20px] font-semibold text-colors-primary mb-3 md:mb-4 group-hover:text-blue-600 transition">
                  {article.title}
                </h3>

                <p className="text-sm md:text-base text-colors-muted mb-3 md:mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <Flex align="center" justify="between">
                  <Link
                    href={article.url}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    <Flex align="center" gap="sm">
                      Read post
                      <ArrowUpRightIcon size="sm" />
                    </Flex>
                  </Link>
                </Flex>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
