"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { DangerIcon } from "@/components/icons";
import Alert from "./Alert";
import type { ToastAlert } from "@/types/dashboard";

const TOAST_DURATION = 5000;

const sampleAlerts: Omit<ToastAlert, "id">[] = [
	{
		variant: "info",
		title: "New job request available",
		description: "A customer near your area is looking for plumbing services.",
		actionText: "View",
		actions: [
			{ label: "View request", href: "/dashboard/professional/jobs" },
			{ label: "Dismiss" },
		],
	},
	{
		variant: "success",
		title: "Payment received",
		description: "You received $350 for the Electrical Inspection job.",
		actionText: "Details",
		actions: [
			{ label: "View earnings", href: "/dashboard/professional/bookings" },
		],
	},
	{
		variant: "warning",
		title: "Profile incomplete",
		description: "Complete your profile to appear in search results.",
		actionText: "Update",
		actions: [
			{ label: "Complete profile", href: "/dashboard/professional/profile" },
			{ label: "Remind later" },
		],
	},
	{
		variant: "error",
		title: "Verification expired",
		description: "Your ID verification has expired. Please re-verify to continue.",
		actionText: "Re-verify",
		actions: [
			{ label: "Re-verify now", href: "/dashboard/professional/profile" },
			{ label: "Dismiss" },
		],
	},
];

export default function AlertsSection() {
	const [toasts, setToasts] = useState<ToastAlert[]>([]);
	const counterRef = useRef(0);
	const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

	const removeToast = useCallback((id: string) => {
		const timer = timersRef.current.get(id);
		if (timer) {
			clearTimeout(timer);
			timersRef.current.delete(id);
		}
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const showAllAlerts = useCallback(() => {
		sampleAlerts.forEach((alert, index) => {
			setTimeout(() => {
				const id = `toast-${++counterRef.current}`;
				const duration = alert.duration || TOAST_DURATION;

				setToasts((prev) => [...prev, { ...alert, id }]);

				const timer = setTimeout(() => removeToast(id), duration);
				timersRef.current.set(id, timer);
			}, index * 300);
		});
	}, [removeToast]);

	useEffect(() => {
		return () => {
			timersRef.current.forEach((timer) => clearTimeout(timer));
		};
	}, []);

	const handleMouseEnter = (id: string) => {
		const timer = timersRef.current.get(id);
		if (timer) {
			clearTimeout(timer);
			timersRef.current.delete(id);
		}
	};

	const handleMouseLeave = (id: string) => {
		const timer = setTimeout(() => removeToast(id), TOAST_DURATION);
		timersRef.current.set(id, timer);
	};

	return (
		<>
			{/* Trigger Button */}
			<button
				onClick={showAllAlerts}
				className="flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-sm transition"
			>
				<DangerIcon size={16} className="text-amber-500" />
				Show alerts
				{toasts.length > 0 && (
					<span className="min-w-[20px] h-5 flex items-center justify-center bg-red-500 text-white text-[11px] font-bold rounded-full px-1.5">
						{toasts.length}
					</span>
				)}
			</button>

			{/* Toast Container — fixed bottom-right */}
			{toasts.length > 0 && (
				<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 w-[min(420px,calc(100vw-2rem))] max-h-[calc(100vh-6rem)] overflow-y-auto lg:bottom-6 lg:right-6">
					{toasts.map((toast) => (
						<div
							key={toast.id}
							className="animate-slide-in-right shadow-lg rounded-xl"
							onMouseEnter={() => handleMouseEnter(toast.id)}
							onMouseLeave={() => handleMouseLeave(toast.id)}
						>
							<Alert
								variant={toast.variant}
								title={toast.title}
								description={toast.description}
								actionText={toast.actionText}
								actions={toast.actions?.map((action) => ({
									...action,
									onClick:
										action.label === "Dismiss" || action.label === "Remind later"
											? () => removeToast(toast.id)
											: action.onClick,
								}))}
								onClose={() => removeToast(toast.id)}
							/>
						</div>
					))}
				</div>
			)}
		</>
	);
}
