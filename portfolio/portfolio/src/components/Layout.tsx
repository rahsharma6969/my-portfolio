import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Layout wraps every page. <Outlet /> is where React Router injects
// whichever page component matches the current route — this is how
// you share a Navbar/Footer across all pages without repeating them.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* A "skip link" — invisible until focused (e.g. via Tab from a fresh
          page load). Lets keyboard/screen-reader users jump past the navbar
          straight to content, instead of tabbing through every nav link on
          every single page. This is a WCAG requirement, not a nice-to-have. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
