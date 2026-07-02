import { useFetch } from '../hooks/useFetch';
import type { GithubRepo } from '../data/types';

const GITHUB_USERNAME = 'rahsharma6969';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;

function timeAgo(dateStr: string): string {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86_400_000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export default function GithubRepos() {
  const state = useFetch<GithubRepo[]>(API_URL);

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-2xl font-bold text-text-bright">Live from GitHub</h2>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-accent hover:underline"
        >
          @{GITHUB_USERNAME} →
        </a>
      </div>

      {/* Every branch of `state.status` is handled explicitly — there's no
          "in-between" render where the UI shows nothing or stale content. */}
      {state.status === 'loading' && (
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Skeleton placeholders instead of a spinner — feels faster and
              prevents layout shift once real content arrives. */}
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="h-24 animate-pulse rounded-lg border border-border bg-surface" />
          ))}
        </div>
      )}

      {state.status === 'error' && (
        <p className="rounded-lg border border-border bg-surface p-4 font-mono text-sm text-warn">
          $ error: {state.error}
        </p>
      )}

      {state.status === 'success' && (
        <div className="grid gap-4 sm:grid-cols-2">
          {state.data
            .filter((repo) => !repo.fork)
            .slice(0, 4)
            .map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-text-bright">{repo.name}</h3>
                  <span className="font-mono text-xs text-text">★ {repo.stargazers_count}</span>
                </div>
                <p className="mb-3 text-sm">{repo.description ?? 'No description provided.'}</p>
                <div className="flex items-center gap-3 font-mono text-xs text-text">
                  {repo.language && <span className="text-accent">{repo.language}</span>}
                  <span>updated {timeAgo(repo.updated_at)}</span>
                </div>
              </a>
            ))}
        </div>
      )}
    </section>
  );
}
