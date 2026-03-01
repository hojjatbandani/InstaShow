"use client";

import { useState } from "react";
import Link from "next/link";
import AssistantIcon from "@/assets/web/images/svg/assistant.svg";

const quickActions = [
  { label: "Book a Service", href: "/dashboard/customer/services", icon: "📅" },
  { label: "Reschedule Appointment", href: "/dashboard/customer/bookings", icon: "🔄" },
  { label: "Cancel Booking", href: "/dashboard/customer/bookings", icon: "❌" },
  { label: "Payment Issue", href: "/contact-us", icon: "💳" },
  { label: "Contact Technician", href: "/dashboard/customer/messages", icon: "👷" },
  { label: "Track My Job", href: "/dashboard/customer/bookings", icon: "📍" },
  { label: "Talk to Support", href: "/contact-us", icon: "💬" },
];

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-2 md:right-6 bottom-2 md:bottom-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-[280px] md:w-[320px] transition-all duration-200 opacity-100"
          role="dialog"
          aria-label="Quick actions"
        >
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">
            <p className="text-white font-semibold text-sm">How can we help?</p>
            <p className="text-white/90 text-xs mt-0.5">Choose an option below</p>
          </div>
          <ul className="max-h-[70vh] overflow-y-auto py-2">
            {quickActions.map((action) => (
              <li key={action.label}>
                <Link
                  href={action.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-colors-primary hover:bg-gray-50 transition"
                >
                  <span className="text-lg" aria-hidden>{action.icon}</span>
                  <span>{action.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-white rounded-full w-12 h-12 md:w-14 md:h-14 p-2.5 md:p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        <AssistantIcon className="w-full h-full text-[#3B82F6]" />
      </button>
    </div>
  );
}
