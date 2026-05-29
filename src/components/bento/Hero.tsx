"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <Card
      id="hero"
      className="col-span-1 md:col-span-3 p-8 flex flex-col justify-between min-h-[280px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Main intro */}
        <div className="max-w-2xl">
          <p className="text-sm font-mono text-zinc-500 mb-3">Hey, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Pako Jack Motsumi
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed">
            CS & Software Engineering undergrad with a passion for building things that matter —
            from mobile apps to backend systems to AI-powered solutions.
          </p>
        </div>

        {/* Status pills */}
        <div className="flex flex-col gap-2 shrink-0">
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Interning @ BITRI Botswana
          </div>
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            CS & Software Engineering
          </div>
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Botswana
          </div>
        </div>
      </div>

      {/* Interest tags */}
      <div className="mt-8 flex flex-wrap gap-2 border-t border-zinc-800/60 pt-6">
        {[
          "Mobile Development",
          "Web Development",
          "Backend Engineering",
          "AI / ML",
        ].map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-400"
          >
            {interest}
          </span>
        ))}
      </div>
    </Card>
  );
};
