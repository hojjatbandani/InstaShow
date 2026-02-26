"use client";

import Link from "next/link";
import {
	InfoCircleIcon,
	DangerIcon,
	CheckCircleIcon,
	StarFilledIcon,
	CloseIcon,
	SettingsIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import type { AlertProps, AlertVariant } from "@/types/dashboard";

const variantStyles: Record<AlertVariant, { bg: string; border: string; iconColor: string; titleColor: string; textColor: string }> = {
	info: {
		bg: "bg-blue-50",
		border: "border-blue-200",
		iconColor: "text-blue-600",
		titleColor: "text-blue-900",
		textColor: "text-blue-700",
	},
	warning: {
		bg: "bg-amber-50",
		border: "border-amber-200",
		iconColor: "text-amber-600",
		titleColor: "text-amber-900",
		textColor: "text-amber-700",
	},
	success: {
		bg: "bg-green-50",
		border: "border-green-200",
		iconColor: "text-green-600",
		titleColor: "text-green-900",
		textColor: "text-green-700",
	},
	error: {
		bg: "bg-red-50",
		border: "border-red-200",
		iconColor: "text-red-600",
		titleColor: "text-red-900",
		textColor: "text-red-700",
	},
	neutral: {
		bg: "bg-gray-50",
		border: "border-gray-200",
		iconColor: "text-gray-700",
		titleColor: "text-gray-900",
		textColor: "text-gray-600",
	},
};

const variantIcons: Record<AlertVariant, React.FC<{ className?: string; size?: string | number }>> = {
	info: InfoCircleIcon,
	warning: DangerIcon,
	success: CheckCircleIcon,
	error: InfoCircleIcon,
	neutral: StarFilledIcon,
};

export default function Alert({
	variant = "info",
	title,
	description,
	actions,
	actionText,
	onActionClick,
	onClose,
	className = "",
}: AlertProps) {
	const styles = variantStyles[variant];
	const Icon = variantIcons[variant];

	return (
		<div className={`${styles.bg} border ${styles.border} rounded-xl p-4 ${className}`}>
			<Flex align="start" justify="between" gap="sm">
				{/* Left: icon + content */}
				<Flex align="start" gap="sm" className="flex-1 min-w-0">
					<Icon size={20} className={`${styles.iconColor} shrink-0 mt-0.5`} />
					<div className="min-w-0 flex-1">
						<p className={`text-sm font-semibold ${styles.titleColor}`}>{title}</p>
						{description && (
							<p className={`text-sm ${styles.textColor} mt-0.5`}>{description}</p>
						)}
						{actions && actions.length > 0 && (
							<Flex gap="md" className="mt-3">
								{actions.map((action) =>
									action.href ? (
										<Link
											key={action.label}
											href={action.href}
											className={`text-sm font-medium ${styles.titleColor} underline underline-offset-2 hover:opacity-80 transition`}
										>
											{action.label}
										</Link>
									) : (
										<button
											key={action.label}
											onClick={action.onClick}
											className={`text-sm font-medium ${styles.titleColor} underline underline-offset-2 hover:opacity-80 transition`}
										>
											{action.label}
										</button>
									)
								)}
							</Flex>
						)}
					</div>
				</Flex>

				{/* Right: action text + settings + close */}
				<Flex align="center" gap="sm" className="shrink-0">
					{actionText && (
						<button
							onClick={onActionClick}
							className={`text-sm font-medium ${styles.titleColor} hover:opacity-80 transition hidden sm:block`}
						>
							{actionText}
						</button>
					)}
					{onActionClick && (
						<button
							onClick={onActionClick}
							className={`p-1 ${styles.textColor} hover:opacity-80 transition rounded`}
						>
							<SettingsIcon size={16} />
						</button>
					)}
					{onClose && (
						<button
							onClick={onClose}
							className={`p-1 ${styles.textColor} hover:opacity-80 transition rounded`}
						>
							<CloseIcon size={16} />
						</button>
					)}
				</Flex>
			</Flex>
		</div>
	);
}
