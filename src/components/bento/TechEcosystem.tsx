import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C", "C++", "PHP"],
  },
  {
    label: "Web & Database",
    items: ["HTML", "CSS", "MySQL", "JDBC"],
  },
  {
    label: "Tools & Concepts",
    items: ["Git", "VS Code", "Figma", "OOP", "Machine Learning"],
  },
];

export const TechEcosystem: React.FC = () => {
  return (
    <Card id="skills" className="md:col-span-1 p-6 flex flex-col gap-5 min-h-[220px]">
      <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-3">
        <Layers className="h-4 w-4 text-ctp-lavender" aria-hidden="true" />
        <h2 className="text-base font-semibold text-ctp-text">Skills & Tools</h2>
      </div>

      <div className="space-y-4">
        {skills.map(({ label, items }) => (
          <div key={label}>
            <p className="text-[10px] uppercase tracking-wider text-ctp-overlay0 mb-2">
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
