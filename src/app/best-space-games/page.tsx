import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { GAMES } from '@/data/games';
import { SITE_URL } from '@/lib/links';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';

export const metadata = {
  title: 'Best Space Games 2026 — 6 Worth Playing',
  description:
    'The best space games of 2026, ranked: Star Citizen (9.4), Elite Dangerous, No Man’s Sky, EVE Online, X4, and Starfield — with an honest one-line verdict for each.',
  alternates: { canonical: '/best-space-games' },
};

const ranked = [...GAMES].sort((a, b) => a.rank - b.rank);

const faqs = [
  {
    q: 'What is the best space game in 2026?',
    a: 'Star Citizen is our top pick at 9.4/10 for players who want a persistent living universe with seamless planet-to-space flight — with the caveat that it is still in alpha. If you want a finished game instead, Elite Dangerous (8.2/10) is the strongest complete space sim, and No Man’s Sky is the best relaxed pick.',
  },
  {
    q: 'What is the best free space game?',
    a: 'None of our top six is fully free-to-play, but Star Citizen is free during its periodic Free Fly events — no purchase required, just a free RSI account. That makes it the best way to play a AAA-scale space game for $0, when an event window is open.',
  },
  {
    q: 'What is the best single-player space game?',
    a: 'For story, Starfield. For empire-building depth, X4: Foundations. For chill exploration, No Man’s Sky. Star Citizen and EVE Online are multiplayer-first and not built around a solo campaign.',
  },
  {
    q: 'Are space sims hard to learn?',
    a: 'The deep ones are. Star Citizen, EVE Online, and X4 all have steep learning curves; Elite Dangerous is moderate; No Man’s Sky and Starfield are the most approachable. Our comparison table scores each game so you can match depth to your patience.',
  },
];

export default function BestSpaceGamesPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: ranked.length,
    itemListElement: ranked.map((g) => ({
      '@type': 'ListItem',
      position: g.rank,
      name: g.title,
      url:
        g.id === 'star-citizen'
          ? `${SITE_URL}/star-citizen`
          : `${SITE_URL}/star-citizen-vs/${g.id}`,
    })),
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Best Space Games', url: '/best-space-games' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Ranked · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          The best space games in 2026
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/85 sm:text-lg">
          The best space game in 2026 is <strong className="text-offwhite">Star
          Citizen</strong> for players who want a living universe, <strong className="text-offwhite">Elite
          Dangerous</strong> for pure flight, and <strong className="text-offwhite">No
          Man&apos;s Sky</strong> for relaxed exploration. Here are the six titles
          actually worth your time, ranked — each with an honest one-line
          verdict and what it really costs.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <ol className="space-y-6">
          {ranked.map((g) => (
            <li
              key={g.id}
              className="rounded-2xl border border-greenMid bg-greenMid/30 p-6"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-2xl font-semibold text-offwhite">
                  {g.rank}. {g.title}
                </h2>
                <span className="text-sm font-semibold text-purple">
                  {g.score}/10
                </span>
              </div>
              <p className="mt-2 text-base leading-relaxed text-offwhite/85">
                {g.tagline}
              </p>
              <p className="mt-2 text-sm text-offwhite/70">
                <strong className="text-offwhite/90">Best for:</strong> {g.bestFor}
              </p>
              <p className="mt-1 text-sm text-muted">{g.priceLabel}</p>
              <p className="mt-3 text-sm">
                {g.id === 'star-citizen' ? (
                  <Link
                    href="/star-citizen"
                    className="text-purple hover:text-purple-dark"
                  >
                    Read the full Star Citizen review →
                  </Link>
                ) : (
                  <Link
                    href={`/star-citizen-vs/${g.id}`}
                    className="text-purple hover:text-purple-dark"
                  >
                    Star Citizen vs {g.title} →
                  </Link>
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-4 space-y-6">
          {faqs.map((f) => (
            <article key={f.q}>
              <h3 className="font-display text-lg font-semibold text-offwhite">
                {f.q}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-offwhite/85">
                {f.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 pb-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-4">
          <CTAButton trackingLabel="best-space-games-cta" />
          <Link href="/comparison" className="text-sm text-purple hover:text-purple-dark">
            Or filter the full comparison table →
          </Link>
        </div>
      </section>

      <PageSources route="/best-space-games" />
    </>
  );
}
