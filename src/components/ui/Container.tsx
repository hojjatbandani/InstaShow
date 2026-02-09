import Image, {StaticImageData} from "next/image";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	size?: "sm" | "md" | "lg" | "xl" | "full";
	bgColor?: string;
	bgImage?: StaticImageData;
	withOverlay?: boolean;
	fullHeight?: boolean;
}

const sizeClasses = {
	sm: "max-w-3xl",
	md: "max-w-5xl",
	lg: "max-w-7xl",
	xl: "max-w-screen-xl",
	full: "max-w-full",
};

export default function Container({
																		children,
																		className = "",
																		size = "lg",
																		bgColor,
																		bgImage,
																		withOverlay = false,
																		fullHeight = false,
																	}: ContainerProps) {
	const hasBackground = bgColor || bgImage;

	if (hasBackground) {
		return (
			<div className={`relative ${fullHeight ? "min-h-screen" : ""}`}>
				{bgImage && (
					<div className="fixed inset-0 -z-10">
						<Image
							src={bgImage}
							alt=""
							fill
							className="object-cover"
							priority
						/>
						{withOverlay && (
							<div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"/>
						)}
					</div>
				)}
				{bgColor && !bgImage && (
					<div
						className="fixed top-0 left-0 right-0 bottom-0"
						style={{backgroundColor: bgColor, zIndex: -1}}
					/>
				)}
				<div
					className={`mx-auto ${sizeClasses[size]} px-4 sm:px-6 lg:px-4 xl:px-0 ${className}`}
				>
					{children}
				</div>
			</div>
		);
	}

	return (
		<div
			className={`mx-auto ${sizeClasses[size]} px-4 sm:px-6 lg:px-4 xl:px-0 ${className}`}
		>
			{children}
		</div>
	);
}
