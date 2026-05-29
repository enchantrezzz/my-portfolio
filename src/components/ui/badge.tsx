import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-2.5 py-0.5 text-xs font-mono font-medium text-zinc-300 transition-colors hover:border-[rgba(255,255,255,0.2)] hover:text-white ${className}`}
    >
      {children}
    </span>
  );
};
