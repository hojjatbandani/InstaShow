interface BadgeProps {
  children: React.ReactNode;
  variant?: "none" | "default" | "primary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  none: "",
  default: "text-colors-primary bg-colors-category",
  primary: "text-white bg-gradient-to-r from-btn-primary-from to-btn-primary-to",
  outline: "text-[#2563EB] bg-[#EFF6FF] border border-[#2563EB]",
};

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-3 py-1",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-md ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
