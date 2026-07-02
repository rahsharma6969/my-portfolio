import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

export default function Projects() {
  // useState: `filter` is the current selected tech, `setFilter` updates it.
  // Calling setFilter triggers a re-render with the new value.
  const [filter, setFilter] = useState<string>('all');

  // Build the list of unique technologies across all projects, once.
  const allTech = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.stack));
    return ['all', ...Array.from(set)];
  }, []); // empty deps = compute once, since `projects` never changes at runtime

  // useMemo: only recompute the filtered list when `filter` actually changes,
  // not on every re-render of this component (e.g. from unrelated state).
  // For a list this small it's not a perf necessity — but it's the pattern
  // you're expected to know and reach for once lists get large or the
  // computation gets expensive.
  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.stack.includes(filter));
  }, [filter]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 font-mono text-sm text-accent">$ ls ./projects</p>
      <h1 className="mb-8 font-mono text-3xl font-bold text-text-bright">All Projects</h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {allTech.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              filter === tech
                ? 'border-accent bg-accent-dim text-accent'
                : 'border-border text-text hover:border-accent hover:text-accent'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-text">No projects match that filter yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
