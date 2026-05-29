"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const timeline = [
  {
    icon: <Briefcase className="h-3 w-3" aria-hidden="true" />,
    iconColor: "text-emerald-400",
    iconBorder: "border-emerald-500/30",
    title: "Software Engineering Intern",
    org: "BITRI Botswana",
    badge: "Current",
    badgeClass: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
    description:
      "Working on real-world software projects at the Botswana Institute for Technology Research and Innovation, applying my CS knowledge in a professional research environment.",
  },
  {
    icon: <Trophy className="h-3 w-3" aria-hidden="true" />,
    iconColor: "text-amber-400",
    iconBorder: "border-amber-500/30",
    title: "Africa Digital ID Hackathon",
    org: "Continental Competition",
    badge: "Achievement",
    badgeClass: "border-amber-500/20 bg-amber-500/5 text-amber-400",
    description:
      "Competed in a major Africa-wide hackathon, building a digital identity solution for the health sector. Represented Botswana and gained experience working under pressure on a meaningful problem.",
  },
  {
    icon: <GraduationCap className="h-3 w-3" aria-hidden="true" />,
    iconColor: "text-blue-400",
    iconBorder: "border-blue-500/30",
    title: "BSc Computer Science & Software Engineering",
    org: "Undergraduate",
    badge: "In Progress",
    badgeClass: "border-blue-500/20 bg-blue-500/5 text-blue-400",
    description:
      "Studying the fundamentals of computing, software design, and engineering. Coursework spans algorithms, distributed systems, software architecture, and machine learning.",
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <Card id="experience" className="md:col-span-2 p-6 flex flex-col min-h-[300px]">
      <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-3">
        <h2 className="text-base font-semibold text-white">My Journey</h2>
      </div>

      <div className="relative mt-6 pl-8 border-l-2 border-zinc-800 space-y-8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/* Dot */}
            <div
              className={`absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border ${item.iconBorder} bg-zinc-950 ${item.iconColor}`}
            >
              {item.icon}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <span className="text-xs text-zinc-500">{item.org}</span>
                <Badge className={`text-[10px] ${item.badgeClass}`}>{item.badge}</Badge>
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
