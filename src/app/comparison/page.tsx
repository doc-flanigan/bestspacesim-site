import Link from 'next/link';
import { ComparisonExplorer } from '@/components/ComparisonExplorer';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { GAMES } from '@/data/games';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';

export const metadata = {
  title: 'Space Sim Comparison 2026 — 6 Games Scored Side by Side',
  description:
    'Star Citizen vs Elite Dangerous vs No Man’s Sky vs EVE, X4 & Starfield — scored side by side. Filter by multiplayer, free-to-try, and price to find your game.',
  alternates: { canonical: '/comparison' },
};

const faqs = [
  {
    q: 'Which space sim is best overall in 2026?',
    a: 'Star Citizen (9.4/10) tops our rankings for players who want a persistent living universe, with the caveat that it is alpha software. Elite Dangerous (8.2/10) is the strongest finished space sim.',
  },
  {
    q: 'Which space sim can I try for free?',
    a: 'Star Citizen is free during its periodic Free Fly events — no purchase required, just a free RSI account. The other games on this list are paid, though several see frequent Steam sales.',
  },
  {
    q: 'Which space sim is best for single-player?',
    a: 'X4: Foundations for empire-building depth, Starfield for story, No Man’s Sky for relaxed exploration. Star Citizen and EVE Online are multiplayer-first.',
  },
];

export default function ComparisonPage() {
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
          { name: 'Comparison', url: '/comparison' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Comparison · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Compare every major space sim, side by side
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
          Filter by what actually matters to you — multiplayer or solo, free
          to try, and your budget. We will show only the space sims that fit
          and score them on the features that separate the genre.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <CTAButton />
          <SecondaryButton />
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <ComparisonExplorer games={GAMES} />
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Every space sim at a glance
        </h2>
        <ol className="mt-5 space-y-3">
          {[...GAMES]
            .sort((a, b) => a.rank - b.rank)
            .map((g) => (
              <li key={g.id} className="text-base leading-relaxed text-offwhite/85">
                <strong className="text-offwhite">
                  {g.rank}. {g.title} ({g.score}/10)
                </strong>{' '}
                — {g.tagline} <span className="text-muted">({g.priceLabel})</span>
              </li>
            ))}
        </ol>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 pb-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Popular head-to-head matchups
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-offwhite/80">
          Deciding between two games? See how Star Citizen stacks up one-on-one.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {GAMES.filter((g) => g.id !== 'star-citizen').map((g) => (
            <Link
              key={g.id}
              href={`/star-citizen-vs/${g.id}`}
              className="rounded-full border border-purple/40 px-4 py-2 text-sm text-offwhite/85 transition hover:border-purple hover:bg-purple/10"
            >
              Star Citizen vs {g.title} →
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
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
        <p className="mt-8 text-sm text-muted">
          Deciding on Star Citizen specifically?{' '}
          <Link
            href="/is-star-citizen-worth-it"
            className="text-purple hover:text-purple-dark"
          >
            Read the honest worth-it verdict →
          </Link>{' '}
          Or see the{' '}
          <Link href="/best-space-games" className="text-purple hover:text-purple-dark">
            full ranked list of the best space games →
          </Link>
        </p>
      </section>

      <PageSources route="/comparison" />
    </>
  );
}
