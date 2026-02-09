import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  shadow?: boolean;
  border?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  shadow = false,
  border = false,
}: CardProps) {
  const hoverClass = hover
    ? "hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.2)] hover:-translate-y-1"
    : "";
  const shadowClass = shadow
    ? "shadow-lg shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)]"
    : "";
  const borderClass = border ? "border border-black/10" : "";

  return (
    <div
      className={`rounded-2xl p-6 ${hoverClass} ${shadowClass} ${borderClass} ${className}`}
    >
      {children}
    </div>
  );
}
