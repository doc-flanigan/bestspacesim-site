import { ComparisonExplorer } from '@/components/ComparisonExplorer';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { GAMES } from '@/data/games';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';

export const metadata = {
  title: 'Space Sim Comparison 2026 — Filter by Price & Multiplayer',
  description:
    'Compare every major space sim of 2026 side by side. Filter by multiplayer, singleplayer, free-to-try, and price to find the right game for you.',
  alternates: { canonical: '/comparison' },
};

export default function ComparisonPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Comparison', url: '/comparison' },
        ]}
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
    </>
  );
}
