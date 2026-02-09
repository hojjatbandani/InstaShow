interface IconBoxProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "square" | "rounded" | "circle";
  bgColor?: string;
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

const variantClasses = {
  square: "rounded-none",
  rounded: "rounded-xl",
  circle: "rounded-full",
};

export default function IconBox({
  children,
  size = "lg",
  variant = "rounded",
  bgColor,
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`${sizeClasses[size]} ${variantClasses[variant]} flex items-center justify-center transition ${className}`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      {children}
    </div>
  );
}
