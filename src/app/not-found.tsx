import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};
import NotFoundIcon from "@/assets/web/images/svg/404.svg";
import Header from "@/components/web/Header";
import Footer from "@/components/web/Footer";
import DotImage from "@/assets/web/images/svg/Hero Section Dots.svg";
import { Section } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex items-center justify-center mt-20 sm:px-6 px-0 py-20 min-h-[calc(100vh-80px)] mx-auto max-w-screen-xl">
        {/* Background Dots - contained to this section only */}
        <div className="absolute inset-0 -z-10">
          <DotImage className="w-full h-full object-cover" />
          {/* Vertical Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>
        <Section spacing="none" className="px-4 md:px-2 lg:px-0">
          <div className="text-center max-w-3xl mx-auto">
            <NotFoundIcon className="mx-auto w-auto h-auto md:w-[700px] mb-12 md:mb-10 lg:mb-8" />
            <div className="px-[50px] py-[50px] shadow-2xl rounded-xl bg-white transform -translate-y-14 w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colors-primary mb-4">
                Sorry! Page not found
              </h1>
              <p className="text-base text-colors-muted mb-8">
                Hey there! Looks like the page you&apos;re trying to find
                isn&apos;t here anymore or might&apos;ve been shifted around. No
                biggie, let&apos;s help you find your way back!
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-btn-primary-from to-btn-primary-to px-6 py-3 text-lg text-white hover:opacity-90 transition font-medium"
              >
                Go Back to Home
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
