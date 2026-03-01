"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Flex } from "@/components/ui";

const servicesSubmenu = [
  { label: "Plumbing", href: "/services" },
  { label: "Renovation", href: "/services/renovation" },
  { label: "Other Services", href: "/services" },
];

const nav = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 pt-3 md:pt-5 z-50 bg-transparent px-4 md:px-0">
      <Flex
        gap="md"
        align="center"
        justify="between"
        className="mx-auto h-14 md:h-[72px] max-w-7xl px-3 md:p-4
      bg-background-header border border-[#F2F2F2] rounded-xl md:rounded-2xl"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0 md:flex">
          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="text-sm md:text-md font-normal text-colors-primary hover:text-[18px] transform duration-300 py-4 px-4 flex items-center gap-1"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-[#F2F2F2] rounded-lg shadow-lg py-2 min-w-[180px]">
                {servicesSubmenu.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className="block text-sm font-normal text-colors-primary hover:bg-gray-50 py-2 px-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm md:text-md font-normal text-colors-primary hover:text-[18px] transform duration-300 py-4 px-4"
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
            Sign up
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
        <div className="md:hidden border-t border-gray-100 bg-white rounded-b-xl shadow-lg">
          <nav className="px-6 py-4 space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide pt-2 pb-1">Services</p>
            {servicesSubmenu.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 pl-3 text-[15px] font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide pt-4 pb-1">Main</p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 mt-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 border-t border-gray-100"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
