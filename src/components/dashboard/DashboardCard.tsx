import Card from "@/components/ui/Card";
import type { DashboardCardProps } from "@/types/dashboard";

export default function DashboardCard({ children, className = "" }: DashboardCardProps) {
	return (
		<Card border className={`bg-white rounded-xl !p-6 ${className}`}>
			{children}
		</Card>
	);
}
