import Link from "next/link";
import IconBox from "@/components/ui/IconBox";
import Flex from "@/components/ui/Flex";
import type { RoleCardProps } from "@/types/dashboard";

export default function RoleCard({ href, title, description, icon: Icon, iconBg, iconHoverBg, iconColor }: RoleCardProps) {
	return (
		<Link
			href={href}
			className="group flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#3E50F7] hover:shadow-lg transition"
		>
			<IconBox size="xl" variant="rounded" className={`${iconBg} ${iconHoverBg}`}>
				<Icon size="3xl" className={iconColor} />
			</IconBox>
			<Flex direction="col" align="center" gap="xs">
				<h2 className="text-lg font-bold text-gray-900">{title}</h2>
				<p className="text-sm text-gray-500">{description}</p>
			</Flex>
		</Link>
	);
}
