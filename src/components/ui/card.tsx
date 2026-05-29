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
      className={`relative overflow-hidden rounded-xl border border-[rgba(63,63,70,0.4)] bg-[rgba(24,24,27,0.4)] backdrop-blur-md transition-colors duration-300 hover:bg-[rgba(39,39,42,0.6)] ${className}`}
      {...props}
    >
      {/* Dynamic Radial Glow Layer */}
      {enableGlow && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
};
