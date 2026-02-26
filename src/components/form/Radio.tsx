import { InputHTMLAttributes } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export default function Radio({
  label,
  error,
  className = "",
  id,
  ...props
}: RadioProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          id={id}
          className={`h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {label && <span className="text-sm text-colors-primary">{label}</span>}
      </label>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}
