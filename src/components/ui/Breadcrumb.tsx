import Link from "next/link";

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav className="flex items-center gap-2 text-sm">
			{items.map((item, idx) => {
				const isLast = idx === items.length - 1;
				return (
					<span key={idx} className="flex items-center gap-2">
						{idx > 0 && <span className="text-colors-muted">&gt;</span>}
						{item.href && !isLast ? (
							<Link
								href={item.href}
								className="text-colors-muted hover:text-[#0077CC] transition"
							>
								{item.label}
							</Link>
						) : (
							<span
								className={
									isLast
										? "text-colors-primary font-medium"
										: "text-colors-muted"
								}
							>
								{item.label}
							</span>
						)}
					</span>
				);
			})}
		</nav>
	);
}
