"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {
	BookingsIcon,
	CalenderIcon,
	DashboardIcon,
	DollarIcon,
	JobsIcon,
	LogoutIcon,
	MessageIcon,
	QuestionIcon,
	SearchIcon,
	SettingsIcon,
	WalletIcon,
} from "@/components/icons";

import type {UserType} from "@/types/dashboard";
import {Flex} from "@/components/ui";

const customerNavItems = [
	{label: "Dashboard", href: "/dashboard/customer", icon: DashboardIcon},
	{label: "Browse Services", href: "/dashboard/customer/services", icon: SearchIcon},
	{label: "My Bookings", href: "/dashboard/customer/bookings", icon: BookingsIcon},
	{label: "Messages", href: "/dashboard/customer/messages", icon: MessageIcon},
	{label: "Wallet", href: "/dashboard/customer/wallet", icon: WalletIcon},
	{label: "Profile & Settings", href: "/dashboard/customer/profile", icon: SettingsIcon},
];

const professionalNavItems = [
	{label: "Dashboard", href: "/dashboard/professional", icon: DashboardIcon},
	{label: "Job Pipeline", href: "/dashboard/professional/jobs", icon: JobsIcon},
	{label: "My Bookings", href: "/dashboard/professional/bookings", icon: BookingsIcon},
	{label: "Calendar", href: "/dashboard/professional/calendar", icon: CalenderIcon},
	{label: "Messages", href: "/dashboard/professional/messages", icon: MessageIcon},
	{label: "Earnings", href: "/dashboard/professional/earnings", icon: DollarIcon},
	{label: "Wallet", href: "/dashboard/professional/wallet", icon: WalletIcon},
	{label: "Profile & Settings", href: "/dashboard/professional/profile", icon: SettingsIcon},
];

const bottomItems = [
	{label: "Help & Support", href: "/dashboard/help", icon: QuestionIcon},
	{label: "Log out", href: "/login", icon: LogoutIcon},
];

export default function Sidebar({userType}: { userType: UserType }) {
	const pathname = usePathname();
	const navItems = userType === "professional" ? professionalNavItems : customerNavItems;

	return (
		<aside className="hidden lg:flex flex-col w-[220px] min-h-0 bg-white border-r border-gray-200 py-6 justify-between">
			<nav className="flex flex-col gap-2 px-0">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Flex direction="row" gap="sm" align="center" justify="start" key={item.href}>
							<div className={`h-full w-[4px] rounded-e-2xl ${isActive ? "bg-[#0062FF]" : "bg-transparent"}`}/>
							<Link
								href={item.href}
								className={`flex items-center gap-3 px-0 py-2.5 rounded-lg text-sm font-medium transition w-full ${
									isActive
										? "text-[#0062FF]"
										: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
								}`}
							>
								<item.icon className="w-5 h-5 shrink-0"/>
								{item.label}
							</Link>
						</Flex>
					);
				})}
			</nav>

			<nav className="flex flex-col gap-1 px-3 mt-auto">
				{bottomItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition"
					>
						<item.icon className="w-5 h-5 shrink-0"/>
						{item.label}
					</Link>
				))}
			</nav>
		</aside>
	);
}
