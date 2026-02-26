import { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: string;
}

export default function Select({
  options,
  error,
  className = "",
  ...props
}: SelectProps) {
  return (
    <>
      <div className="relative">
        <select
          className={`w-full appearance-none border border-gray-300 rounded-md px-4 py-3 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-colors-muted pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </>
  );
}
