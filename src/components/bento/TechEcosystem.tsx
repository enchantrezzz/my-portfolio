import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const skills: { label: string; items: string[] }[] = [
  {
    label: "Mobile & Web",
    items: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Go", "REST APIs", "GraphQL"],
  },
  {
    label: "AI / ML",
    items: ["Python", "TensorFlow", "Data Pipelines"],
  },
];

export const TechEcosystem: React.FC = () => {
  return (
    <Card id="skills" className="md:col-span-1 p-6 flex flex-col gap-5 min-h-[220px]">
      <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-3">
        <Layers className="h-4 w-4 text-zinc-400" aria-hidden="true" />
        <h2 className="text-base font-semibold text-white">Skills & Tools</h2>
      </div>

      <div className="space-y-4">
        {skills.map(({ label, items }) => (
          <div key={label}>
            <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
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
