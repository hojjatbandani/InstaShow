import type { Metadata } from "next";
import DashboardCard from "@/components/dashboard/DashboardCard";

export const metadata: Metadata = {
  title: "My Bookings - InstaFix",
};

export default function ProfessionalBookingsPage() {
  return (
    <div>
      <div className="p-6 border-b border-gray-200 bg-white">
        <h1 className="text-2xl font-bold text-colors-primary">My Bookings</h1>
        <p className="text-colors-muted">Your bookings will appear here.</p>
      </div>
      <div className="p-6">
        <DashboardCard>
          <p>your booking is empty</p>
        </DashboardCard>
      </div>
    </div>


  );
}
