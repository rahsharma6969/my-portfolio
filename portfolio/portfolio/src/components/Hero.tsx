import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter(
    'Full-Stack Engineer building scalable web apps and AI-powered systems.',
    35,
  );

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 font-mono text-sm text-accent">$ whoami</p>

      <h1 className="mb-6 font-mono text-4xl font-bold text-text-bright sm:text-5xl">
        Hi, I'm <span className="text-accent">Rahul Sharma</span>
      </h1>

      {/* min-h reserves space so the layout doesn't jump as text types in */}
      <p className="mb-10 min-h-[3.5rem] max-w-2xl font-mono text-lg text-text">
        {typed}
        <span className="animate-pulse text-accent">▍</span>
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-transform hover:scale-105"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text-bright transition-colors hover:border-accent hover:text-accent"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
