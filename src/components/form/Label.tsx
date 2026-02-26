interface LabelProps {
	children: React.ReactNode;
	htmlFor?: string;
	required?: boolean;
	className?: string;
	textColor?: string;
}

export default function Label({
																children,
																htmlFor,
																required,
																className = "",
																textColor,
															}: LabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className={`text-sm mb-2 block ${textColor ?? "text-colors-primary"} ${className}`}
		>
			{children}
			{required && <span className="text-red-500 ml-1">*</span>}
		</label>
	);
}
