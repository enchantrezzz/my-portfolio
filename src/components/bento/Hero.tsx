"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap } from "lucide-react";

const interests = [
  "Mobile Development",
  "Web Development",
  "Backend Engineering",
  "AI / ML",
];

const statusItems = [
  {
    icon: (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
    ),
    label: "Intern at Botswana Institute for Research and Innovation (BITRI)",
  },
  {
    icon: <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />,
    label: "CS & Software Engineering",
  },
  {
    icon: <MapPin className="h-3.5 w-3.5" aria-hidden="true" />,
    label: "Botswana",
  },
];

export const Hero: React.FC = () => {
  return (
    <Card id="hero" className="col-span-1 md:col-span-3 p-8 flex flex-col justify-between min-h-[280px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Main intro */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm font-mono text-zinc-500 mb-3"
          >
            Hey, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Pako Jack Motsumi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed"
          >
            CS & Software Engineering undergrad with a passion for building things that matter —
            from mobile apps to backend systems to AI-powered solutions.
          </motion.p>
        </div>

        {/* Status pills */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-2 shrink-0"
        >
          {statusItems.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400"
            >
              {icon}
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interest tags — staggered */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } },
        }}
        className="mt-8 flex flex-wrap gap-2 border-t border-zinc-800/60 pt-6"
      >
        {interests.map((interest) => (
          <motion.span
            key={interest}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-400"
          >
            {interest}
          </motion.span>
        ))}
      </motion.div>
    </Card>
  );
};
