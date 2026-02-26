"use client";

import {useState} from "react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PageHeader from "@/components/dashboard/PageHeader";
import BookingCard from "@/components/dashboard/BookingCard";
import StatCard from "@/components/dashboard/StatCard";
import {
	CalenderNewIcon,
	CheckCircleIcon,
	ClockIcon,
	ClipboardIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";

type Tab = "Upcoming" | "Past" | "Pending" | "All";
const tabs: Tab[] = ["Upcoming", "Past", "Pending", "All"];

const allBookings = [
	{
		id: "1",
		title: "Basement Development",
		reference: "1253330",
		duration: "4–6 weeks",
		location: "Edmonton",
		price: "$5,000",
		status: "Confirmed" as const,
		day: "18",
		month: "Mar",
		time: "10:00 AM",
		professional: {
			name: "BrightBuild Renovations",
			role: "Renovation Contractor",
		},
		href: "/dashboard/customer/bookings/1",
		tab: "Upcoming",
	},
	{
		id: "2",
		title: "Plumbing Inspection",
		reference: "1253331",
		duration: "2–3 hours",
		location: "Calgary",
		price: "From $250",
		status: "Requested" as const,
		day: "2",
		month: "Apr",
		time: "2:00 PM",
		professional: {name: "RapidFlow Plumbing", role: "Plumber"},
		href: "/dashboard/customer/bookings/2",
		tab: "Upcoming",
	},
	{
		id: "3",
		title: "Professional Cleaning",
		reference: "1253332",
		duration: "4 hours",
		location: "Edmonton",
		price: "From $250",
		status: "Pending" as const,
		day: "10",
		month: "Apr",
		time: "9:00 AM",
		professional: {name: "Sparkle Clean Co.", role: "Cleaning Service"},
		href: "/dashboard/customer/bookings/3",
		tab: "Pending",
	},
	{
		id: "4",
		title: "HVAC Maintenance",
		reference: "1253329",
		duration: "3 hours",
		location: "Edmonton",
		price: "$320",
		status: "Completed" as const,
		day: "15",
		month: "Feb",
		time: "11:00 AM",
		professional: {name: "CoolBreeze HVAC", role: "HVAC Technician"},
		href: "/dashboard/customer/bookings/4",
		tab: "Past",
	},
];

const stats = [
	{label: "Upcoming Bookings", value: "3", subtitle: "Next: Mar 18", iconBg: "bg-[#3E50F7]", icon: CalenderNewIcon},
	{label: "Completed", value: "12", subtitle: "Last: Feb 28", iconBg: "bg-[#0B9E58]", icon: CheckCircleIcon},
	{label: "Pending Approval", value: "2", subtitle: "Awaiting response", iconBg: "bg-[#F59E0B]", icon: ClockIcon},
	{label: "Total Bookings", value: "17", subtitle: "Since joining", iconBg: "bg-[#8B5CF6]", icon: ClipboardIcon},
];

export default function CustomerBookingsPage() {
	const [activeTab, setActiveTab] = useState<Tab>("Upcoming");

	const filtered =
		activeTab === "All"
			? allBookings
			: allBookings.filter((b) => b.tab === activeTab);

	return (
		<div>
			<PageHeader
				title="My Bookings"
				// subtitle="View and manage your service bookings"
			/>

			<div className="p-3 md:p-6">
				<DashboardCard className="space-y-6">
					<div className="">
						<h2 className="text-xl md:text-2xl font-bold text-colors-primary mb-1">My Bookings</h2>
						<h3 className="text-colors-primary font-extralight text-sm md:text-base">View and manage your service
							bookings</h3>
					</div>

					{/* Tabs */}
					<div className="overflow-x-auto pb-1">
						<Flex gap="md" className="bg-gray-100 p-2 rounded-lg grow-0 w-fit min-w-max">
							{tabs.map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-light transition-all ${
										activeTab === tab
											? "bg-gradient-to-r from-btn-primary-from to-btn-primary-to text-white shadow-sm"
											: "text-gray-500"
									}`}
								>
									{tab === "Upcoming" ? (
										<CalenderNewIcon size="sm"/>
									) : (
										<ClockIcon size="sm"/>
									)}
									{tab}
								</button>
							))}
						</Flex>
					</div>

					{/* Stat Cards */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						{stats.map((s) => (
							<StatCard key={s.label} {...s} />
						))}
					</div>

					{/* Booking List */}
					{filtered.length > 0 ? (
						<div className="space-y-4">
							{filtered.map((b) => (
								<BookingCard key={b.id} {...b} />
							))}
						</div>
					) : (
						<div className="py-12 text-center">
							<p className="text-gray-400 text-sm">No bookings in this category.</p>
						</div>
					)}
				</DashboardCard>
			</div>
		</div>
	);
}
