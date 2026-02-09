interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

export default function FormGroup({ children, className = "" }: FormGroupProps) {
  return <div className={`flex flex-col gap-1 ${className}`}>{children}</div>;
}
