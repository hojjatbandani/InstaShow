import type { Metadata } from "next";
import Link from "next/link";
import {
  EmailIcon,
  BookingsIcon,
  UsersIcon,
  CalenderIcon,
  CheckCircleIcon,
  PlusIcon,
  StarFilledIcon,
  LocationIcon,
  EyeIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Grid from "@/components/ui/Grid";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import QuickAccessGrid from "@/components/dashboard/QuickAccessGrid";
import DashboardCard from "@/components/dashboard/DashboardCard";
import SectionHeader from "@/components/dashboard/SectionHeader";
import StatCard from "@/components/dashboard/StatCard";
import StarRating from "@/components/dashboard/StarRating";
import AlertsSection from "@/components/dashboard/AlertsSection";

export const metadata: Metadata = {
  title: "Professional Dashboard - InstaFix",
};

const quickAccessItems = [
  {
    label: "Messages",
    href: "/dashboard/professional/messages",
    icon: EmailIcon,
    iconBg: "bg-blue-500",
  },
  {
    label: "Calendar",
    href: "/dashboard/professional/bookings",
    icon: BookingsIcon,
    iconBg: "bg-green-500",
  },
  {
    label: "Edit Profile",
    href: "/dashboard/professional/profile",
    icon: UsersIcon,
    iconBg: "bg-amber-500",
  },
];

const stats = [
  {
    label: "Today's Jobs",
    value: "2",
    subtitle: "jobs scheduled",
    iconBg: "bg-blue-500",
    icon: CalenderIcon,
  },
  {
    label: "This Week's Earnings",
    value: "$1,240",
    subtitle: "total earnings",
    iconBg: "bg-green-500",
    icon: CheckCircleIcon,
  },
  {
    label: "New Requests",
    value: "3",
    subtitle: "new requests",
    iconBg: "bg-purple-500",
    icon: PlusIcon,
  },
  {
    label: "Current Rating",
    value: "4.8",
    subtitle: "(124 reviews)",
    iconBg: "bg-orange-500",
    icon: StarFilledIcon,
    hasStars: true,
  },
];

const upcomingJobs = [
  {
    title: "Basement Development",
    reference: "1253330",
    time: "Today \u2022 2:00 PM",
    location: "Edmonton \u2013 Mill Woods",
  },
  {
    title: "Basement Development",
    reference: "1253331",
    time: "Today \u2022 2:00 PM",
    location: "Edmonton \u2013 Mill Woods",
  },
  {
    title: "Basement Development",
    reference: "1253332",
    time: "Today \u2022 2:00 PM",
    location: "Edmonton \u2013 Mill Woods",
  },
];

export default function ProfessionalDashboardPage() {
  return (
    <div className="p-6">
      <WelcomeHeader
        name="Alex"
        actionLabel="View job requests"
        actionHref="/dashboard/professional/jobs"
        actionIcon={EyeIcon}
      />

      <AlertsSection />

      <QuickAccessGrid items={quickAccessItems} />

      <Grid cols={4} gap="sm" className="mb-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            subtitle={stat.subtitle}
            iconBg={stat.iconBg}
            icon={stat.icon}
            extra={stat.hasStars ? <StarRating /> : undefined}
          />
        ))}
      </Grid>

      <DashboardCard>
        <SectionHeader
          title="Upcoming Jobs"
          linkText="View all jobs"
          linkHref="/dashboard/professional/bookings"
        />
        <Grid cols={3} gap="sm">
          {upcomingJobs.map((job) => (
            <Flex
              key={job.reference}
              direction="col"
              gap="none"
              className="border border-gray-200 rounded-xl p-5 hover:shadow-lg"
            >
              <h3 className="text-base font-bold text-gray-900 mb-6">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                booking reference : {job.reference}
              </p>
              <Flex
                align="center"
                gap="sm"
                className="text-sm text-gray-500 mb-6"
              >
                <CalenderIcon size="sm" className="shrink-0" />
                {job.time}
              </Flex>
              <Flex
                align="center"
                gap="sm"
                className="text-sm text-gray-500 mb-6"
              >
                <LocationIcon size="sm" className="shrink-0" />
                {job.location}
              </Flex>
              <Link
                href={`/dashboard/professional/bookings/${job.reference}`}
                className="w-full text-center py-2.5 border border-[#3E50F7] text-[#3E50F7] rounded-lg text-sm font-medium hover:bg-blue-100 transition bg-blue-50"
              >
                View details
              </Link>
            </Flex>
          ))}
        </Grid>
      </DashboardCard>
    </div>
  );
}
