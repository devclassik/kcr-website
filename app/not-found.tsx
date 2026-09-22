import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found on KCR Nig Ltd.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-[var(--bg-void)] text-[var(--text-primary)]">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-sm font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          404 Error
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          This page could not be found.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          The page may have moved, been removed, or never existed. Explore our plugins, engineering services, or contact page instead.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/plugins"
            className="px-5 py-3 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 hover:border-indigo-500 transition-colors"
          >
            Browse plugins
          </Link>
        </div>
      </div>
    </main>
  );
}
