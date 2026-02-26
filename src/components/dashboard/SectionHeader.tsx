import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import Flex from "@/components/ui/Flex";
import type { SectionHeaderProps } from "@/types/dashboard";
import {Button} from "@/components/ui";

export default function SectionHeader({ title, linkText, linkHref, type = "Link" }: SectionHeaderProps) {
	return (
		<Flex align="center" justify="between" className="mb-8">
			<h2 className="text-[20px] font-semibold text-colors-primary">{title}</h2>
			{linkText && linkHref && type == "Link" && (
				<Link
					href={linkHref}
					className="text-sm text-[#3E50F7] hover:underline flex items-center gap-1"
				>
					{linkText}
					<ArrowRightIcon size="sm" />
				</Link>
			)}
			{linkText && linkHref && type == "Button" && (
				<Button href={linkHref} variant="primary">
					{linkText}
				</Button>
			)}
		</Flex>
	);
}
