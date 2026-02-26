import type { Metadata } from "next";
import "./globals.css";
import FloatingAssistant from "@/components/web/FloatingAssistant";

export const metadata: Metadata = {
  title: {
    template: "%s | InstaFix",
    default: "InstaFix - Book Trusted Home Service Professionals in Canada",
  },
  description: "Find verified experts for cleaning, plumbing, electrical, and more. Simple booking, transparent pricing, and real customer reviews.",
  keywords: ["home services", "professional services", "plumbing", "electrical", "cleaning", "Canada"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-sans antialiased">
        {children}
        <FloatingAssistant />
      </body>
    </html>
  );
}
