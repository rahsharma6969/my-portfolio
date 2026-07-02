import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
}

// A wrapper component ("higher-order" in spirit, though not the formal HOC
// pattern) — it adds behavior (scroll-reveal) around whatever you pass as
// children, without those children needing to know anything about it.
// Note: the global `prefers-reduced-motion` rule in index.css already
// forces all transition-durations to ~0, so this automatically becomes a
// no-op fade for users who've asked for reduced motion — no extra logic needed.
export default function Reveal({ children, delayMs = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
