import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  PlusIcon,
  DollarSignIcon,
  ElectricalServicesIcon,
  HandymanDashboardIcon,
  HVACDashboardIcon,
  CleaningIcon,
  PlumpingDashboardIcon,
  StatusCustomerIcon,
  CalenderNewIcon,
  DangerIcon,
  CheckCircleIcon,
  SearchDashboardIcon,
  ElectricalIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";
import SectionHeader from "@/components/dashboard/SectionHeader";
import AlertsSection from "@/components/dashboard/AlertsSection";
import {Button, Grid, IconBox} from "@/components/ui";
import NewMessagesIcon from "@/components/icons/dashboard/NewMessagesIcon";
import BellIcon from "@/components/icons/dashboard/BellIcon";

export const metadata: Metadata = {
	title: "Customer Dashboard - InstaFix",
};

const activeBookings = [
	{
		title: "Full Basement Waterproofing & Mold Prevention",
		price: "$1,800",
		status: "Confirmed" as const,
		date: "Sep 3, 2026",
		time: "9:30 AM",
		address: "123 Maple St, Edmonton, AB",
	},
	{
		title: "Full Basement Waterproofing & Mold Prevention",
		price: "$1,800",
		status: "Confirmed" as const,
		date: "Sep 3, 2026",
		time: "9:30 AM",
		address: "123 Maple St, Edmonton, AB",
	},
	{
		title: "Full Basement Waterproofing & Mold Prevention",
		price: "$1,800",
		status: "Confirmed" as const,
		date: "Sep 3, 2026",
		time: "9:30 AM",
		address: "123 Maple St, Edmonton, AB",
	}
];

const statusVariant: Record<string, string> = {
  Confirmed: "text-[#34C759]",
  Pending: "text-amber-700",
};

const statusVariantIcon: Record<string, React.ElementType> = {
  Confirmed: CheckCircleIcon,
  Pending: DangerIcon,
};

const services = [
  {
    title: "Electrical Services",
    icon: ElectricalServicesIcon,
    bgColor: "#00CC8B",
  },
  {
    title: "Electrical",
    icon: ElectricalIcon,
    bgColor: "#3E6FF3",
  },
  {
    title: "Plumbing",
    icon: PlumpingDashboardIcon,
    bgColor: "#F3BA3E",
  },
  {
    title: "Cleaning",
    icon: CleaningIcon,
    bgColor: "#AB3EF3",
  },
  {
    title: "HVAC",
    icon: HVACDashboardIcon,
    bgColor: "#F3683E",
  },
  {
    title: "Handyman",
    icon: HandymanDashboardIcon,
    bgColor: "#503EF3",
  },
];

export default function CustomerDashboardPage() {
	return (
		<div className="p-3 md:p-6">
			<WelcomeHeader
				name="Alex"
				actionLabel="book a new service"
				actionHref="/dashboard/customer/services"
				actionIcon={PlusIcon}
			/>

			<AlertsSection/>

			<DashboardCard className="mb-6">
				<SectionHeader
					title="Upcoming Bookings"
					linkText="View all bookings"
					linkHref="/dashboard/customer/bookings"
					type="Button"
				/>
				{activeBookings.length > 0 ? (
					<Flex direction="col" gap="md">
						{activeBookings.map((booking, index) => (
							<div key={index} className="border border-gray-200 rounded-xl p-4 md:p-5 w-full flex flex-col gap-3">
								{/* Title + Price */}
								<div className="flex flex-row flex-wrap items-start justify-between gap-2">
									<h3 className="text-base font-bold text-gray-900 flex-1 min-w-0">{booking.title}</h3>
									<Flex align="center" gap="sm" className="shrink-0">
										<DollarSignIcon size="md"/>
										<span className="text-colors-muted text-sm">Price:</span>
										<span>{booking.price}</span>
									</Flex>
								</div>
								{/* Info row */}
								<div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4">
									<div className="flex flex-row items-center gap-2">
										<CalenderNewIcon size="md" className="shrink-0"/>
										<span className="text-sm text-colors-muted font-light">Date & Time:</span>
										<span className="text-colors-primary text-sm font-medium">{booking.date}, {booking.time}</span>
									</div>
									<div className="flex flex-row items-center gap-2">
										<StatusCustomerIcon size="md" className="shrink-0"/>
										<span className="text-sm text-colors-muted font-light">Status:</span>
										<span className={`text-sm font-medium flex items-center gap-1 ${statusVariant[booking.status]}`}>
											{(() => {
												const Icon = statusVariantIcon[booking.status];
												return Icon ? <Icon size="md"/> : null;
											})()}
											{booking.status}
										</span>
									</div>
									<div className="flex flex-row items-center gap-2">
										<CalenderNewIcon size="md" className="shrink-0"/>
										<span className="text-sm text-colors-muted font-light">Address:</span>
										<span className="text-colors-primary text-sm font-medium">{booking.address}</span>
									</div>
								</div>
								{/* View details */}
								<div>
									<Link
										href={`/dashboard/customer/bookings/${index + 1}`}
										className="inline-block px-4 py-2 bg-[#EDF4FF] text-[#0062FF] rounded-lg text-sm font-medium hover:bg-blue-50 transition"
									>
										View details
									</Link>
								</div>
							</div>
						))}
					</Flex>
				) : (
					<Flex direction="col" align="center" className="py-8 text-gray-500">
						<p>No active bookings yet.</p>
						<Link href="/dashboard/customer/services" className="text-[#3E50F7] hover:underline mt-2">
							Browse services to get started
						</Link>
					</Flex>
				)}
			</DashboardCard>

			<div className="mb-6 bg-white rounded-xl p-4 border border-black/10">
				<div className="flex flex-row flex-wrap gap-3 items-center justify-between">
					<h4 className="text-lg font-semibold">Quick Action</h4>
					<div className="flex flex-row flex-wrap gap-2">
						<Button variant="none" className="bg-gradient-to-b from-[#B341FF] to-[#7929AE] text-white text-base">
							<SearchDashboardIcon size="md" className=" text-white mr-2"/>
							Browse services
						</Button>
						<Button variant="none" className="bg-gradient-to-b from-[#00CC8B] to-[#00835A] text-white text-base">
							<NewMessagesIcon size="md" className="text-white mr-2"/>
							Messages
						</Button>
						<Button variant="none" className="bg-gradient-to-b from-[#FFAF00] to-[#BA8000] text-white text-base">
							<BellIcon size="md" className="text-white mr-2"/>
							See past bookings
						</Button>
					</div>
				</div>
			</div>

			<div className="mb-6 bg-white rounded-xl p-4 border border-black/10">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
					<div className="text-colors-primary">
						<h4 className="text-lg font-semibold">Recommended for You</h4>
						<h5 className="text-sm font-normal">You recently booked Plumbing. Need help with something else?</h5>
					</div>
					<Button variant="primary" size="lg" className="shrink-0">
						Book a new service
					</Button>
				</div>
				<Grid gap="md" className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
					{services && services.map((service, index) => (
						<Flex direction="col" gap="lg" justify="center" align="center"
									key={index} className="p-4 md:p-[32px] border border-b-gray-200 rounded-2xl bg-white duration-400
									hover:border-blue-600 transition hover:shadow-md hover:shadow-blue-200 hover:-translate-y-1">
							<div className="border border-gray-200 rounded-2xl mb-1 md:mb-3">
								<IconBox size="lg" className="shadow-lg m-2" bgColor={service.bgColor}>
									<service.icon size="lg" className="text-white"/>
								</IconBox>
							</div>
							<p className="text-sm text-center">{service.title}</p>
						</Flex>
					))}
				</Grid>
			</div>
		</div>
	);
}
