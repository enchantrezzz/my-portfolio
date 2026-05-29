"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useMouseGlow } from "@/lib/hooks/useMouseGlow";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  enableGlow = true,
  ...props
}) => {
  const { ref, coords, isHovered } = useMouseGlow();

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`relative overflow-hidden rounded-xl border border-ctp-surface0 bg-ctp-mantle backdrop-blur-md transition-colors duration-300 hover:bg-ctp-surface0/60 ${className}`}
      {...props}
    >
      {enableGlow && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--ctp-mauve) 8%, transparent), transparent 80%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
};
