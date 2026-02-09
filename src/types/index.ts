import { StaticImageData } from "next/image";

// Common Types
export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  // id: string;
  title: string;
  description: string;
  icon: StaticImageData;
  price: string;
  categories: string[];
  url: string;
  color: string;
}

export interface WhyInstaFixItem {
  // id: string;
  title: string;
  description: string;
  icon: StaticImageData;
  color: string;
}

export interface HowItWorks {
  // id: string;
  step: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  // id: string;
  rating: number;
  content: string;
  image: StaticImageData;
  name: string;
  catrogores?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Article {
  // id: string;
  image: StaticImageData;
  title: string;
  excerpt: string;
  url: string;
}
