import { type IconProps } from "@/components/icons";

// Common
export type UserType = "customer" | "professional";

// DashboardCard
export interface DashboardCardProps {
	children: React.ReactNode;
	className?: string;
}

// SectionHeader
export interface SectionHeaderProps {
	title: string;
	linkText?: string;
	linkHref?: string;
	type?: "Link" | "Button";
}

// WelcomeHeader
export interface WelcomeHeaderProps {
	name: string;
	actionLabel: string;
	actionHref: string;
	actionIcon: React.FC<IconProps>;
}

// QuickAccessGrid
export interface QuickAccessItem {
	label: string;
	href: string;
	icon: React.FC<IconProps>;
	iconBg: string;
}

export interface QuickAccessGridProps {
	items: QuickAccessItem[];
}

// StatCard
export interface StatCardProps {
	label: string;
	value: string;
	subtitle: string;
	iconBg: string;
	icon: React.FC<IconProps>;
	extra?: React.ReactNode;
}

// StarRating
export interface StarRatingProps {
	count?: number;
}

// RoleCard
export interface RoleCardProps {
	href: string;
	title: string;
	description: string;
	icon: React.FC<IconProps>;
	iconBg: string;
	iconHoverBg: string;
	iconColor: string;
}

// Alert
export type AlertVariant = "info" | "warning" | "success" | "error" | "neutral";

export interface AlertAction {
	label: string;
	onClick?: () => void;
	href?: string;
}

export interface AlertProps {
	variant?: AlertVariant;
	title: string;
	description?: string;
	actions?: AlertAction[];
	actionText?: string;
	onActionClick?: () => void;
	onClose?: () => void;
	className?: string;
}

// Toast Alert
export interface ToastAlert {
	id: string;
	variant: AlertVariant;
	title: string;
	description?: string;
	actions?: AlertAction[];
	actionText?: string;
	duration?: number;
}

// NotificationDropdown
export interface Notification {
	id: string;
	title: string;
	message: string;
	time: string;
	read: boolean;
	href: string;
}
