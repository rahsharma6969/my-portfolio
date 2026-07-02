import { useEffect, useRef, useState } from 'react';

/**
 * useRef gives you a mutable box (`{ current: ... }`) that persists across
 * re-renders WITHOUT causing a re-render when it changes — unlike useState.
 * Here we use it to hold a reference to a real DOM node, so the browser's
 * IntersectionObserver API can watch it for visibility.
 *
 * This is the classic "escape hatch" use case for refs: reaching outside
 * React's render cycle to talk to the actual DOM/browser APIs directly.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // reveal once, then stop watching — cheaper than re-triggering on every scroll
      }
    }, options ?? { threshold: 0.15 });

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
