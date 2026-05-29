import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ctp-surface1 bg-ctp-surface0/60 px-2.5 py-0.5 text-xs font-medium text-ctp-subtext1 transition-colors hover:border-ctp-surface2 hover:text-ctp-text ${className}`}
    >
      {children}
    </span>
  );
};
