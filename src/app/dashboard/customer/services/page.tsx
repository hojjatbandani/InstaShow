"use client";

import { useState } from "react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PageHeader from "@/components/dashboard/PageHeader";
import ProfessionalCard from "@/components/dashboard/ProfessionalCard";
import SectionHeader from "@/components/dashboard/SectionHeader";
import { SearchIcon, ThunderIcon, WaterIcon, HvacIcon, HandymanIcon, ToolsIcon } from "@/components/icons";
import { Input } from "@/components/form";
import Button from "@/components/ui/Button";

const serviceCategories = [
  { label: "Electrical Services", Icon: ThunderIcon, color: "text-green-500", bg: "bg-[#DCFCE7]" },
  { label: "Electrical", Icon: ThunderIcon, color: "text-blue-500", bg: "bg-[#DBEAFE]" },
  { label: "Plumbing", Icon: WaterIcon, color: "text-yellow-500", bg: "bg-[#FEF9C3]" },
  { label: "Cleaning", Icon: ToolsIcon, color: "text-purple-500", bg: "bg-[#F3E8FF]" },
  { label: "HVAC", Icon: HvacIcon, color: "text-orange-500", bg: "bg-[#FEF3C7]" },
  { label: "Handyman", Icon: HandymanIcon, color: "text-violet-500", bg: "bg-[#EDE9FE]" },
];

const professionals = [
  { id: "1", name: "BrightBuild Renovations", verified: true, insured: true, fromPrice: "$1,800", href: "/dashboard/customer/services/1" },
  { id: "2", name: "BrightBuild Renovations", verified: true, insured: true, fromPrice: "$1,800", href: "/dashboard/customer/services/2" },
  { id: "3", name: "BrightBuild Renovations", verified: true, insured: true, fromPrice: "$1,800", href: "/dashboard/customer/services/3" },
  { id: "4", name: "BrightBuild Renovations", verified: true, insured: true, fromPrice: "$1,800", href: "/dashboard/customer/services/4" },
  { id: "5", name: "BrightBuild Renovations", verified: true, insured: true, fromPrice: "$1,800", href: "/dashboard/customer/services/5" },
  { id: "6", name: "BrightBuild Renovations", verified: true, insured: true, fromPrice: "$1,800", href: "/dashboard/customer/services/6" },
];

export default function BrowseServicesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(2);

  return (
    <div>
      <PageHeader title="Browse Services" />

      <div className="p-3 md:p-6 space-y-6">
        {/* Search Bar */}
        <DashboardCard>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Service Search</p>
              <Input
                placeholder="What do you need?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Location</p>
              <Input
                placeholder="Select city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button variant="primary" size="md" className="w-full md:w-auto">
              <SearchIcon size="sm" className="mr-2" />
              Search
            </Button>
          </div>
        </DashboardCard>

        {/* Service Categories */}
        <DashboardCard>
          <SectionHeader title="Service Categories" linkText="View all" linkHref="#" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  activeCategory === i
                    ? "border-[#3E50F7] bg-[#EFF2FF]"
                    : "border-transparent hover:border-gray-200 bg-gray-50"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl ${cat.bg} flex items-center justify-center`}>
                  <cat.Icon size="lg" className={cat.color} />
                </div>
                <span className="text-xs font-medium text-colors-primary text-center leading-tight">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </DashboardCard>

        {/* Suggested Professionals */}
        <DashboardCard>
          <SectionHeader title="Suggested Professionals" linkText="View all" linkHref="#" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {professionals.map((p) => (
              <ProfessionalCard key={p.id} {...p} />
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
