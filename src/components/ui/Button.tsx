import React from "react";
import Link from "next/link";

interface ButtonProps {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "outline" | "none";
	size?: "sm" | "md" | "lg";
	href?: string;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
	weight?: "light" | "normal" | "bold" | "semiBold";
}

export default function Button({
																 children,
																 variant = "primary",
																 size = "md",
																 href,
																 onClick,
																 className = "",
																 type = "button",
																 weight = "normal",
															 }: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center transition-all duration-200 rounded-lg";

	const variants = {
		primary:
			"bg-gradient-to-r from-btn-primary-from to-btn-primary-to text-white hover:from-btn-primary-from hover:to-btn-primary-to transition",
		secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
		outline:
			"border border-black/10 bg-white text-black/75 hover:bg-black/[0.03]",
		none: "",
	};

	const sizes = {
		sm: "h-9 px-4 text-[12px]",
		md: "h-11 px-5 text-[13px]",
		lg: "h-12 px-6 text-[16px]",
	};

	const weightStyles = {
		light: "font-light",
		normal: "font-normal",
		bold: "font-bold",
		semiBold: "font-semibold",
	};

	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${weightStyles[weight]} ${className}`;

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}
