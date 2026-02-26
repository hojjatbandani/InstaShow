import Link from "next/link";
import Grid from "@/components/ui/Grid";
import IconBox from "@/components/ui/IconBox";
import DashboardCard from "./DashboardCard";
import SectionHeader from "./SectionHeader";
import type {QuickAccessGridProps} from "@/types/dashboard";

export default function QuickAccessGrid({items}: QuickAccessGridProps) {
	return (
		<DashboardCard className="mb-6">
			<SectionHeader title="Quick Access"/>
			<Grid cols={3} gap="sm">
				{items.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className="flex flex-col items-center justify-center gap-6 p-7 border border-gray-200 rounded-xl hover:shadow-lg transition"
					>
						<div className="p-1 rounded-2xl border border-gray-200">
							<IconBox size="md" variant="rounded" className={`${item.iconBg} shadow-lg`}>
								<item.icon size="lg" className="text-white"/>
							</IconBox>
						</div>

						<span className="text-sm font-medium text-gray-700">{item.label}</span>
					</Link>
				))}
			</Grid>
		</DashboardCard>
	);
}
