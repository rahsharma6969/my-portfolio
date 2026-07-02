// TypeScript interfaces describe the *shape* of data.
// Once defined, TS will error at compile-time if a Project object
// is missing a field or has the wrong type — catching bugs before runtime.

export interface Project {
  id: string;          // used in the URL, e.g. /projects/expense-tracker
  title: string;
  tagline: string;      // one-line summary shown on cards
  description: string;  // longer description shown on detail page
  stack: string[];
  role: string;
  highlights: string[]; // bullet points of what you built/solved
  githubUrl?: string;    // optional field (the `?`) — not every project has one
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  // A "union type" — `category` can ONLY ever be one of these exact strings.
  // Typo "fronted" instead of "frontend" anywhere else in the app? TS catches
  // it immediately, instead of it silently failing to render at runtime.
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'ai-ml' | 'tools';
  level: 1 | 2 | 3 | 4 | 5;
}

// Only the fields of GitHub's API response we actually use. You don't need
// to type EVERY field the API returns — just the ones your code touches.
export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}
