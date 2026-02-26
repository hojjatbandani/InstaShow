import type { Metadata } from "next";
import { UsersIcon, ToolsIcon } from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Grid from "@/components/ui/Grid";
import RoleCard from "@/components/dashboard/RoleCard";

export const metadata: Metadata = {
  title: "Professional Dashboard - InstaFix",
};

export default function DashboardPage() {
  return (
    <Flex direction="col" align="center" justify="center" className="min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to InstaFix</h1>
      <p className="text-gray-500 mb-8">Select your dashboard to get started</p>

      <Grid cols={2} gap="md" className="w-full max-w-2xl">
        <RoleCard
          href="/dashboard/customer"
          title="Customer Dashboard"
          description="Browse services, manage bookings, and more"
          icon={UsersIcon}
          iconBg="bg-blue-50"
          iconHoverBg="group-hover:bg-blue-100"
          iconColor="text-[#3E50F7]"
        />
        <RoleCard
          href="/dashboard/professional"
          title="Professional Dashboard"
          description="Manage jobs, track earnings, and grow your business"
          icon={ToolsIcon}
          iconBg="bg-green-50"
          iconHoverBg="group-hover:bg-green-100"
          iconColor="text-green-600"
        />
      </Grid>
    </Flex>
  );
}
