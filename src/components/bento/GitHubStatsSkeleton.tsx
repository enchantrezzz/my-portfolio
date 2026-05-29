import React from "react";

// Shown while the async GitHubStats server component is loading
export function GitHubStatsSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-ctp-surface0 bg-ctp-mantle p-6 flex flex-col gap-5 min-h-[220px] animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-3">
        <div className="h-4 w-4 rounded bg-ctp-surface1" />
        <div className="h-4 w-16 rounded bg-ctp-surface1" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center rounded-lg border border-ctp-surface0 bg-ctp-crust/60 py-2.5 px-1 gap-1">
            <div className="h-3 w-3 rounded bg-ctp-surface1" />
            <div className="h-5 w-6 rounded bg-ctp-surface1" />
            <div className="h-2 w-8 rounded bg-ctp-surface0" />
          </div>
        ))}
      </div>

      {/* Repo rows */}
      <div className="space-y-2">
        <div className="h-2.5 w-20 rounded bg-ctp-surface0" />
        {[0, 1].map((i) => (
          <div key={i} className="h-8 rounded-lg border border-ctp-surface0 bg-ctp-crust/40" />
        ))}
      </div>
    </div>
  );
}
