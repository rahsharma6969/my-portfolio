import { useEffect, useState } from 'react';

// A DISCRIMINATED UNION for request state. At any moment we're in exactly
// ONE of these shapes — TypeScript narrows which fields exist based on
// `status`, so e.g. `state.data` is only accessible after checking
// `status === 'success'`. This is the professional alternative to
// separate `loading`/`error`/`data` booleans that can contradict each other
// (e.g. loading=true AND error="x" at the same time, which shouldn't happen).
type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: T };

/**
 * Generic hook: <T> means "whatever shape of data this URL returns."
 * useFetch<GithubRepo[]>(url) types `data` as GithubRepo[] automatically.
 */
export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({ status: 'loading' });

  useEffect(() => {
    // AbortController lets us cancel the in-flight request if the component
    // unmounts (or `url` changes) before it resolves. Without this, a slow
    // request could resolve AFTER unmount and call setState on a component
    // that no longer exists — React warns about this, and it can cause
    // subtle bugs where stale data overwrites newer data.
    const controller = new AbortController();

    setState({ status: 'loading' });

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          // GitHub returns 403 with a rate-limit message when you exceed
          // 60 unauthenticated requests/hour — a real constraint of this
          // specific API that we handle explicitly rather than a generic
          // "something went wrong."
          if (res.status === 403) throw new Error('GitHub API rate limit reached. Try again later.');
          throw new Error(`Request failed (${res.status})`);
        }
        return res.json();
      })
      .then((data: T) => setState({ status: 'success', data }))
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return; // cancelled, not a real error
        setState({ status: 'error', error: err instanceof Error ? err.message : 'Unknown error' });
      });

    return () => controller.abort();
  }, [url]);

  return state;
}
