"use client";

import { usePathname } from "next/navigation";
import DashboardHeader from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileBottomNav from "@/components/dashboard/MobileBottomNav";
import NavigationLoader from "@/components/dashboard/NavigationLoader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const roleSegment = segments[2]; // "customer" or "professional"
  const userType = roleSegment === "professional" ? "professional" : "customer";
  const showNav = roleSegment === "customer" || roleSegment === "professional";

  return (
    <div className="h-screen bg-[#F8F9FB] flex flex-col overflow-hidden">
      <NavigationLoader />
      <DashboardHeader userType={showNav ? userType : undefined} />
      <div className="flex flex-1 min-h-0">
        {showNav && <Sidebar userType={userType} />}
        <main className={`flex-1 overflow-y-auto flex flex-col p-2 sm:p-4 lg:p-0 ${showNav ? "pb-20 md:pb-16 lg:pb-8" : "pb-0"} bg-[#FAFAFB]`}>
          {children}
        </main>
      </div>
      {showNav && <MobileBottomNav userType={userType} />}
    </div>
  );
}
