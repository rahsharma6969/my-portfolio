import { skills } from '../data/skills';
import type { Skill } from '../data/types';

const categories: { key: Skill['category']; label: string }[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Databases' },
  { key: 'ai-ml', label: 'AI / ML' },
  { key: 'tools', label: 'Tools' },
];

// Reusable inline sub-component. Small enough it doesn't need its own file,
// but pulling it out avoids repeating the same JSX 3 times below.
function Timeline({
  items,
}: {
  items: { title: string; meta: string; points: string[] }[];
}) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.title} className="border-l-2 border-border pl-4">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold text-text-bright">{item.title}</h3>
            <span className="font-mono text-xs text-accent">{item.meta}</span>
          </div>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 font-mono text-sm text-accent">$ cat about.md</p>
      <h1 className="mb-8 font-mono text-3xl font-bold text-text-bright">About Me</h1>

      <p className="mb-12 text-lg leading-relaxed">
        Final-year B.E. Information Technology student seeking roles as a Software Developer /
        Full Stack Engineer. Experienced in building scalable web applications and AI-powered
        systems using the MERN stack and Python frameworks, with a strong focus on REST APIs,
        real-time systems, and deep learning-based solutions.
      </p>

      <h2 className="mb-6 font-mono text-xl font-bold text-text-bright">Skills</h2>
      <div className="mb-14 space-y-8">
        {categories.map(({ key, label }) => {
          const items = skills.filter((s) => s.category === key);
          if (items.length === 0) return null;

          return (
            <div key={key}>
              <h3 className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text-bright"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="mb-6 font-mono text-xl font-bold text-text-bright">Experience</h2>
      <div className="mb-14">
        <Timeline
          items={[
            {
              title: 'Full Stack Developer (Self Projects)',
              meta: '2024 – Present',
              points: [
                'Designed and deployed scalable web applications using the MERN stack and FastAPI',
                'Built real-time systems using WebSockets (Socket.io) supporting multiple concurrent users',
                'Developed AI-based applications using PyTorch for computer vision tasks',
                'Deployed applications using Vercel and Render with optimized performance',
              ],
            },
            {
              title: 'DSA Bootcamp – Technical Session (Java)',
              meta: 'Feb 2026',
              points: [
                'Conducted a 4-day intensive DSA bootcamp for 2nd-year students on placement prep',
                'Taught arrays, linked lists, trees, graphs, and sorting algorithms in Java',
                'Covered problem-solving patterns for technical interviews',
              ],
            },
            {
              title: 'Flask Web Development Workshop',
              meta: 'Jan 2025',
              points: [
                'Conducted a hands-on Flask workshop for building web applications with Python',
                'Guided participants through routing, templating, and API integration',
                'Helped students understand REST API design and deployment',
              ],
            },
          ]}
        />
      </div>

      <h2 className="mb-6 font-mono text-xl font-bold text-text-bright">Education</h2>
      <div className="mb-14 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 border-l-2 border-border pl-4">
          <div>
            <h3 className="font-semibold text-text-bright">B.E. Information Technology</h3>
            <p className="text-sm">Mumbai University — CGPA: 8.02 (76.19%)</p>
          </div>
          <span className="font-mono text-xs text-accent">2022 – 2026</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 border-l-2 border-border pl-4">
          <div>
            <h3 className="font-semibold text-text-bright">HSC Science</h3>
            <p className="text-sm">Maharashtra State Board — 65%</p>
          </div>
          <span className="font-mono text-xs text-accent">2022</span>
        </div>
      </div>

      <h2 className="mb-6 font-mono text-xl font-bold text-text-bright">Achievements &amp; Certifications</h2>
      <ul className="list-inside list-disc space-y-2 text-sm">
        <li>Built and deployed 3+ full-stack and AI-based applications with live links</li>
        <li>Selected participant, Bharatiya Antariksh Hackathon 2025</li>
        <li>Coursera — Python for Data Science</li>
        <li>PW Skills — Full Stack Web Development (MERN Stack)</li>
        <li>Udemy — AI &amp; Machine Learning (Deep Learning, NLP, Deployment)</li>
      </ul>
    </section>
  );
}
