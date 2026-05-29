"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "digital-id",
    icon: <Trophy className="h-4 w-4 text-amber-400" aria-hidden="true" />,
    iconBg: "border-amber-500/20 bg-amber-500/5",
    tag: "Hackathon",
    tagClass: "border-amber-500/20 bg-amber-500/5 text-amber-400",
    title: "Africa Digital ID — Health Sector",
    subtitle: "Major Africa Digital ID Hackathon",
    description:
      "Built a digital identity solution focused on the health sector as part of a major Africa-wide hackathon. The system links patient identities to health records, enabling secure, portable access to medical history across providers.",
    stack: ["React Native", "Node.js", "REST APIs", "Digital Identity"],
    highlight: "Competed at a continental level against teams across Africa.",
  },
  {
    id: "health-system",
    icon: <Heart className="h-4 w-4 text-rose-400" aria-hidden="true" />,
    iconBg: "border-rose-500/20 bg-rose-500/5",
    tag: "Project",
    tagClass: "border-rose-500/20 bg-rose-500/5 text-rose-400",
    title: "Distributed Hospital Monitoring System",
    subtitle: "Hospital-wide patient monitoring",
    description:
      "Designed and built a distributed system for real-time patient monitoring across an entire hospital network. Aggregates vitals and alerts from multiple wards into a unified dashboard for clinical staff.",
    stack: ["Distributed Systems", "Backend", "Real-time Data", "Healthcare"],
    highlight: "Built to handle concurrent data streams from multiple wards.",
  },
];

export const FlagshipProject: React.FC = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <Card
      id="projects"
      className="md:col-span-2 row-span-2 p-6 flex flex-col min-h-[480px]"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-4">
        <h2 className="text-base font-semibold text-white">Projects</h2>
        <span className="text-xs text-zinc-500 font-mono">({projects.length})</span>
      </div>

      {/* Project tabs */}
      <div className="flex gap-2 mt-4">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              active === i
                ? "bg-zinc-800 text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {p.title.split("—")[0].trim()}
          </button>
        ))}
      </div>

      {/* Project detail */}
      <div className="mt-6 flex-1 flex flex-col">
        {/* Icon + title */}
        <div className="flex items-start gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${project.iconBg}`}
          >
            {project.icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{project.title}</h3>
              <Badge className={`text-[10px] ${project.tagClass}`}>
                {project.tag}
              </Badge>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Highlight callout */}
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-zinc-800 bg-zinc-950/40 p-3">
          <ChevronRight
            className="h-3.5 w-3.5 text-zinc-500 mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-xs text-zinc-400">{project.highlight}</p>
        </div>

        {/* Stack */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
