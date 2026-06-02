"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap } from "lucide-react";

const interests = [
  "Backend Development",
  "Web Development",
  "Mobile Development",
  "AI / ML",
];

const statusItems = [
  {
    icon: (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ctp-green opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-ctp-green" />
      </span>
    ),
    label: "Intern @ BITRI Botswana",
  },
  {
    icon: <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />,
    label: "CS & Software Engineering · BIUST",
  },
  {
    icon: <MapPin className="h-3.5 w-3.5" aria-hidden="true" />,
    label: "Palapye, Botswana",
  },
];

const trustSignals = [
  "3rd Place · Africa Digital ID Hackathon",
  "Software Engineering Intern · BITRI",
  "Open to Remote SWE Opportunities",
];

export const Hero: React.FC = () => {
  return (
    <Card id="hero" className="col-span-1 md:col-span-3 p-8 flex flex-col justify-between min-h-[280px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">

        {/* Left: photo + intro */}
        <div className="flex items-start gap-5 flex-1 min-w-0">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="shrink-0"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-ctp-mauve/40 shadow-lg shadow-ctp-mauve/10">
              <img
                src="/profile.jpg"
                alt="Pako Jack Motsumi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm text-ctp-overlay1 mb-2"
            >
              Hey, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-ctp-text"
            >
              Pako Jack{" "}
              <span className="text-ctp-mauve">Motsumi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-3 text-sm md:text-base text-ctp-subtext0 leading-relaxed max-w-xl"
            >
              Computer Science & Software Engineering undergrad with hands-on experience
              in software development, OOP, and database management. Eager to build
              things that matter and grow in a professional environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-md border border-ctp-mauve/35 bg-ctp-mauve/15 px-3 py-1.5 text-xs font-medium text-ctp-mauve transition-colors hover:border-ctp-mauve/60 hover:bg-ctp-mauve/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ctp-mauve/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-base"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Pako_Motsumi_CV.pdf"
                className="inline-flex items-center rounded-md border border-ctp-surface1 bg-ctp-surface0/45 px-3 py-1.5 text-xs font-medium text-ctp-subtext0 transition-colors hover:border-ctp-surface2 hover:text-ctp-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ctp-lavender/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-base"
              >
                Download CV
              </a>
              <a
                href="mailto:pjmotsumi06@gmail.com"
                className="inline-flex items-center rounded-md border border-ctp-surface1 bg-ctp-surface0/45 px-3 py-1.5 text-xs font-medium text-ctp-subtext0 transition-colors hover:border-ctp-surface2 hover:text-ctp-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ctp-lavender/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-base"
              >
                Email Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.58 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-ctp-surface1 bg-ctp-surface0/45 px-3 py-1 text-[11px] text-ctp-subtext0"
                >
                  {signal}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Status pills */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col gap-2 shrink-0"
        >
          {statusItems.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-ctp-surface1 bg-ctp-surface0/40 px-3 py-1.5 text-xs text-ctp-subtext0"
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
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.6 } },
        }}
        className="mt-8 flex flex-wrap gap-2 border-t border-ctp-surface0 pt-6"
      >
        {interests.map((interest) => (
          <motion.span
            key={interest}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="rounded-full border border-ctp-surface1 bg-ctp-surface0/40 px-3 py-1 text-xs text-ctp-subtext1"
          >
            {interest}
          </motion.span>
        ))}
      </motion.div>
    </Card>
  );
};
