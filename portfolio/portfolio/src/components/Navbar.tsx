import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: '~/home' },
  { to: '/projects', label: '~/projects' },
  { to: '/about', label: '~/about' },
  { to: '/contact', label: '~/contact' },
];

export default function Navbar() {
  // UI-only state: is the mobile menu open? This never needs to be shared
  // with any other component, so it lives right here rather than being
  // lifted up or put in context.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="font-mono text-sm font-bold text-text-bright"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-accent">&gt;</span> rahulsharma<span className="animate-pulse text-accent">_</span>
        </NavLink>

        {/* Desktop nav — hidden below the sm breakpoint */}
        <ul className="hidden gap-1 font-mono text-sm sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 transition-colors ${
                    isActive ? 'bg-accent-dim text-accent' : 'text-text hover:text-text-bright'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button — only visible below sm. aria-expanded and
            aria-label are essential here: a screen reader user hears an
            unlabeled "button" otherwise, with no idea what it does or
            whether the menu is currently open. */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex flex-col gap-1.5 p-2 sm:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-text-bright transition-transform ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`block h-0.5 w-5 bg-text-bright transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-5 bg-text-bright transition-transform ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel — conditionally rendered based on state.
          `menuOpen && (...)` is React's shorthand for "render this only if
          the condition is true, render nothing otherwise." */}
      {menuOpen && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-border px-6 py-4 font-mono text-sm sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 transition-colors ${
                    isActive ? 'bg-accent-dim text-accent' : 'text-text hover:text-text-bright'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
