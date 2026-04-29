import Link from 'next/link';
import { HUB_URL } from '@/lib/links';

const links = [
  { href: '/', label: 'Home' },
  { href: '/comparison', label: 'Comparison' },
  { href: '/star-citizen', label: 'Star Citizen' },
  { href: '/free-fly', label: 'Free Fly Events' },
  { href: HUB_URL, label: "Beginner's Guide", external: true },
];

export function NavBar() {
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
      </nav>
    </header>
  );
}
