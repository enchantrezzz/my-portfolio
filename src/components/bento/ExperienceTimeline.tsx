"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const timeline = [
  {
    icon: <Briefcase className="h-3 w-3" aria-hidden="true" />,
    iconColor: "text-ctp-green",
    iconBorder: "border-ctp-green/30",
    dotBg: "bg-ctp-green/10",
    title: "Software Engineering Intern",
    org: "BITRI Botswana",
    badge: "Current",
    badgeClass: "border-ctp-green/30 bg-ctp-green/10 text-ctp-green",
    description:
      "Working on real-world software projects at the Botswana Institute for Technology Research and Innovation, applying my CS knowledge in a professional research environment.",
  },
  {
    icon: <Trophy className="h-3 w-3" aria-hidden="true" />,
    iconColor: "text-ctp-yellow",
    iconBorder: "border-ctp-yellow/30",
    dotBg: "bg-ctp-yellow/10",
    title: "Africa Digital ID Hackathon",
    org: "Continental Competition",
    badge: "Achievement",
    badgeClass: "border-ctp-yellow/30 bg-ctp-yellow/10 text-ctp-yellow",
    description:
      "Competed in a major Africa-wide hackathon, building a digital identity solution for the health sector. Represented Botswana and gained experience working under pressure on a meaningful problem.",
  },
  {
    icon: <GraduationCap className="h-3 w-3" aria-hidden="true" />,
    iconColor: "text-ctp-blue",
    iconBorder: "border-ctp-blue/30",
    dotBg: "bg-ctp-blue/10",
    title: "BSc Computer Science & Software Engineering",
    org: "Undergraduate",
    badge: "In Progress",
    badgeClass: "border-ctp-blue/30 bg-ctp-blue/10 text-ctp-blue",
    description:
      "Studying the fundamentals of computing, software design, and engineering. Coursework spans algorithms, distributed systems, software architecture, and machine learning.",
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <Card id="experience" className="md:col-span-2 p-6 flex flex-col min-h-[300px]">
      <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-3">
        <h2 className="text-base font-semibold text-ctp-text">My Journey</h2>
      </div>

      <div className="relative mt-6 pl-8 border-l-2 border-ctp-surface0 space-y-8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/* Timeline dot */}
            <div
              className={`absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border ${item.iconBorder} ${item.dotBg} ${item.iconColor}`}
            >
              {item.icon}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-sm font-semibold text-ctp-text">{item.title}</h3>
                <span className="text-xs text-ctp-overlay0">{item.org}</span>
                <Badge className={`text-[10px] ${item.badgeClass}`}>{item.badge}</Badge>
              </div>
              <p className="mt-2 text-xs text-ctp-subtext0 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
