import Flex from "@/components/ui/Flex";
import IconBox from "@/components/ui/IconBox";
import type { StatCardProps } from "@/types/dashboard";

export default function StatCard({ label, value, iconBg, icon: Icon }: StatCardProps) {
	return (
		<div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-5 hover:shadow-lg">
			<Flex align="center" justify="between">
				<div className="p-1 rounded-2xl border border-gray-200">
					<IconBox size="sm" variant="rounded" className={`${iconBg} shadow-lg`}>
						<Icon size="lg" className="text-white" />
					</IconBox>
				</div>
				<div className="text-center">
					<p className="text-xl sm:text-2xl font-bold text-colors-primary mb-1 sm:mb-4">{value}</p>
					<p className="text-xs sm:text-sm text-colors-primary mb-1 sm:mb-2">{label}</p>
				</div>
			</Flex>
		</div>
	);
}
