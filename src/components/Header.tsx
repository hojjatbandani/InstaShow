"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import {Flex} from "@/components/ui";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Portfolio Detail", href: "/portfolio" },
  { label: "Renovation Detail", href: "/services/renovation" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Privacy", href: "/privacy" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 pt-3 md:pt-5 z-50 bg-transparent px-4 md:px-0">
      <Flex gap="md" align="center" justify="between"
        className="mx-auto h-14 md:h-[72px] max-w-7xl px-3 md:p-4
      bg-background-header border border-[#F2F2F2] rounded-xl md:rounded-2xl"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-Menu md:hover:text-MenuHover px-2 py-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/login"
            className="hidden md:inline-flex text-sm md:text-[15px] font-medium text-gray-700 hover:text-gray-900
            transition
            bg-[#F5F5F5] px-4 md:px-6 py-2 md:py-3 rounded-lg"
          >
            Log In
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-btn-primary-from to-btn-primary-to
             px-3 md:px-6 py-2 md:py-3 text-xs md:text-[15px] font-semibold text-white hover:from-btn-primary-from hover:to-btn-primary-to transition"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </Flex>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-6 py-4 space-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
