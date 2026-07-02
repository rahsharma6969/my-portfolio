import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  // useParams reads dynamic segments from the URL. We'll define the route
  // as "/projects/:id" in App.tsx — whatever's in that URL slot shows up
  // here as `id`. Visiting /projects/task-board gives id === "task-board".
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Always handle the "not found" case explicitly — a common real-world
  // scenario (bad link, typo, deleted project) that a portfolio reviewer
  // WILL test by editing the URL.
  if (!project) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="mb-4 font-mono text-sm text-warn">$ cat: project not found (404)</p>
        <Link to="/projects" className="font-mono text-sm text-accent hover:underline">
          ← back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/projects" className="mb-8 inline-block font-mono text-sm text-accent hover:underline">
        ← back to projects
      </Link>

      <p className="mb-2 font-mono text-sm text-accent">~/projects/{project.id}</p>
      <h1 className="mb-4 font-mono text-3xl font-bold text-text-bright">{project.title}</h1>
      <p className="mb-8 text-lg">{project.description}</p>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded border border-border bg-surface px-2 py-1 font-mono text-xs">
            {tech}
          </span>
        ))}
      </div>

      <h2 className="mb-3 font-mono text-lg font-semibold text-text-bright">Role</h2>
      <p className="mb-8">{project.role}</p>

      <h2 className="mb-3 font-mono text-lg font-semibold text-text-bright">Highlights</h2>
      <ul className="mb-8 list-inside list-disc space-y-2">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="flex gap-4 font-mono text-sm">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            View Code →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            Live Demo →
          </a>
        )}
      </div>
    </section>
  );
}
