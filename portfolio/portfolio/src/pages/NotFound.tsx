import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="mb-4 font-mono text-sm text-warn">$ 404: route not found</p>
      <Link to="/" className="font-mono text-sm text-accent hover:underline">
        ← back home
      </Link>
    </section>
  );
}
