"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "digital-id",
    icon: <Trophy className="h-4 w-4 text-ctp-yellow" aria-hidden="true" />,
    iconBg: "border-ctp-yellow/20 bg-ctp-yellow/5",
    tag: "Hackathon",
    tagClass: "border-ctp-yellow/30 bg-ctp-yellow/10 text-ctp-yellow",
    title: "Africa Digital ID — Health Sector",
    subtitle: "Major Africa Digital ID Hackathon",
    description:
      "Contributed to the development of a digital Health records platform for Botswana that links a citizen's national ID to essential medical information, enabling rapid access during emergencies to improve service delivery in healthcare facilities. ",
    stack: ["React Native", "Node.js", "REST APIs", "Digital Identity", "MOSIP sandbox", "eSignet", "injiVerify"],
    highlight: "Placed 3rd place at a regional level (Southern Africa)",
  },
  {
    id: "health-system",
    icon: <Heart className="h-4 w-4 text-ctp-pink" aria-hidden="true" />,
    iconBg: "border-ctp-pink/20 bg-ctp-pink/5",
    tag: "Project",
    tagClass: "border-ctp-pink/30 bg-ctp-pink/10 text-ctp-pink",
    title: "Smart Health Monitoring System",
    subtitle: "Hospital-wide patient monitoring",
    description:
      "Designed and built a distributed system for real-time patient monitoring across an entire hospital network. Aggregates vitals and alerts from multiple wards into a unified dashboard for clinical staff.",
    stack: ["FastAPI", "RabbitMQ", "React", "Scikit-Learn", "Python", "Docker"],
    highlight: "Built to handle concurrent data streams from multiple wards.",
  },
];

export const FlagshipProject: React.FC = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <Card id="projects" className="md:col-span-2 row-span-2 p-6 flex flex-col min-h-[480px]">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-4">
        <h2 className="text-base font-semibold text-ctp-text">Projects</h2>
        <span className="text-xs text-ctp-overlay0">({projects.length})</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-4">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              active === i ? "text-ctp-text" : "text-ctp-overlay0 hover:text-ctp-subtext0"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="project-tab-bg"
                className="absolute inset-0 rounded-lg bg-ctp-surface0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{p.title.split("—")[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Project detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-6 flex-1 flex flex-col"
        >
          {/* Icon + title */}
          <div className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${project.iconBg}`}>
              {project.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-ctp-text">{project.title}</h3>
                <Badge className={`text-[10px] ${project.tagClass}`}>{project.tag}</Badge>
              </div>
              <p className="text-xs text-ctp-overlay0 mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm text-ctp-subtext0 leading-relaxed">
            {project.description}
          </p>

          {/* Highlight */}
          <div className="mt-4 flex items-start gap-2 rounded-lg border border-ctp-surface0 bg-ctp-crust/60 p-3">
            <ChevronRight className="h-3.5 w-3.5 text-ctp-mauve mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-xs text-ctp-subtext0">{project.highlight}</p>
          </div>

          {/* Stack badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
            className="mt-5 flex flex-wrap gap-1.5"
          >
            {project.stack.map((tech) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
                }}
              >
                <Badge>{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};
