interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

export default function Label({
  children,
  htmlFor,
  required,
  className = "",
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-colors-primary text-sm mb-2 block ${className}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
