import { Link } from 'react-router-dom';
import type { Project } from '../data/types';

// Typing props: this component ONLY accepts a `project` matching the
// Project interface. TypeScript will error at compile time if you
// forget to pass it, or pass the wrong shape — this is what makes
// large React codebases maintainable by teams.
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
    >
      <p className="mb-2 font-mono text-xs text-accent">~/projects/{project.id}</p>
      <h3 className="mb-2 text-xl font-semibold text-text-bright group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mb-4 text-sm">{project.tagline}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          // `key` is required whenever you render a list with .map() —
          // React uses it to track which item is which across re-renders,
          // instead of re-rendering the entire list from scratch.
          <span
            key={tech}
            className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-text"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
