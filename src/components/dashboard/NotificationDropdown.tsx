"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Flex from "@/components/ui/Flex";
import { ClockIcon } from "@/components/icons";
import type { Notification } from "@/types/dashboard";

const notifications: Notification[] = [
	{
		id: "1",
		title: "New Booking",
		message: "John Smith booked Plumbing Repair",
		time: "2 min ago",
		read: false,
		href: "/dashboard",
	},
	{
		id: "2",
		title: "Payment Received",
		message: "You received $350 for Electrical work",
		time: "1 hour ago",
		read: false,
		href: "/dashboard",
	},
	{
		id: "3",
		title: "Message from Sarah",
		message: "Hi, I wanted to ask about the timeline...",
		time: "3 hours ago",
		read: true,
		href: "/dashboard",
	},
	{
		id: "4",
		title: "Review Posted",
		message: "A client left you a 5-star review",
		time: "Yesterday",
		read: true,
		href: "/dashboard",
	},
];

export default function NotificationDropdown() {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const unreadCount = notifications.filter((n) => !n.read).length;

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setOpen(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => setOpen(false), 200);
	};

	return (
		<div
			ref={dropdownRef}
			className="relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Bell Button */}
			<button
				onClick={() => setOpen((prev) => !prev)}
				className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
			>
				<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				{unreadCount > 0 && (
					<span className="absolute top-1 right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full px-1">
						{unreadCount}
					</span>
				)}
			</button>

			{/* Dropdown */}
			{open && (
				<div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden">
					{/* Header */}
					<Flex align="center" justify="between" className="px-4 py-3 border-b border-gray-100">
						<h3 className="text-sm font-bold text-gray-900">Notifications</h3>
						{unreadCount > 0 && (
							<span className="text-xs font-medium text-[#3E50F7] bg-blue-50 px-2 py-0.5 rounded-full">
								{unreadCount} new
							</span>
						)}
					</Flex>

					{/* Notification List */}
					<div className="max-h-80 overflow-y-auto">
						{notifications.map((notification) => (
							<Link
								key={notification.id}
								href={notification.href}
								onClick={() => setOpen(false)}
								className={`block px-4 py-3 hover:bg-gray-50 transition border-b border-gray-50 last:border-b-0 ${
									!notification.read ? "bg-blue-50/40" : ""
								}`}
							>
								<Flex align="start" gap="sm">
									{!notification.read && (
										<span className="mt-1.5 w-2 h-2 bg-[#3E50F7] rounded-full shrink-0" />
									)}
									<div className={notification.read ? "pl-4" : ""}>
										<p className="text-sm font-semibold text-gray-900">{notification.title}</p>
										<p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{notification.message}</p>
										<Flex align="center" gap="xs" className="mt-1">
											<ClockIcon size="xs" className="text-gray-400" />
											<span className="text-[11px] text-gray-400">{notification.time}</span>
										</Flex>
									</div>
								</Flex>
							</Link>
						))}
					</div>

					{/* Footer */}
					<Link
						href="/dashboard"
						onClick={() => setOpen(false)}
						className="block text-center py-3 text-sm font-medium text-[#3E50F7] hover:bg-gray-50 transition border-t border-gray-100"
					>
						View all notifications
					</Link>
				</div>
			)}
		</div>
	);
}
