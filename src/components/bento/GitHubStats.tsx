"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { GitBranch, ExternalLink } from "lucide-react";

const stats = [
  { label: "Focus area", value: "Health Tech" },
  { label: "Currently", value: "Interning @ BITRI" },
  { label: "Open to", value: "Collaborations" },
];

export const GitHubStats: React.FC = () => {
  return (
    <Card id="github" className="md:col-span-1 p-6 flex flex-col justify-between min-h-[220px]">
      <div>
        <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-3">
          <GitBranch className="h-4 w-4 text-ctp-green" aria-hidden="true" />
          <h2 className="text-base font-semibold text-ctp-text">GitHub</h2>
        </div>

        <div className="mt-4 space-y-3">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center text-xs">
              <span className="text-ctp-overlay0">{label}</span>
              <span className="text-ctp-subtext1 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://github.com/enchantrezzz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-between rounded-lg border border-ctp-surface0 bg-ctp-crust/60 px-3 py-2.5 text-xs text-ctp-subtext0 transition-colors hover:border-ctp-surface1 hover:text-ctp-text"
      >
        <span>github.com/enchantrezzz</span>
        <ExternalLink className="h-3.5 w-3.5 text-ctp-overlay0" aria-hidden="true" />
      </a>
    </Card>
  );
};
