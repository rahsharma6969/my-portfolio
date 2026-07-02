import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import GithubRepos from '../components/GithubRepos';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

export default function Home() {
  // Deriving data instead of storing it separately: `featured` is computed
  // from `projects` every render. No useState needed — if it can be
  // calculated from existing data, it doesn't belong in state.
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-mono text-2xl font-bold text-text-bright">Featured Projects</h2>
          <Link to="/projects" className="font-mono text-sm text-accent hover:underline">
            view all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* index * 100ms delay = each card reveals slightly after the last,
              a "stagger" — one orchestrated moment reads as intentional,
              vs. everything popping in at once. */}
          {featured.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <GithubRepos />
    </>
  );
}
