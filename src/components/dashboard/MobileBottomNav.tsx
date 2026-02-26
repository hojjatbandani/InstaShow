"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	DashboardIcon,
	BookingsIcon,
	MessageIcon,
	SearchIcon,
	JobsIcon,
	SettingsIcon,
	WalletIcon,
} from "@/components/icons";

import type { UserType } from "@/types/dashboard";

const customerNavItems = [
	{ label: "Home", href: "/dashboard/customer", icon: DashboardIcon },
	{ label: "Services", href: "/dashboard/customer/services", icon: SearchIcon },
	{ label: "Bookings", href: "/dashboard/customer/bookings", icon: BookingsIcon },
	{ label: "Messages", href: "/dashboard/customer/messages", icon: MessageIcon },
	{ label: "Wallet", href: "/dashboard/customer/wallet", icon: WalletIcon },
	{ label: "Profile", href: "/dashboard/customer/profile", icon: SettingsIcon },
];

const professionalNavItems = [
	{ label: "Home", href: "/dashboard/professional", icon: DashboardIcon },
	{ label: "Jobs", href: "/dashboard/professional/jobs", icon: JobsIcon },
	{ label: "Bookings", href: "/dashboard/professional/bookings", icon: BookingsIcon },
	{ label: "Messages", href: "/dashboard/professional/messages", icon: MessageIcon },
	{ label: "Profile", href: "/dashboard/professional/profile", icon: SettingsIcon },
];

export default function MobileBottomNav({ userType }: { userType: UserType }) {
	const pathname = usePathname();
	const navItems = userType === "professional" ? professionalNavItems : customerNavItems;

	return (
		<nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
			<div className="flex items-center justify-around h-16 px-1">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-lg transition ${
								isActive
									? "text-[#3E50F7]"
									: "text-gray-400 hover:text-gray-600"
							}`}
						>
							<item.icon className={`w-5 h-5 ${isActive ? "text-[#3E50F7]" : ""}`} />
							<span className="text-[10px] font-medium">{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
