export interface GitHubProfile {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

const USERNAME = "enchantrezzz";
const BASE = "https://api.github.com";

async function ghFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Accept: "application/vnd.github+json" },
    // Revalidate once per hour — served from cache instantly between refreshes
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} on ${path}`);
  }

  return res.json() as Promise<T>;
}

export async function getGitHubData(): Promise<{
  profile: GitHubProfile;
  repos: GitHubRepo[];
}> {
  const [profile, allRepos] = await Promise.all([
    ghFetch<GitHubProfile>(`/users/${USERNAME}`),
    ghFetch<GitHubRepo[]>(`/users/${USERNAME}/repos?per_page=100&sort=updated`),
  ]);

  // Exclude forks, sort by last updated
  const repos = allRepos
    .filter((r) => !r.fork)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 4);

  return { profile, repos };
}
