export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center font-mono text-xs text-text">
      <p>
        <span className="text-accent">$</span> echo "built with React + TypeScript" — © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
