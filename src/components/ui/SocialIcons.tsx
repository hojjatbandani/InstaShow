import React from "react";
import Link from "next/link";
interface SocialIconsProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
}

export default function SocialIcons({
  children,
  className = "",
  href,
}: SocialIconsProps) {
  const baseStyles = "inline-flex items-center justify-center";
  const classes = `${baseStyles} ${className}`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
