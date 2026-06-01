import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Compass, Flame, BookOpen } from "lucide-react";

const skills: { label: string; icon: React.ReactNode; items: string[] }[] = [
  {
    label: "Skills & Tools",
    icon: <Layers className="h-3 w-3" aria-hidden="true" />,
    items: ["Python", "Java", "C++", "MySQL", "Git", "Figma", "FastAPI", "React", "Docker", "Typescript", "Firebase SDK", "Supabase"],
  },
  {
    label: "Exploring",
    icon: <Compass className="h-3 w-3" aria-hidden="true" />,
    items: ["Docker", "React", "Javascript"],
  },
  {
    label: "Areas of Interest",
    icon: <Flame className="h-3 w-3" aria-hidden="true" />,
    items: ["Mobile App Development", "Web App Development", "DevOps"],
  },
  {
    label: "Coursework Highlights",
    icon: <BookOpen className="h-3 w-3" aria-hidden="true" />,
    items: ["Distributed Systems", "OOP", "DSA", "Operating Systems", "Computer Architecture"],
  },
];

export const TechEcosystem: React.FC = () => {
  return (
    <Card id="skills" className="md:col-span-1 p-6 flex flex-col gap-5 min-h-[220px] h-full">
      <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-3">
        <Layers className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />
        <h2 className="text-base font-semibold text-ctp-text">Skills</h2>
      </div>

      <div className="space-y-5">
        {skills.map(({ label, icon, items }) => (
          <div key={label}>
            <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-ctp-overlay0 mb-2">
              {icon}
              {label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <div key={item} className="hover:scale-105 transition-transform duration-150">
                  <Badge>{item}</Badge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
