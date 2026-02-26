interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export default function FormGroup({
  children,
  className = "",
  width,
}: FormGroupProps) {
  return (
    <div
      className={`flex flex-col gap-1 ${className} ${width ? `w-${width}` : ""}`}
    >
      {children}
    </div>
  );
}
