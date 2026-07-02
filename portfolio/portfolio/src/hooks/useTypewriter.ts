import { useEffect, useState } from 'react';

/**
 * A custom hook = a plain function that starts with "use" and calls other
 * hooks inside it. It lets you extract reusable STATEFUL LOGIC out of a
 * component. Any component can call useTypewriter(text) and get back the
 * "typed so far" string, without duplicating this timer logic.
 */
export function useTypewriter(text: string, speedMs = 40) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed(''); // reset if `text` changes
    let i = 0;

    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speedMs);

    // CLEANUP FUNCTION: React runs this when the component unmounts,
    // or before re-running the effect (if `text`/`speedMs` change).
    // Without this, you'd leak intervals every time the effect re-runs.
    return () => clearInterval(interval);
  }, [text, speedMs]);

  return displayed;
}
