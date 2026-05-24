'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HUB_URL } from '@/lib/links';

const links = [
  { href: '/', label: 'Home' },
  { href: '/comparison', label: 'Comparison' },
  { href: '/star-citizen', label: 'Star Citizen' },
  { href: HUB_URL, label: "Beginner's Guide", external: true },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-greenMid/60 bg-deepGreen/80 backdrop-blur supports-[backdrop-filter]:bg-deepGreen/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-offwhite transition hover:text-purple"
        >
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_12px_rgba(155,89,255,0.9)]"
          />
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            bestspacesim
            <span className="text-purple">.com</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <Link
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="rounded-full px-3 py-1.5 text-sm text-offwhite/80 transition hover:bg-greenMid hover:text-offwhite"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md border border-offwhite/10 p-2 text-offwhite"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-greenMid/60 bg-deepGreen md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.href + l.label}>
                <Link
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-offwhite/80 hover:bg-greenMid hover:text-offwhite"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
