import React from "react";
import { Card } from "@/components/ui/card";
import { GitBranch, ExternalLink, Star, GitFork, Users, BookMarked } from "lucide-react";
import { getGitHubData } from "@/lib/github";

// Language → Catppuccin accent colour
const langColor: Record<string, string> = {
  TypeScript:  "text-ctp-blue",
  JavaScript:  "text-ctp-yellow",
  Python:      "text-ctp-green",
  Go:          "text-ctp-teal",
  Rust:        "text-ctp-peach",
  Java:        "text-ctp-red",
  "C++":       "text-ctp-mauve",
  C:           "text-ctp-lavender",
  HTML:        "text-ctp-peach",
  CSS:         "text-ctp-pink",
  Dart:        "text-ctp-sky",
};

function langDot(lang: string | null) {
  return lang ? (langColor[lang] ?? "text-ctp-overlay1") : "text-ctp-overlay0";
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export async function GitHubStats() {
  const { profile, repos } = await getGitHubData();

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);

  return (
    <Card id="github" className="md:col-span-2 p-6 flex flex-col gap-5 min-h-[220px] h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ctp-surface0 pb-3">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-ctp-green" aria-hidden="true" />
          <h2 className="text-base font-semibold text-ctp-text">GitHub</h2>
        </div>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
          className="rounded-md text-ctp-overlay0 transition-colors hover:text-ctp-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ctp-green/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-base"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <BookMarked className="h-3.5 w-3.5" aria-hidden="true" />, value: profile.public_repos, label: "Repos" },
          { icon: <Users       className="h-3.5 w-3.5" aria-hidden="true" />, value: profile.followers,    label: "Followers" },
          { icon: <Star        className="h-3.5 w-3.5" aria-hidden="true" />, value: totalStars,           label: "Stars" },
        ].map(({ icon, value, label }) => (
          <div key={label} className="flex flex-col items-center rounded-lg border border-ctp-surface0 bg-ctp-crust/60 py-2.5 px-1">
            <span className="text-ctp-overlay1 mb-1">{icon}</span>
            <span className="text-base font-bold text-ctp-text">{value}</span>
            <span className="text-[9px] text-ctp-overlay0 mt-0.5">{label}</span>
          </div>
        ))}
      </div>

      {/* Recent repos */}
      {repos.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-ctp-overlay0">Recent repos</p>
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 rounded-lg border border-ctp-surface0 bg-ctp-crust/40 px-3 py-2.5 text-xs transition-colors hover:border-ctp-surface1 hover:bg-ctp-surface0/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ctp-lavender/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-base"
            >
              {/* Name row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`text-lg leading-none shrink-0 ${langDot(repo.language)}`} aria-hidden="true">●</span>
                  <span className="text-ctp-subtext1 group-hover:text-ctp-text transition-colors truncate font-medium">
                    {repo.name}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 shrink-0 ml-2 text-ctp-overlay0">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-0.5">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-0.5">
                      <GitFork className="h-3 w-3" aria-hidden="true" />
                      {repo.forks_count}
                    </span>
                  )}
                  <span className="text-[10px]">{timeAgo(repo.updated_at)}</span>
                </div>
              </div>
              {/* Description */}
              {repo.description && (
                <p className="text-[10px] text-ctp-overlay0 pl-5 leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              )}
            </a>
          ))}
        </div>
      )}

      <p className="text-[10px] text-ctp-overlay0 mt-auto">
        @{profile.login} · refreshes every 2 minutes
      </p>
    </Card>
  );
}
