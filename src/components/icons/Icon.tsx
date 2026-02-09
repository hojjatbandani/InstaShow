import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
	size?: number | string;
	className?: string;
}

export const iconSizes = {
	xs: 12,
	sm: 16,
	md: 20,
	lg: 24,
	xl: 28,
	"2xl": 32,
	"3xl": 40,
	"4xl": 48,
} as const;

export type IconSize = keyof typeof iconSizes;

export function getIconSize(size?: number | string | IconSize): number {
	if (typeof size === "number") return size;
	if (typeof size === "string" && size in iconSizes) {
		return iconSizes[size as IconSize];
	}
	return iconSizes.md; // default
}

export function createIcon(
	SvgContent: React.FC<React.SVGProps<SVGSVGElement>>,
	displayName: string
) {
	const IconComponent = ({
		size,
		className,
		...props
	}: IconProps) => {
		const resolvedSize = getIconSize(size);

		return (
			<SvgContent
				width={resolvedSize}
				height={resolvedSize}
				className={cn("shrink-0", className)}
				{...props}
			/>
		);
	};

	IconComponent.displayName = displayName;
	return IconComponent;
}
