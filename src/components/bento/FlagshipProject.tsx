"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart, ChevronRight, BookOpen, Monitor, ShoppingBag, Car } from "lucide-react";

type Project = {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  tag: string;
  tagClass: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  highlight: string;
};

const featured: Project[] = [
  {
    id: "digital-id",
    icon: <Trophy className="h-4 w-4 text-ctp-yellow" aria-hidden="true" />,
    iconBg: "border-ctp-yellow/20 bg-ctp-yellow/5",
    tag: "Hackathon · 3rd Place",
    tagClass: "border-ctp-yellow/30 bg-ctp-yellow/10 text-ctp-yellow",
    title: "Africa Digital ID — Health Sector",
    subtitle: "Major Africa Digital ID Hackathon",
    description:
      "Contributed to a digital health records platform for Botswana that links a citizen's national ID to essential medical information, enabling rapid access during emergencies to improve service delivery in healthcare facilities.",
    stack: ["React Native", "Node.js", "REST APIs", "MOSIP sandbox", "eSignet", "injiVerify"],
    highlight: "Placed 3rd at a regional level (Southern Africa).",
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

const academic: Project[] = [
  {
    id: "visitor-system",
    icon: <Monitor className="h-4 w-4 text-ctp-blue" aria-hidden="true" />,
    iconBg: "border-ctp-blue/20 bg-ctp-blue/5",
    tag: "Coursework",
    tagClass: "border-ctp-blue/30 bg-ctp-blue/10 text-ctp-blue",
    title: "Smart Visitor Registration System",
    subtitle: "University Coursework",
    description:
      "GUI-based application to manage visitor registration, check-ins, and attendance within a company. Applied OOP principles with a modular architecture across models, database access objects, and frontend views.",
    stack: ["Java", "MySQL", "JDBC", "Java Swing"],
    highlight: "Integrated MySQL for persistent data storage with full input validation.",
  },
  {
    id: "garage-system",
    icon: <Car className="h-4 w-4 text-ctp-teal" aria-hidden="true" />,
    iconBg: "border-ctp-teal/20 bg-ctp-teal/5",
    tag: "Coursework",
    tagClass: "border-ctp-teal/30 bg-ctp-teal/10 text-ctp-teal",
    title: "Garage Management System",
    subtitle: "University Coursework",
    description:
      "Console-based system to manage customer records, vehicle inventory, and invoices. Applied OOP principles including encapsulation, modular design, and class-based architecture.",
    stack: ["C++", "OOP", "File I/O"],
    highlight: "Implemented input validation and error handling for system reliability.",
  },
  {
    id: "ecommerce-ui",
    icon: <ShoppingBag className="h-4 w-4 text-ctp-peach" aria-hidden="true" />,
    iconBg: "border-ctp-peach/20 bg-ctp-peach/5",
    tag: "Group Project",
    tagClass: "border-ctp-peach/30 bg-ctp-peach/10 text-ctp-peach",
    title: "E-commerce Platform UI/UX",
    subtitle: "Group Project",
    description:
      "Assisted in the design of a student-focused online marketplace. Focused on usability, layout consistency, and user-friendly design principles. Collaborated with teammates to align design decisions with functional requirements.",
    stack: ["Figma", "HTML", "CSS", "PHP"],
    highlight: "Designed with usability and layout consistency as core principles.",
  },
];

type Tab = "featured" | "academic";

export const FlagshipProject: React.FC = () => {
  const [tab, setTab] = useState<Tab>("featured");
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = tab === "featured" ? featured : academic;
  const project = projects[activeIndex];

  const handleTabSwitch = (newTab: Tab) => {
    setTab(newTab);
    setActiveIndex(0);
  };

  return (
    <Card id="projects" className="md:col-span-2 row-span-2 p-6 flex flex-col min-h-[480px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ctp-surface0 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-ctp-text">Projects</h2>
          <span className="text-xs text-ctp-overlay0">
            ({featured.length + academic.length} total)
          </span>
        </div>

        {/* Featured / Academic toggle */}
        <div className="flex rounded-lg bg-ctp-crust p-1 border border-ctp-surface0">
          {(["featured", "academic"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => handleTabSwitch(t)}
              className={`relative rounded-md px-3 py-1 text-xs font-medium transition-colors capitalize ${
                tab === t ? "text-ctp-text" : "text-ctp-overlay0 hover:text-ctp-subtext0"
              }`}
            >
              {tab === t && (
                <motion.span
                  layoutId="section-tab-bg"
                  className="absolute inset-0 rounded-md bg-ctp-surface0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                {t === "academic" && <BookOpen className="h-3 w-3" aria-hidden="true" />}
                {t}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Project sub-tabs */}
      <div className="flex gap-1 mt-4 flex-wrap">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActiveIndex(i)}
            className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              activeIndex === i ? "text-ctp-text" : "text-ctp-overlay0 hover:text-ctp-subtext0"
            }`}
          >
            {activeIndex === i && (
              <motion.span
                layoutId="project-tab-bg"
                className="absolute inset-0 rounded-lg bg-ctp-surface0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">
              {p.title.split("—")[0].split("System")[0].trim()}
            </span>
          </button>
        ))}
      </div>

      {/* Project detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${tab}-${project.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
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
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
            }}
            className="mt-5 flex flex-wrap gap-1.5"
          >
            {project.stack.map((tech) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.18 } },
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
